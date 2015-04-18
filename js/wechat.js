(function (wx) {

  // call APIs in wx.ready after a successful authentication
  wx.ready(function () {

    var title = '“这一夜，晒作品”中国 2015';
    var description = '“这一夜，晒作品” 将数以千计的年轻创意人和数百位创意总监汇聚在全球各个主要城市，只为这一夜。';
    var link = window.location.href;
    var imgUrl = window.location.href + 'images/PortfolioNight.png';

    // Send to Chat
    wx.onMenuShareAppMessage({
      title: title,
      desc: description,
      link: link,
      imgUrl: imgUrl,
      trigger: function (res) {
        // Can add some analytics here
      },
      success: function (res) {
        // Can add some analytics here
      },
      cancel: function (res) {
        // Can add some analytics here
      },
      fail: function (res) {
        // Can add some analytics here
      }
    });

    // Share on Moments
    wx.onMenuShareTimeline({
      title: title,
      link: link,
      imgUrl: imgUrl,
      trigger: function (res) {
        // Can add some analytics here
      },
      success: function (res) {
        // Can add some analytics here
      },
      cancel: function (res) {
        // Can add some analytics here
      },
      fail: function (res) {
        // Can add some analytics here
      }
    });
  });

}(wx));
