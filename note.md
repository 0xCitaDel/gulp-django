# Установка всех необходимых пакетов

## Для запуска сборки необходимо установить все зависимости, выполнив следующую команду:

```shell
npm install browser-sync del gulp gulp-if gulp-plumber gulp-changed gulp-imagemin imagemin-pngquant imagemin-webp autoprefixer cssnano gulp-htmlmin gulp-npm-dist gulp-rename gulp-sass gulp-postcss postcss-sort-media-queries gulp-sourcemaps gulp-wait sass postcss @babel/core @babel/register @babel/preset-env esbuild --save-dev
```

### Описание пакетов:

- browser-sync - Перезагружает браузер при изменении файлов (HTML, CSS, JS и др.)
- del - Удаление файлов и папок
- esbuild - Сборщик (bundler) и транспайлер JavaScript
- gulp - Сердце всей сборки — таск-раннер
- gulp-if - Условные конструкции внутри .pipe()
- gulp-plumber - Защита от сбоев пайплайна при ошибках
- gulp-changed - Пропускает через пайплайн только те файлы, которые изменились с прошлого раза
- gulp-imagemin - Сжимает изображения без потери качества
- imagemin-pngquant - Оптимизация PNG
- imagemin-webp - 
- sass - Компилятор SASS/SCSS
- gulp-sass - Обёртка над sass для работы с Gulp
- postcss - Постобработка CSS через плагины
- gulp-postcss - Интеграция PostCSS в Gulp
- autoprefixer - Автоматическое добавление вендорных префиксов
- postcss-sort-media-queries - Сортировка и группировка медиа-запросов
- cssnano - Минификация CSS
- gulp-sourcemaps - Генерация source map-ов
- gulp-rename - Переименование файлов
- [x] gulp-wait - Задержка выполнения задач
- [x] gulp-htmlmin - Минификация HTML
- [x] gulp-npm-dist - Извлечение необходимых файлов из node_modules

- @babel/core - Ядро Babel
- @babel/register — Временное подключение Babel в рантайме
- @babel/preset-env - Современная настройка Babel под окружение

## Не установлены, но нужно использовать
- gulp-svg-sprite - берёт десятки маленьких SVG-файликов и делает из них единый, компактный спрайт



# Полезные пакеты

- gulp-file-include - Позволяет вставлять одни HTML-файлы внутрь других, как будто ты используешь шаблоны.
- merge-stream - Позволяет тебе объединить несколько Gulp-потоков (streams) в один
- gulp-ext-replace - Меняет расширение файлов в пайплайне Gulp
- gulp-replace - Заменяет строки или регулярные выражения в файлах
- gulp-typograf - Вычищает типографический бардак
- imagemin-webp - Конвертация изображений в формат WebP
- webpack-stream - Позволяет использовать Webpack прямо внутри Gulp
- style-loader - Инъектор CSS в браузер
- css-loader - Импортирует CSS прямо в JavaScript-файлы

### CSS / SCSS

- [Deprecated] gulp-autoprefixer - Предпочтительно использовать postcss + autoprefixer напрямую
- [Deprecated] gulp-group-css-media-queries - Устарел, заменяется на postcss-sort-media-queries
- [Deprecated] gulp-csso - Почти не обновляется. Альтернатива: cssnano
- [Deprecated] gulp-clean-css - Работает, но лучше использовать через postcss-плагины
- [Deprecated] gulp-sass-glob - Может конфликтовать с современными @use/@forward синтаксисами

### Изображения и шрифты
- [Deprecated] gulp-fonter-fix - Конвертации шрифтов между форматами
- [Deprecated] gulp-ttf2woff2 - Работает, но есть npm-библиотеки получше, например, ttf2woff2-cli
- [Deprecated] gulp-web-images-css - Низкая поддержка, сложно кастомизировать. Рекомендуется использовать gulp-if + imagemin
- [Deprecated] gulp-html-img-to-picture - Нестабильный, часто ломается. Лучше использовать HTML-шаблонизаторы или ручной <picture>

### JavaScript
- [Deprecated] gulp-babel - Babel лучше запускать через webpack или esbuild, Gulp-плагин не обязателен
- [Deprecated] gulp-uglify - Плохо работает с современным ES6+. Лучше использовать terser через esbuild или webpack

### Other
- [Deprecated] gulp-cssbeautify - Устаревший стиль форматирования. Лучше использовать stylelint или prettier
- [Deprecated] gulp-notify - Иногда вызывает проблемы в CI/CD. Лучше использовать консольные логгеры или toast-плагины
- [Deprecated] gulp-header - Редко используется, проще добавлять заголовки через препроцессоры

