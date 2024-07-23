# Кумыс
## Данный сайт полностью посвящен кумысу. Что это, как появился и многое другое написано тут. Сайт будет постепенно дорабатываться
### [kumis.top](https://kumis.top)
# Запуск

## Frontend

### `npm run serve` - запуск фронта (из ./frontend)

## Backend

### `npm run dev` - запуск бека (из ./backend)

# ToDo list:

* ~~Сверстать базу сайта~~
* ~~Добавить поддержку темной темы~~
* ~~Добавить локализацию на несколько языков~~
* ~~Реализовать логирование числа уникальных юзеров сайта~~
* ~~Провести сео оптимизацию всего сайта~~
* ~~Добавить тайтл + фавикон для сайта~~
* Улучшить интерфейс сайта

# Лог версий:

## new - v1.0.2: Небольшие улучшения адаптивности:
Изменил размеры отступов, размеры шрифтов. Слегка переделал адаптивность раздела о кумысе

### v1.0.1: Небольшие доработки для деплоя

Фикс пары файлов для деплоя

### v1.0.0: Смена темы работает. Логирование уникальных юзеров. Сео

Теперь смена темы реально работает. При 1-ом запуске сайта - тема ставится как в ОС юзера. Добавил логирование
уникальных юзеров (+ отображение числа этих юзеров в разделе О нас). Провел сео оптимизацию (добавил тайтл сайту,
добавил мета теги (с поддержкой локализации)). Добавил фавикон сайта

### v0.4.0: Окончил базовую верстку. Добавил локализацию. Фиксы:

Создал компонент О нас. Добавил локализацию ко всему сайту (+ добавил немецкий язык). Вынес языки в новый файл
constants, а так же создал новый файл с утилитами. Пофиксил уровень слоя выпадающего списка языков

### v0.3.0: Компонент О кумысе

Создал компонент О кумысе, в котором добавил навигацию по мини-статьям. По клику на кнопку навигации юзеру высвечивает
картинку + текст. В данный момент вместо текста тут краткий ключ на английском (например вместо О кумысе - тут
aboutKumisTitle. Сделано это для того, что бы в некст версиях добавить локализацию под другие языки)

### v0.2.0: Шапка + грунт для базовых вещей

Добавил обнуляющие стили, подключил тейлвинд к проекту, сверстана шапка с переключением вкладок (заложен грунт под это),
выбор языка (авто-подтягивание
языка при 1-ом запуске браузера + юзер сам менять может), заложен грунт под смену темы

### v0.1.0:

Базовые файлы фронта, бека. Сделан макет;
