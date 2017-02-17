/* global jQuery */

($ => {
  $.fn.displaySeconds = function displaySeconds() {
    this.each((i, dateElement) => {
      setInterval(() => {                  // <1>
        const now = new Date();            // <2>
        const seconds = now.getSeconds();

        $(dateElement)                     // <3>
          .removeClass(seconds % 2 ? 'pair': 'impair')
          .addClass(seconds % 2 ? 'impair': 'pair')
          .attr('datetime', now.toISOString())
          .text(now.toLocaleTimeString());
      }, $(dateElement).data('interval')); // <4>
    });

    return this;
  };

  $(document).ready(() => {      // <5>
    $('time').displaySeconds();  // <6>
  });
})(jQuery);
