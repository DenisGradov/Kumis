const PORT = 3000;

//libs
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors({origin: ["http://localhost:5173"], credentials: true}));

app.post("/api", (req, res) => {
    const cookieToken = req.cookies.token;
    console.log(cookieToken);
    res.status(200).send({})
});

app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
});
