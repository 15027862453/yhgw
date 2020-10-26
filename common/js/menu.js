$(function () {
  var isShow = true;
  $('.menu').click(function () {
    if (isShow == true) {
       isShow = false;
      $('.nav_list').css('transform', 'translateX(0)');
      $('.s1').css('transform', 'translateY(0.35rem) rotateZ(45deg)');
      $('.s2').css('transform', 'rotateZ(-45deg) translateX(-0.02rem)');
      $('.s3').css('opacity', '0');
      $('.menu span').css('background', '#000');
    } else {
       isShow = true;
      $('.nav_list').css('transform', 'translateX(200vw)');
      $('.s1').css('transform', 'translateY(0) rotateZ(0)');
      $('.s2').css('transform', 'rotateZ(0) translateX(0)');
      $('.s3').css('opacity', '1');
      $('.menu span').css('background', '#FFF');
    }
  });
});