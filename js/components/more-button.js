'use strict';

(function () {
  $(document)
    .on('show.bs.collapse', onOpened)
    .on('hide.bs.collapse', onClosed);

  function onOpened(event) {
    var moreButton = getButton(event);
    moreButton.addClass('e-less');
    moreButton.removeClass('e-more');
  }

  function onClosed(event) {
    var moreButton = getButton(event);
    moreButton.addClass('e-more');
    moreButton.removeClass('e-less');
  }

  function getButton(event) {
    return $(event.target).parent().find('.MoreButton');
  }
})();
