# jquery.charCounter

Character counter for jQuery 1.7.1 and up.

Example usage with all the options:

```javascript
$(".count-chars").counter({
    allowed: 160,
    warning: 25,
    css: 'counter',
    counterText: ' characters',
    allowOverflow: true,
    direction: 'up',
    disableButton: 'input#submit',
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
