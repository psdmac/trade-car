$(document).ready(function() {
  $('.owl-carousel').owlCarousel({
    loop:true,
    items: 1,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true
  });
  $('a[target="_self"]').on('click', function() {
    NProgress.start();
    setTimeout(function() {
      NProgress.set(0.4);
    }, 1000);
    setTimeout(function() {
      NProgress.done();
    }, 3000);
  });
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

