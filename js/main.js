$(document).ready(function() {
  $('#sell-car').on('click', function() {
    $('#sell-modal').modal();
  });
  $('#buy-car').on('click', function() {
    $('#buy-modal').modal();
  });
  $('.sell-btn').on('click', function (e) {
    e.preventDefault();
    $('#sell-modal').modal('hide');
    $('#sell-form-modal').modal();
    $('#sell-ss-form').scope().detectUserInfo();
  });
  $('#play-intro').on('click', function(e) {
    // console.log('click');
    if ($('html').hasClass('no-touch')) {
      e.preventDefault();
      var youtube = $('#youtube-wrapper');
      youtube.html('<iframe src="//www.youtube.com/embed/JoS6FxByU8U" frameborder="0" allowfullscreen></iframe>');
      youtube.css('z-index','2');
    }
  });
  $('.owl-carousel').owlCarousel({
    loop:true,
    items: 1,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true
  })
});

var sellSubmitted = undefined;


var myApp = angular.module('myApp', []);

myApp.directive('bindSubmit', [
  function() {
    return { 
      link: function(scope, el, attrs) {
        scope.disableSubmit = false;
        scope.sellSubmitted = false;
        scope.detectUserInfo = function() {
          $('#entry_1039394647').val('我要賣車表單');
          $('#entry_872543244').valid8('此欄位不可空白');
          $('#entry_1582173260').valid8('此欄位不可空白');
          $('#entry_381774088').val(window.navigator.userAgent);
          $('#entry_358801077').valid8('此欄位不可空白');
          $('#entry_2115957444').valid8('此欄位不可空白');
          $('#entry_755544027').valid8('此欄位不可空白');
        }
        el.on('submit', function () {
          scope.disableSubmit = true;
          scope.sellSubmitted = true;
          $('#ss-submit').attr('disabled', true);
        });
        $('#hidden_iframe').on('load', function() {
          if(scope.sellSubmitted) {
            alert('我們會儘快聯繫您');
            $('#ss-submit').attr('disabled', false);
            $('#sell-form-modal').modal('hide');
          }
        });
      }
    };
  }
]);

