'use strict';

(function () {
  $('.Gallery').each(function (index, element) {
    var gallery = new Gallery($(element));
  });
})();
