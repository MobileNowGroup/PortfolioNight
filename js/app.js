$(function () {

  // Carousel Setup
  (function () {
    $('.carousel').hammer().on('panleft', function (e) {
      $(this).carousel('next');
    });

    $('.carousel').hammer().on('panright', function (e) {
      $(this).carousel('prev');
    });

    // Play the sound effect
    var onOpenSound = document.getElementById('open-sound');
    $('.collapse').on('show.bs.collapse', function () {
      onOpenSound.play();
    });
  }());

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
      body.animate({scrollTop: scrollPosition});
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
        var image = {src: $(element).attr('src')};
        images.push(image);
        getImageSize(image);
      });

      this.images = images;
    }

    function bindOpenEvent() {
      var self = this;
      this.element.on('click', '.Gallery-img', function (event) {
        self.onTouchImage($(event.target));
      });
    }

    function getImageSize(imageObject) {
      var img = new Image();
      img.onload = function () {
        imageObject['w'] = this.width;
        imageObject['h'] = this.height;
      }

      img.src = imageObject.src;
    }

    function onTouchImage(element) {
      var gallery = new PhotoSwipe(this.fullscreenElement,
        PhotoSwipeUI_Default,
        this.images,
        {index: this.getSelectedImageIndex(element)});
      gallery.init();
    }

    function getSelectedImageIndex(selectedElement) {
      var selectedImage = _.findWhere(this.images, {src: selectedElement.attr('src')});
      return _.indexOf(this.images, selectedImage);
    }

    var photoSwipe = $('.pswp')[0];
    $('.Gallery').each(function (index, element) {
      var gallery = new Gallery($(element), photoSwipe);
    });
  })();

});
