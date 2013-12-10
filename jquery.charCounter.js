// jQuery Character Counter - version 0.2
// by Juhana Harmanen (harmia)
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
      };

      function calculate(obj){
         var count = $(obj).val().length;

         if (!options.allowOverflow && count > options.allowed) {
            $(obj).val($(obj).val().substring(0, options.allowed));
         }

         if (options.disableButton) {
            disableButton(count);
         }



         var available = options.allowed - count;

         if (options.direction == 'up') {
            $(obj).next().html(count + '/' + options.allowed + options.counterText);
         } else if (options.direction == 'down') {
            $(obj).next().html(available + '/' + options.allowed + options.counterText);
         } else {
            $(obj).next().html(available + options.counterText );
         }
      };

      this.each(function() {
         $(this).after('<div id="'+ this.id +'Counter" class="' + options.css + '">'+ options.counterText +'</div>');

         calculate(this);

         $(this).bind("keyup change", function(){
            calculate(this);

            if ($(this).val().length > (options.allowed - options.warning) && options.onWarning !== undefined) {
               options.onWarning(this);
            }
            if ($(this).val().length <= (options.allowed - options.warning) && options.onWarningOff !== undefined) {
               options.onWarningOff(this);
            }

            if ($(this).val().length > options.allowed && options.onDisallow !== undefined) {
               options.onDisallow(this);
            }
            if ($(this).val().length <= options.allowed && options.onAllow !== undefined) {
               options.onAllow(this);
            }
         });

         $(this).keypress(function(event) {
            //  if allowed length is reached, allow only modify actions
            if (!options.allowOverflow && $(this).val().length >= options.allowed) {
               event = ( event ) ? event : window.event;
               var charCode = ( event.which ) ? event.which : event.keyCode
               return charCode == 8 || charCode == 46 || (charCode >= 33 && charCode <= 40)
            }
         })
      });
   };

})(jQuery);
