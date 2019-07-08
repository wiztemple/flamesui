# flamescss :fire: :fire: :fire:
A mini-sized css framework/boilerplate. It's made for developers who need more control of css styles without the burden or hidden impediments of a regular css framework. The flexibility that comes with `flames.css` is near perfect. You can pick what you need, either the `layout styles` or `the navbar styles` and use it. You don't need to leave it as `flames.css`, you can rename it to `styles.css`, just modify it however you like, it's all abouy you :boy: :girl: .

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

## Classes and modifiers

## Creator
**Sullivan Wisdom**

## Inspiration(s)
- [Bulma.css](bulma.io)
- [Bootstrap.css](https://getbootstrap.com/)
- [Skeleton.css](http://getskeleton.com/)
- [Spectre.css](https://picturepan2.github.io/spectre/index.html)
