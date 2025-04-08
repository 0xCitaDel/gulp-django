# Установка всех пакетов

```shell
npm install browser-sync del gulp gulp-if gulp-plumber autoprefixer cssnano gulp-htmlmin gulp-npm-dist gulp-rename gulp-sass gulp-postcss postcss-sort-media-queries gulp-sourcemaps gulp-wait sass postcss @babel/core @babel/register @babel/preset-env esbuild --save-dev
```

## Описание пакетов:

- browser-sync - Перезагружает браузер при изменении файлов (HTML, CSS, JS и др.)
- del - Используется для удаления файлов и папок
- esbuild - Сборщик (bundler) и транспайлер JavaScript
- gulp-plumber - Предотвращает "падение" Gulp-пайплайна при возникновении ошибок.
- gulp - Собственно Gulp
- gulp-if — Позволяет выполнять .pipe() только если условие true

- sass - Необходим для сборки SASS / SCSS
- postcss - Инструмент для обработки CSS с помощью плагинов

- gulp-sass - Сборка SASS / SCSS
- gulp-postcss - Обёртка, которая позволяет использовать PostCSS внутри Gulp
- postcss-sort-media-queries -  Группирует все ваши @media правила
- cssnano - Сжатие CSS файлов(удаление лишних пробелов и переносов строк)
- gulp-sourcemaps - Исходные карты для CSS
- autoprefixer - Добавляет vendor-префиксы в CSS-код
- gulp-rename - Позволяет изменять имя, расширение или путь файлов пайплайне
- gulp-wait - Добавляет задержку (паузу) в Gulp-таск
- [x] gulp-htmlmin - Сжимает HTML-файлы, удаляя всё ненужное
- [x] gulp-npm-dist - Помогает собирать только необходимые файлы из node_modules
- @babel/core - ядро самого Babe
- @babel/register — Преобразует современный JavaScript (ES6+) в Node.js-совместимый код.
- @babel/preset-env - Универсальный и настраиваемый пресет для Babel

## Не установлены, но нужно использовать
- gulp-changed - Пропускает через пайплайн только те файлы, которые изменились с прошлого раза
- gulp-svg-sprite - берёт десятки маленьких SVG-файликов и делает из них единый, компактный спрайт
- webpack-stream - Позволяет использовать Webpack прямо внутри Gulp
- style-loader - Инъектор CSS в браузер
- css-loader - Импортирует CSS прямо в JavaScript-файлы
- gulp-babel - Запускает Babel внутри Gulp-задачи



# Полезные пакеты

- gulp-autoprefixer - Добавляет vendor-префиксы в CSS-код
- gulp-cssbeautify - Форматирует и выравнивает CSS-файлы
- gulp-file-include - Позволяет вставлять одни HTML-файлы внутрь других, как будто ты используешь шаблоны.
- gulp-header - Добавляет заголовок (header) — то есть текст или код в начало каждого файла, который проходит через сборку.
- gulp-notify - Показывает уведомления прямо на рабочем столе (или в консоли) во время выполнения Gulp-задач
- gulp-uglify - Mинифицирует JavaScript-файлы:
- merge-stream - Позволяет тебе объединить несколько Gulp-потоков (streams) в один
- gulp-sass-glob - позволяет использовать глобальные шаблоны в @import внутри SCSS-файлов
- gulp-csso - минификация и оптимизация CSS-файлов
- gulp-ext-replace - Меняет расширение файлов в пайплайне Gulp
- gulp-fonter-fix - Конвертации шрифтов между форматами
- gulp-imagemin - Сжимает изображения без потери качества
- gulp-replace - Заменяет строки или регулярные выражения в файлах
- gulp-ttf2woff2 - Конвертирует .ttf шрифты в .woff2, который
- gulp-typograf - Вычищает типографический бардак
- gulp-web-images-css - Автоматически добавляет поддержку WebP и AVIF
- gulp-html-img-to-picture - Преобразует теги <img> в теги <picture>
- imagemin-webp - Конвертация изображений в формат WebP
- gulp-clean-css - Сжатие CSS файлов(удаление лишних пробелов и переносов строк)


- [Deprecated ] gulp-group-css-media-queries - Группировка CSS медиа запросов
