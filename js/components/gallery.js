'use strict';

(function () {
  window.Gallery = Gallery;

  function Gallery(element) {
    this.element = element;
    this.getImages();
    this.bindOpenEvent();
  }

  Gallery.prototype = {
    constructor: Gallery,
    getImages: getImages,
    bindOpenEvent: bindOpenEvent,
    onTouchImage: onTouchImage
  }

  function getImages() {
    var images = [];
    this.element.find('.Gallery-img').each(function (index, element) {
      images.push($(element).attr('src'));
    });

    this.images = images;
  }

  function bindOpenEvent() {
    var self = this;
    this.element.on('click', '.Gallery-img', function (event) {
      self.onTouchImage($(event.target));
    });
  }

  function onTouchImage(element) {
    var selectedImage = this.images.indexOf(element.attr('src'));
    FullscreenGallery.show(this.images, selectedImage);
  }
})();
