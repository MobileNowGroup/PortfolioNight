'use strict';

(function () {
  var photoSwipe = $('.pswp')[0];
  $('.Gallery').each(function (index, element) {
    var gallery = new Gallery($(element), photoSwipe);
  });
})();
