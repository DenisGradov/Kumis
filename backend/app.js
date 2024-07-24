import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

dotenv.config();

const app = express();
const PORT = 3030;

// Middleware

// Настройка CORS
app.use(cors({ origin: ['https://kumis.top','http://kumis.top', 'http://localhost:8080'] }));
app.use(express.json());

// Initialize and open the database
const dbPromise = open({
    filename: './database.sqlite',
    driver: sqlite3.Database
});

async function initializeDatabase() {
    const db = await dbPromise;
    await db.exec(`
    CREATE TABLE IF NOT EXISTS visitors (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      ip TEXT,
      visit_date DATE
    );
    CREATE TABLE IF NOT EXISTS counters (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      date DATE,
      daily_visitors INTEGER,
      monthly_visitors INTEGER,
      total_visitors INTEGER
    );
  `);

    const today = new Date().toISOString().split('T')[0];
    const thisMonth = today.substring(0, 7);

    const counter = await db.get(`SELECT * FROM counters WHERE date = ?`, [today]);
    if (!counter) {
        await db.run(`
      INSERT INTO counters (date, daily_visitors, monthly_visitors, total_visitors)
      VALUES (?, 0, (SELECT COALESCE(SUM(daily_visitors), 0) FROM counters WHERE date LIKE ? || '%'), (SELECT COALESCE(SUM(daily_visitors), 0) FROM counters))
    `, [today, thisMonth]);
    }
}

async function updateCounters(db, isNewVisitor) {
    const today = new Date().toISOString().split('T')[0];
    const thisMonth = today.substring(0, 7);

    const [daily, monthly, total] = await Promise.all([
        db.get(`SELECT COUNT(DISTINCT ip) as count FROM visitors WHERE visit_date = ?`, [today]),
        db.get(`SELECT COUNT(DISTINCT ip) as count FROM visitors WHERE visit_date LIKE ? || '%'`, [thisMonth]),
        db.get(`SELECT COUNT(DISTINCT ip) as count FROM visitors`)
    ]);

    const counters = await db.get(`SELECT * FROM counters WHERE date = ?`, [today]);

    if (isNewVisitor) {
        await db.run(`
        UPDATE counters
        SET daily_visitors = ?, monthly_visitors = ?, total_visitors = ?
        WHERE date = ?
      `, [daily.count, monthly.count, total.count, today]);
    }
}

async function checkAndResetCounters() {
    const db = await dbPromise;
    const today = new Date().toISOString().split('T')[0];
    const counter = await db.get(`SELECT * FROM counters ORDER BY date DESC LIMIT 1`);

    if (counter && counter.date !== today) {
        const thisMonth = today.substring(0, 7);
        const lastMonth = counter.date.substring(0, 7);

        // Reset monthly visitors if a new month has started
        const monthlyVisitors = thisMonth !== lastMonth ? 0 : counter.monthly_visitors;

        // Reset daily visitors for the new day
        await db.run(`
      INSERT INTO counters (date, daily_visitors, monthly_visitors, total_visitors)
      VALUES (?, 0, ?, ?)
    `, [today, monthlyVisitors, counter.total_visitors]);
    }
}

app.post("/api/hello", async (req, res) => {
    const db = await dbPromise;
    const ip = req.ip;
    const today = new Date().toISOString().split('T')[0];

    // Check and reset counters if needed
    await checkAndResetCounters();

    const visitor = await db.get(`SELECT * FROM visitors WHERE ip = ? AND visit_date = ?`, [ip, today]);

    let isNewVisitor = false;
    if (!visitor) {
        await db.run(`INSERT INTO visitors (ip, visit_date) VALUES (?, ?)`, [ip, today]);
        isNewVisitor = true;
    }

    await updateCounters(db, isNewVisitor);

    const counters = await db.get(`SELECT * FROM counters WHERE date = ?`, [today]);

    res.status(200).send({
        dailyVisitors: counters.daily_visitors,
        monthlyVisitors: counters.monthly_visitors,
        totalVisitors: counters.total_visitors
    });
});

app.listen(PORT, '0.0.0.0', async () => {
    await initializeDatabase();
    console.log(`Сервер запущен на порту ${PORT}`);
});
