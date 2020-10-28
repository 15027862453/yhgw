window.onload = window.onresize = function () {
  var view_width = document.getElementsByTagName('html')[0].getBoundingClientRect().width;
  //找到标签名为html的第一个
  var _html = document.getElementsByTagName('html')[0];
  //如果屏幕宽度大于640 
  //就用 640/16=40
  //小于640的时候 不确定 也是尺寸/40
  view_width > 640 ? _html.style.fontSize = 640 / 16 + 'px' : _html.style.fontSize = view_width / 16 + 'px';
		//最大网页尺寸640
    //最大字体（根字体大小） 
}
