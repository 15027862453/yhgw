window.onLoad = function () {
  var lnglat = new AMap.LngLat(115.540874, 38.889697);

  var map = new AMap.Map("container", {
    resizeEnable: true,
    center: lnglat,
    zoom: 17
  });
  addMarker();
  //添加marker标记
  function addMarker() {
    map.clearMap();
    var marker = new AMap.Marker({
      map: map,
      position: lnglat
    });
  }

  var infoWindowContent =
    '<p class="position">河北宇昊律师事务所</p>';
  // 创建一个自定义内容的 infowindow 实例
  var infoWindow = new AMap.InfoWindow({
    position: lnglat,
    offset: new AMap.Pixel(0, -35),
    content: infoWindowContent
  });

  infoWindow.open(map);
}
var url = 'https://webapi.amap.com/maps?v=1.4.15&key=04d9b957d257498d504ee326407500f5&callback=onLoad';
var jsapi = document.createElement('script');
jsapi.charset = 'utf-8';
jsapi.src = url;
document.head.appendChild(jsapi);