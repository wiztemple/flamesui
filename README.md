# flamescss :fire: :fire: :fire:
A css-based web components made with Andela in-house project in mind. It's separated into components, just pick what you need and keep tweaking it till you get what you want or till you destroy it and probably have to re-write it yourself. :laughing: The flexibility that comes with `flames.css` is near perfect. You can pick what you need, either the `layout styles` or `the navbar styles` or `the buttons` and use it. You don't need to leave it as `flames.css`, you can rename it to `styles.css`, just modify it however you like, it's all about you. And one more thing, there is no file like `flames.css`, don't make it look like you are using a framework, it's not a framework, it's a UI store. :boy: :girl: .


## Style Guide
The current style guide. It's currently been worked on.
![Current Style Guide](./assets/images/home.png)

### Hero
![Current Style Guide](./assets/images/Component.png)

## what you really need

```
html {
  box-sizing: border-box;
  background-color: #fff;
  font-size: 16px;
  min-width: 300px;
  overflow-x: hidden;
  overflow-y: scroll;
  text-rendering: optimizeLegibility;
  text-size-adjust: 100%; 
}
```

`*, *::before, *::after {
  box-sizing: inherit; }
  `

## Typography
---
> style your anchor tag with sweet colors to override the default colors

```
a {
  color: #3273dc;
  cursor: pointer;
  text-decoration: none; 
}
a:hover {
  color: #363636; 
}
```

> override default paddings and margins for header tags like h1,h2,h3,h4,h5,h6

```
h1, h2, h3, h4, h5, h6 {
  margin-top: 0;
  margin-bottom: 0.5rem; 
}
```

> The paragraph tag, ordered list(ol), unordered list(ul)
```
p, ol, ul, dl {
  margin-top: 0;
  margin-bottom: 1rem; 
}
```

## Layout
```
  .container {
    width: 100%;
    padding: 0 0.9375rem;
    margin: 0 auto;
    position: relative;
  }

  .container-fluid {
    padding: 0 0.9375rem;
  }

  @media (min-width: 75rem) {
    .container {
      width: 71.25rem;
    }
  }

  .columns {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -0.9375rem;
  }

  @media (min-width: 576px) {
    .container {
      max-width: 540px;
    }
  }

  @media (min-width: 768px) {
    .container {
      max-width: 720px;
    }
  }

  @media (min-width: 992px) {
    .container {
      max-width: 960px;
    }
  }

  @media (min-width: 1200px) {
    .container {
      max-width: 1140px;
    }
  }

  .col-1,.col-2, .col-3, .col-4, .col-5, .col-6, .col-7,
  .col-8, .col-9, .col-10, .col-11, .col-12, .col, .col-auto
  {
    position: relative;
    width: 100%;
    padding: 0 15px;
  }

  @media (min-width: 768px) {
    .col {
      flex-basis: 0;
      flex-grow: 1;
      max-width: 100%;
    }

    .col-auto {
      flex: 0 0 auto;
      width: auto;
      max-width: 100%;
    }

    .col-1 {
      flex: 0 0 8.333333%;
      max-width: 8.333333%;
    }

    .col-2 {
      flex: 0 0 16.666667%;
      max-width: 16.666667%;
    }

    .col-3 {
      flex: 0 0 25%;
      max-width: 25%;
    }

    .col-4 {
      flex: 0 0 33.333333%;
      max-width: 33.333333%;
    }

    .col-5 {
      flex: 0 0 41.666667%;
      max-width: 41.666667%;
    }

    .col-6 {
      flex: 0 0 50%;
      max-width: 50%;
    }

    .col-7 {
      flex: 0 0 58.333333%;
      max-width: 58.333333%;
    }

    .col-8 {
      flex: 0 0 66.666667%;
      max-width: 66.666667%;
    }

    .col-9 {
      flex: 0 0 75%;
      max-width: 75%;
    }

    .col-10 {
      flex: 0 0 83.333333%;
      max-width: 83.333333%;
    }

    .col-11 {
      flex: 0 0 91.666667%;
      max-width: 91.666667%;
    }

    .col-12 {
      flex: 0 0 100%;
      max-width: 100%;
    }

  }
```

## Buttons

```
.button {
  display: inline-block;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.625rem 1.25rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: .25rem;
  cursor: pointer;
}

.button:focus {
  outline: none;
}

.button-dark {
  color: $light-grey;
  background-color: $color-black;
}
.button-dark:hover {
  background-color: $mid-black;
}

.button-rectangle {
  border-radius: 0;
}

.button-rounded {
  border-radius: 30px;
}
```

## Forms

```
.input-field {
  display: block;
  max-width: 100%;
  width: 100%;
  padding: 0.625rem .75rem;
  font-size: 1rem;
  line-height: 1.6;
  color: $mid-black;
  background-color: #fff;
  background-clip: padding-box;
  border-radius: 3px;
  border: 1px solid rgba(0, 0, 0, 0.08);
}

.input-field:focus {
  outline: none;
  border-color: rgba(42, 131, 214, 0.27);
  transition: border-color .15s ease-in-out;
}

.input-field:disabled,
.input-field:read-only {
  background-color: rgba(237, 237, 237, 0.2);
}
.input-field::-moz-placeholder,
.textarea::-moz-placeholder {
  color: rgba(54, 54, 54, 0.3);
}

.input-field::-webkit-input-placeholder {
  color: #c4c4c4;
}

.label {
  color: #363636;
  display: block;
  font-size: 1rem;
  font-weight: 700;
}

.label:not(:last-child) {
  margin-bottom: 0.5em;
}

.input-control {
  margin-bottom: 10px;
}

.form-horizontal {
  width: 100%;
  display: flex;
  justify-content: flex-start;
}

.form-vertical {
  position: relative;
}

.textarea {
  resize: none;
}
```

## Creator
**Sullivan Wisdom**

## Inspiration(s)
- [Bulma.css](bulma.io)
- [Bootstrap.css](https://getbootstrap.com/)
- [Skeleton.css](http://getskeleton.com/)
- [Spectre.css](https://picturepan2.github.io/spectre/index.html)
