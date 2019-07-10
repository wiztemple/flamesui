# flamescss :fire: :fire: :fire:
A mini-sized css framework/boilerplate. It's made for developers who need more control of css styles without the burden or hidden impediments of a regular css framework. The flexibility that comes with `flames.css` is near perfect. You can pick what you need, either the `layout styles` or `the navbar styles` and use it. You don't need to leave it as `flames.css`, you can rename it to `styles.css`, just modify it however you like, it's all abouy you :boy: :girl: .


## Style Guide
The current style guide. It's currently been worked on.
![Current Style Guide](./assets/images/home.png)

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
```

## Creator
**Sullivan Wisdom**

## Inspiration(s)
- [Bulma.css](bulma.io)
- [Bootstrap.css](https://getbootstrap.com/)
- [Skeleton.css](http://getskeleton.com/)
- [Spectre.css](https://picturepan2.github.io/spectre/index.html)
