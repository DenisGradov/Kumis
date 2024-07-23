module.exports = {
  devServer: {
    host: '0.0.0.0', // Указывает, что сервер должен слушать на всех доступных сетевых интерфейсах
    port: 8080, // Замените на ваш порт, если используется другой
    allowedHosts: 'all', // Разрешает все хосты
    hot: false, // Явно отключает Hot Module Replacement (HMR)
    liveReload: false // Отключает live reload
  }
}
