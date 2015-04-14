'use strict';

(function () {
  var FullscreenGallery = (function () {
    function FullscreenGallery(gallery) {
      this.element = gallery;
      this.show = show;
      this.hide = hide;
      this.bindEvents = bindEvents;
      this.buildHtml = buildHtml;

      this.bindEvents();
    }

    function show(images, currentPositon) {
      this.element.addClass('e-show');
      this.element.removeClass('e-hide');
      this.buildHtml(images);
    }

    function hide() {
      this.element.removeClass('e-show');
      this.element.addClass('e-hide');
      this.element.html('');
    }

    function bindEvents() {
      var self = this;
      this.element.on('click', function () {
        self.hide();
      });
    }

    function buildHtml(images) {
      for (var index in images) {
        var src = images[index];
        this.element.append($('<img/>').attr('src', src));
      }
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
