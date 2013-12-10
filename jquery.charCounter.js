// jquery.charCounter - version 0.3.1

;(function($) {

   $.fn.counter = function(options){

      // default configuration properties
      var defaults = {
         allowed: 140,
         warning: 25,
         css: 'counter',
         counterText: '  characters',
         allowOverflow: false,
         disableButton: '',
         onWarning: null,
         onWarningOff: null,
         onDisallow: null,
         onAllow: null
      };

      var options = $.extend(defaults, options);

      function disableButton(count) {
         if (count > options.allowed) {
            $(options.disableButton).prop('disabled', true);
         } else {
            $(options.disableButton).prop('disabled', false);
         }
      }

      function calculate(obj, $counter){
         var $obj = $(obj);
         var value = $obj.val();
         var count = value.length;
         var available = options.allowed - count;

         if (!options.allowOverflow && count > options.allowed) {
            $obj.val(value.substring(0, options.allowed));
         }

         if (options.disableButton) {
            disableButton(count);
         }

         if (options.direction == 'up') {
            $counter.html(count + '/' + options.allowed + options.counterText);
         } else if (options.direction == 'down') {
            $counter.html(available + '/' + options.allowed + options.counterText);
         } else {
            $counter.html(available + options.counterText );
         }
      }

      this.each(function() {
         var $this = $(this);
         var value = $this.val();
         var len = value.length;
         var $counter = $(template({ id: this.id, css: options.css, text: options.counterText }));

         $this.after($counter);

         calculate(this, $counter);

         $this.bind("keyup change", function(){
            var value = $this.val();
            var len = value.length;

            calculate(this, $counter);

            if (len > (options.allowed - options.warning) && isFunc(options.onWarning)) {
               options.onWarning(this);
            }

            if (len <= (options.allowed - options.warning) && isFunc(options.onWarningOff)) {
               options.onWarningOff(this);
            }

            if (len > options.allowed && isFunc(options.onDisallow)) {
               options.onDisallow(this);
            }

            if (len <= options.allowed && isFunc(options.onAllow)) {
               options.onAllow(this);
            }
         });

         $this.keypress(function(event) {
            if (!options.allowOverflow && $(this).val().length >= options.allowed) {
               // block anything but text modify actions
               event = ( event ) ? event : window.event;
               var charCode = ( event.which ) ? event.which : event.keyCode
               return charCode == 8 || charCode == 46 || (charCode >= 33 && charCode <= 40)
            }
         })
      });
   };

   function template(opts) {
      return '<div id="'+ opts.id +'Counter" class="' + opts.css + '">'+ opts.text +'</div>'
   }

   function isFunc(func) {
      return typeof func == 'function';
   }

})(jQuery);
