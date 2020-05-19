# A Minimalist Boilerplate For Webapps 🚀

Focused on clean code and modern tooling:

-   [SCSS](http://sass-lang.com) + [normalize.css](https://necolas.github.io/normalize.css) + [BEM](http://getbem.com) + [sass-lint](https://github.com/sasstools/sass-lint) for stylesheets
-   [Babel](https://babeljs.io) + [Standard Style](https://standardjs.com) + [ESLint](https://eslint.org) for JavaScript
-   Pre-configured `.hound.yml` for automated code review with [Hound](https://houndci.com)
-   [Parcel](https://parceljs.org) for glueing it all together

## Usage

-   Download or clone `https://github.com/andrsphil/flink.git`. If you cloned the repository, you can delete the `.git` folder afterwards and initialize a new repository.
-   Run `npm init` to override the meta data in `package.json`.
-   Run `npm install` to install dependencies and you should be good to go!
-   You can run Parcel's development server using `npm start`. Please refer to the scripts section in `package.json` for other available commands.

## Flexbox Grid

Flink comes with a tiny framework for building Flexbox-based grids. The basic structure looks something like this:

```html
<div class="grid">
    <div class="grid-cols">
        <div class="grid-col grid-col--4"></div>
        <div class="grid-col grid-col--8"></div>
    </div>
</div>
```

You can configure the number of columns and the spacing between them using the `$grid-columns` (12 per default) and `$grid-gutter` variables.

The example above would give you a 12-column grid with two columns inside. However, the classes used in the example _do not actually exist_ in Flink. Instead, you'll need to use the styles and mixins provided in `_layout.scss` to build your own layouts. The reason for this is that I prefer [semantic CSS](https://maintainablecss.com/chapters/semantics/) over having column widths (and such) in class names. But to stick with the example for a moment, you could achieve that by writing:

```scss
.grid {
    @extend %grid;

    &-cols {
        @extend %grid-cols;
    }

    &-col {
        @extend %grid-col;
    }
}
```

`grid-col--1` through `grid-col--12` are generated automatically. But if you're like me and would rather have more semantic names, you may want to do this instead:

```scss
.content {
    @extend %grid-cols;

    &__wrapper {
        @extend %grid;
    }

    &__left,
    &__right {
        @extend %grid-col;
    }

    &__left {
        @include make-grid-col(4);
    }

    &__right {
        @include make-grid-col(8);
    }
}
```

... where the corresponding HTML would look like this:

```html
<div class="content__wrapper">
    <div class="content">
        <div class="content__left"></div>
        <div class="content__right"></div>
    </div>
</div>
```
