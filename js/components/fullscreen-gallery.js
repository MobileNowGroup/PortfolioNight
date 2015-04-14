'use strict';

(function () {
  var FullscreenGallery = (function () {
    function FullscreenGallery(gallery) {
      this.element = gallery;
      this.show = show;
      this.hide = hide;
      this.bindEvents = bindEvents;

      this.bindEvents();
    }

    function show(images, currentPositon) {
      this.element.addClass('e-show');
      this.element.removeClass('e-hide');
    }

    function hide() {
      this.element.removeClass('e-show');
      this.element.addClass('e-hide');
    }

    function bindEvents() {
      var self = this;
      this.element.on('click', function () {
        self.hide();
      });
    }

    return FullscreenGallery;
  })();

  (function (FullscreenGallery) {
    var gallery = $('.FullscreenGallery');
    if (!gallery || gallery.length <= 0) {
      throw 'FullscreenGallery not found!';
    }

    window.FullscreenGallery = new FullscreenGallery(gallery);
  })(FullscreenGallery);
})();
