'use strict';

(function () {
  window.Gallery = Gallery;

  function Gallery(element, fullscreenElement) {
    this.element = element;
    this.fullscreenElement = fullscreenElement;
    this.getImages();
    this.bindOpenEvent();
  }

  Gallery.prototype = {
    constructor: Gallery,
    getImages: getImages,
    bindOpenEvent: bindOpenEvent,
    onTouchImage: onTouchImage,
    getSelectedImageIndex: getSelectedImageIndex
  };

  function getImages() {
    var images = [];
    this.element.find('.Gallery-img').each(function (index, element) {
      images.push({ src: $(element).attr('src'), w: 600, h: 500 });
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
    var gallery = new PhotoSwipe(this.fullscreenElement,
        PhotoSwipeUI_Default,
        this.images,
        { index: this.getSelectedImageIndex(element) });
    gallery.init();
  }

  function getSelectedImageIndex(selectedElement) {
    var selectedImage = _.findWhere(this.images, { src: selectedElement.attr('src') });
    return _.indexOf(this.images, selectedImage);
  }
})();
