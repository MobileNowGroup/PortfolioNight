<?php
error_reporting(0);

require_once 'jssdk.php';

$config = require_once 'config.php';

$jssdk = new JSSDK($config['appId'], $config['appSecret']);

$signPackage = $jssdk->GetSignPackage();

header('Content-Type: text/javascript; charset=UTF-8');
?>
wx.config({
  debug: false,
  appId: '<?php echo $signPackage["appId"];?>',
  timestamp: <?php echo $signPackage["timestamp"];?>,
  nonceStr: '<?php echo $signPackage["nonceStr"];?>',
  signature: '<?php echo $signPackage["signature"];?>',
  jsApiList: [
      'onMenuShareTimeline',
      'onMenuShareAppMessage'
  ]
});
