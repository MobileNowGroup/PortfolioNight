'use strict';

(function () {
  var visibilityOffset = 25;
  var $window = $(window);
  var body = $('body');

  $(document)
    .on('shown.bs.collapse', onOpened);

  function onOpened(event) {
    var content = $(event.target);
    if (shouldScroll(content, visibilityOffset)) {
      makeVisible(content);
    }
  }

  function shouldScroll(element, offset) {
    var elementPosition = element.position().top;
    return (elementPosition + offset) >= getScrollBottom();
  }

  function makeVisible(element) {
    var scrollPosition = calculateNewScrollTop(element);
    body.animate({ scrollTop: scrollPosition });
  }

  function getScrollBottom() {
    return $window.scrollTop() + $window.outerHeight();
  }

  function calculateNewScrollTop(element) {
    var elementPosition = element.position().top;
    var elementHeight = element.outerHeight();
    var windowHeight = $window.outerHeight();
    return elementPosition - (windowHeight - elementHeight);
  }
})();
