# charCounter

jQuery character counter for input fields

- jQuery 1.7.1 and up

Example usage with all the options:

    $(".charCounter").counter({
        allowed : 160,
        warning : 25,
        css: 'counter',
        counterText : ' merkkiä',
        allowOverflow : true,
        direction : 'up',
        disableButton: 'input#submit',
        onWarning: function(obj) {$(obj).parent().after().css('color', '#F9CBBB');},
        onWarningOff: function(obj) {$(obj).parent().after().css('color', 'black');},
        onDisallow: function(obj) {$(obj).css('background-color', '#F9CBBB');},
        onAllow: function(obj) {$(obj).css('background-color', 'white');}
    });


## License

MIT License