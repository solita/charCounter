# jquery.charCounter

Character counter for jQuery 1.7.1 and up.

Example usage with all the options:

```javascript
$(".count-chars").counter({
    allowed: 160,  // maximum allowed
    warning: 25,  // number of characters left when to show warning
    css: 'counter',  // counter CSS class
    counterText: ' characters',
    allowOverflow: true,
    direction: 'up',  // 'up', 'down' or null
    onWarning: function(input, counter) { /* ... */ },
    onWarningOff: function(input, counter) { /* ... */ },
    onDisallow: function(input, counter) {/* ... */ },
    onAllow: function(input, counter) { /* ... */ }
});
```

## Author

Juhana Harmanen ([@harmia](https://github.com/harmia))

## Contributors

Antti-Jussi Kovalainen ([@Darep](https://github.com/Darep)): Clean-up, error fixing and optimization

## License

MIT License
