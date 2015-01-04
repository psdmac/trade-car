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

myApp.controller('BuyCtrl', ['$scope','$timeout', function($scope, $timeout) {
  $scope.cars = _.shuffle(cars);
  $timeout(function() {
    $("img.lazy").lazy();
  }, 100);

  $scope.getPhotoSwipe = function(link) {
    console.log(link);
    console.log(carImages[link]);
    if(!carImages[link]) {
      alert('這台車沒有預覽照片');
    }
    var items = [];
    angular.forEach(carImages[link], function(img) {
      if(img['註解'].length) {
        this.push({ 
          'src' : 'http://wowcar.tw/'+link+'/'+img.image,
          'w': 956,
          'h': 540,
          'title': img['名稱']+' - '+img['註解']
        });
      } else {
        this.push({ 
          'src' : 'http://wowcar.tw/'+link+'/'+img.image,
          'w': 956,
          'h': 540,
          'title': img['名稱']
        });
      }
    }, items);
    console.log(items);
    var pswpElement = document.querySelectorAll('.pswp')[0];
    var options = {
      shareEl: false,
      index: 0
    };
    var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
  }
}]);


var cars = [
  { 
    '里程': '11,246 mi.',
    '外觀': '銀白',
    '內裝': '黑',
    '年份': 2004,
    '價格': 248000,
    '車型': 'VIOS 1.5G 版',
    '廠牌': 'TOYOTA',
    '圖片': 'http://wowcar.tw/326-2004-TOYOTA-VIOS-1.5G/images/gallery/326-01.jpg',
    '連結': '326-2004-TOYOTA-VIOS-1.5G',
    '條件': '新上架',
    '上架': '2014-11-01',
    '特價': 15000,
    '特價期限': '2014-12-31'
  },
  { 
    '里程': '11,246 mi.',
    '外觀': '銀白',
    '內裝': '黑',
    '年份': 2013,
    '價格': 558000,
    '車型': 'ESCAPE 2.3 二驅XLS',
    '廠牌': 'FORD',
    '圖片': 'http://wowcar.tw/323-2013-FORD-ESCAPE-2.3/images/gallery/323-03.jpg',
    '連結': '323-2013-FORD-ESCAPE-2.3',
    '條件': '新上架',
    '上架': '2014-11-01',
    '特價': 15000,
    '特價期限': '2014-12-31'
  },
  { 
    '里程': '11,246 mi.',
    '外觀': '銀白',
    '內裝': '黑',
    '年份': 2004,
    '價格': 488000,
    '車型': 'E46-318',
    '廠牌': 'BMW',
    '圖片': 'http://wowcar.tw/332-2004-BMW-E46-318/images/gallery/332-04.jpg',
    '連結': '332-2004-BMW-E46-318',
    '條件': '新上架',
    '上架': '2014-11-01',
    '特價': 15000,
    '特價期限': '2014-12-31'
  },
  { 
    '里程': '11,246 mi.',
    '外觀': '銀白',
    '內裝': '黑',
    '年份': 2011,
    '價格': 598000,
    '車型': 'CIVIC-1.8VTI-S',
    '廠牌': 'HONDA',
    '圖片': 'http://wowcar.tw/352-2011-HONDA-CIVIC-1.8VTI-S/images/gallery/352-01.jpg',
    '連結': '352-2011-HONDA-CIVIC-1.8VTI-S',
    '條件': '新上架',
    '上架': '2014-11-01',
    '特價': 15000,
    '特價期限': '2014-12-31'
  },
  { 
    '里程': '11,246 mi.',
    '外觀': '銀白',
    '內裝': '黑',
    '年份': 2005,
    '價格': 278000,
    '車型': 'VIOS-1.5Z 版',
    '廠牌': 'TOYOTA',
    '圖片': 'http://wowcar.tw/334-2005-TOYOTA-VIOS-1.5Z/images/gallery/334-03.jpg',
    '連結': '334-2005-TOYOTA-VIOS-1.5Z',
    '條件': '新上架',
    '上架': '2014-11-01',
    '特價': 15000,
    '特價期限': '2014-12-31'
  },
  { 
    '里程': '11,246 mi.',
    '外觀': '銀白',
    '內裝': '黑',
    '年份': 2011,
    '價格': 588000,
    '車型': 'MAZDA-3-2.0頂級版',
    '廠牌': 'MAZDA',
    '圖片': 'http://wowcar.tw/129-2011-MAZDA-3-2.0/images/gallery/129-03.jpg',
    '連結': '129-2011-MAZDA-3-2.0',
    '條件': '新上架',
    '上架': '2014-11-01',
    '特價': 15000,
    '特價期限': '2014-12-31'
  },
  { 
    '里程': '11,246 mi.',
    '外觀': '銀白',
    '內裝': '黑',
    '年份': 2011,
    '價格': 468000,
    '車型': 'TUCSON-2.0 旗艦影音型',
    '廠牌': 'HYUNDAI',
    '圖片': 'http://wowcar.tw/551-2009-HYUNDAI-TUCSON-2.0/images/gallery/551-03.jpg',
    '連結': '551-2009-HYUNDAI-TUCSON-2.0',
    '條件': '新上架',
    '上架': '2014-11-01',
    '特價': 15000,
    '特價期限': '2014-12-31'
  },
  { 
    '里程': '11,246 mi.',
    '外觀': '銀白',
    '內裝': '黑',
    '年份': 2009,
    '價格': 398000,
    '車型': 'YARIS-1.5G',
    '廠牌': 'TOYOTA',
    '圖片': 'http://wowcar.tw/130-2009-TOYOTA-YARIS-1.5G/images/gallery/130-03.jpg',
    '連結': '130-2009-TOYOTA-YARIS-1.5G',
    '條件': '新上架',
    '上架': '2014-11-01',
    '特價': 15000,
    '特價期限': '2014-12-31'
  },
  { 
    '里程': '11,246 mi.',
    '外觀': '銀白',
    '內裝': '黑',
    '年份': 2011,
    '價格': 468000,
    '車型': 'FOCUS-2.0S',
    '廠牌': 'FORD',
    '圖片': 'http://wowcar.tw/552-2011-FORD-FOCUS-2.0S/images/gallery/552-03.jpg',
    '連結': '552-2011-FORD-FOCUS-2.0S',
    '條件': '新上架',
    '上架': '2014-11-01',
    '特價': 15000,
    '特價期限': '2014-12-31'
  },
  { 
    '里程': '11,246 mi.',
    '外觀': '銀白',
    '內裝': '黑',
    '年份': 2012,
    '價格': 468000,
    '車型': 'FIESTA-5D-1.6S',
    '廠牌': 'FORD',
    '圖片': 'http://wowcar.tw/547-2012-FORD-FIESTA-5D-1.6S/images/gallery/547-03.jpg',
    '連結': '547-2012-FORD-FIESTA-5D-1.6S',
    '條件': '新上架',
    '上架': '2014-11-01',
    '特價': 15000,
    '特價期限': '2014-12-31'
  },
  { 
    '里程': '11,246 mi.',
    '外觀': '銀白',
    '內裝': '黑',
    '年份': 2011,
    '價格': 558000,
    '車型': 'TEANA-2.5LD',
    '廠牌': 'NISSAN',
    '圖片': 'http://wowcar.tw/549-2011-NISSAN-TEANA-2.5LD/images/gallery/549-03.jpg',
    '連結': '549-2011-NISSAN-TEANA-2.5LD',
    '條件': '新上架',
    '上架': '2014-11-01',
    '特價': 15000,
    '特價期限': '2014-12-31'
  },
  { 
    '里程': '11,246 mi.',
    '外觀': '銀白',
    '內裝': '黑',
    '年份': 2009,
    '價格': 438000,
    '車型': 'FORTIS-1.8',
    '廠牌': 'MITSUBISHI',
    '圖片': 'http://wowcar.tw/A32-2009-MITSUBISHI-FORTIS-1.8/images/gallery/A32-01.jpg',
    '連結': 'A32-2009-MITSUBISHI-FORTIS-1.8',
    '條件': '新上架',
    '上架': '2014-11-01',
    '特價': 15000,
    '特價期限': '2014-12-31'
  },
  { 
    '里程': '11,246 mi.',
    '外觀': '銀白',
    '內裝': '黑',
    '年份': 2010,
    '價格': 418000,
    '車型': 'YARIS-1.5G',
    '廠牌': 'TOYOTA',
    '圖片': 'http://wowcar.tw/G52-2010-TOYOTA-YARIS-1.5G/images/gallery/G52-03.jpg',
    '連結': 'G52-2010-TOYOTA-YARIS-1.5G',
    '條件': '新上架',
    '上架': '2014-11-01',
    '特價': 15000,
    '特價期限': '2014-12-31'
  },
  { 
    '里程': '11,246 mi.',
    '外觀': '銀白',
    '內裝': '黑',
    '年份': 2010,
    '價格': 538000,
    '車型': 'CIVIC-1.8VTI',
    '廠牌': 'HONDA',
    '圖片': 'http://wowcar.tw/G51-2010-HONDA-CIVIC-1.8VTI/images/gallery/G51-03.jpg',
    '連結': 'G51-2010-HONDA-CIVIC-1.8VTI',
    '條件': '新上架',
    '上架': '2014-11-01',
    '特價': 15000,
    '特價期限': '2014-12-31'
  },
  { 
    '里程': '11,246 mi.',
    '外觀': '銀白',
    '內裝': '黑',
    '年份': 2010,
    '價格': 358000,
    '車型': 'VIOS-1.5E',
    '廠牌': 'TOYOTA',
    '圖片': 'http://wowcar.tw/A20-2010-TOYOTA-VIOS-1.5E/images/gallery/A20-02.jpg',
    '連結': 'A20-2010-TOYOTA-VIOS-1.5E',
    '條件': '新上架',
    '上架': '2014-11-01',
    '特價': 15000,
    '特價期限': '2014-12-31'
  },
  { 
    '里程': '11,246 mi.',
    '外觀': '銀白',
    '內裝': '黑',
    '年份': 2004,
    '價格': 418000,
    '車型': 'X-TYPE-2.1',
    '廠牌': 'JAGUAR',
    '圖片': 'http://wowcar.tw/A16-2004-JAGUAR-X-TYPE/images/gallery/A16-03.jpg',
    '連結': 'A16-2004-JAGUAR-X-TYPE',
    '條件': '新上架',
    '上架': '2014-11-01',
    '特價': 15000,
    '特價期限': '2014-12-31'
  },
  { 
    '里程': '11,246 mi.',
    '外觀': '銀白',
    '內裝': '黑',
    '年份': 2006,
    '價格': 358000,
    '車型': 'SWIFT-1.5GLX',
    '廠牌': 'SUZUKI',
    '圖片': 'http://wowcar.tw/126-2006-SUZUKI-SWIFT-1.5GLX/images/gallery/126-01.jpg',
    '連結': '126-2006-SUZUKI-SWIFT-1.5GLX',
    '條件': '新上架',
    '上架': '2014-11-01',
    '特價': 15000,
    '特價期限': '2014-12-31'
  },
  { 
    '里程': '11,246 mi.',
    '外觀': '銀白',
    '內裝': '黑',
    '年份': 2007,
    '價格': 348000,
    '車型': 'SWITF-1.5GLX',
    '廠牌': 'SUZUKI',
    '圖片': 'http://wowcar.tw/340-2007-SUZUKI-SWITF-1.5GLX/images/gallery/340-01.jpg',
    '連結': '340-2007-SUZUKI-SWITF-1.5GLX',
    '條件': '新上架',
    '上架': '2014-11-01',
    '特價': 15000,
    '特價期限': '2014-12-31'
  },
  { 
    '里程': '11,246 mi.',
    '外觀': '銀白',
    '內裝': '黑',
    '年份': 2006,
    '價格': 588000,
    '車型': 'FORESTER-2.5XT',
    '廠牌': 'SUBARU',
    '圖片': 'http://wowcar.tw/132-2006-SUBARU-FORESTER-2.5XT/images/gallery/132-01.jpg',
    '連結': '132-2006-SUBARU-FORESTER-2.5XT',
    '條件': '新上架',
    '上架': '2014-11-01',
    '特價': 15000,
    '特價期限': '2014-12-31'
  },
  { 
    '里程': '11,246 mi.',
    '外觀': '銀白',
    '內裝': '黑',
    '年份': 2007,
    '價格': 458000,
    '車型': 'MAZDA-5-2.0',
    '廠牌': 'MAZDA',
    '圖片': 'http://wowcar.tw/A33-2007-MAZDA-5-2.0/images/gallery/A33-01.jpg',
    '連結': 'A33-2007-MAZDA-5-2.0',
    '條件': '新上架',
    '上架': '2014-11-01',
    '特價': 15000,
    '特價期限': '2014-12-31'
  },
  { 
    '里程': '11,246 mi.',
    '外觀': '銀白',
    '內裝': '黑',
    '年份': 2005,
    '價格': 288000,
    '車型': 'Grunder-2.4旗艦型',
    '廠牌': '三菱',
    '圖片': 'http://wowcar.tw/333-2005-Grunder-2.4/images/gallery/333-03.jpg',
    '連結': '333-2005-Grunder-2.4',
    '條件': '新上架',
    '上架': '2014-11-01',
    '特價': 15000,
    '特價期限': '2014-12-31'
  },
  { 
    '里程': '11,246 mi.',
    '外觀': '銀白',
    '內裝': '黑',
    '年份': 2012,
    '價格': 598000,
    '車型': 'ELANTRA-1.8 旗艦型',
    '廠牌': 'HYUNDAI',
    '圖片': 'http://wowcar.tw/A40-2012-HYUNDAI-ELANTRA-1.8/images/gallery/A40-01.jpg',
    '連結': 'A40-2012-HYUNDAI-ELANTRA-1.8',
    '條件': '新上架',
    '上架': '2014-11-01',
    '特價': 15000,
    '特價期限': '2014-12-31'
  },
  { 
    '里程': '11,246 mi.',
    '外觀': '銀白',
    '內裝': '黑',
    '年份': 2009,
    '價格': 428000,
    '車型': 'MAZDA-3-2.0S-手自排',
    '廠牌': 'MAZDA',
    '圖片': 'http://wowcar.tw/A45-2009-MAZDA-3-2.0S/images/gallery/A45-01.jpg',
    '連結': 'A45-2009-MAZDA-3-2.0S',
    '條件': '新上架',
    '上架': '2014-11-01',
    '特價': 15000,
    '特價期限': '2014-12-31'
  },
  { 
    '里程': '11,246 mi.',
    '外觀': '銀白',
    '內裝': '黑',
    '年份': 2010,
    '價格': 1058000,
    '車型': 'IS250 尊榮版',
    '廠牌': 'LEXUS',
    '圖片': 'http://wowcar.tw/X23-2010-LEXUS-IS250/images/gallery/X23-01.jpg',
    '連結': 'X23-2010-LEXUS-IS250',
    '條件': '新上架',
    '上架': '2014-11-01',
    '特價': 15000,
    '特價期限': '2014-12-31'
  },
  { 
    '里程': '11,246 mi.',
    '外觀': '銀白',
    '內裝': '黑',
    '年份': 2005,
    '價格': 318000,
    '車型': 'MAZDA-3-2.0-手自排',
    '廠牌': 'MAZDA',
    '圖片': 'http://wowcar.tw/A37-2005-MAZDA-3-2.0/images/gallery/A37-01.jpg',
    '連結': 'A37-2005-MAZDA-3-2.0',
    '條件': '新上架',
    '上架': '2014-11-01',
    '特價': 15000,
    '特價期限': '2014-12-31'
  },
  { 
    '里程': '11,246 mi.',
    '外觀': '銀白',
    '內裝': '黑',
    '年份': 2008,
    '價格': 368000,
    '車型': 'FOCUS-1.8-5門',
    '廠牌': 'FORD',
    '圖片': 'http://wowcar.tw/339-2008-FOCUS-1.8-5D/images/gallery/339-01.jpg',
    '連結': '339-2008-FOCUS-1.8-5D',
    '條件': '新上架',
    '上架': '2014-11-13',
    '特價': 15000,
    '特價期限': '2014-12-31'
  },
  { 
    '里程': '11,246 mi.',
    '外觀': '銀白',
    '內裝': '黑',
    '年份': 2011,
    '價格': 638000,
    '車型': 'MPV-2.2 旗艦型',
    '廠牌': 'LUXGEN',
    '圖片': 'http://wowcar.tw/554-2011-LUXGEN-M7-2.2/images/gallery/554-01.jpg',
    '連結': '554-2011-LUXGEN-M7-2.2',
    '條件': '新上架',
    '上架': '2014-11-13',
    '特價': 15000,
    '特價期限': '2014-12-31'
  },
  { 
    '里程': '11,246 mi.',
    '外觀': '銀白',
    '內裝': '黑',
    '年份': 2012,
    '價格': 588000,
    '車型': 'ALTIS-1.8Z',
    '廠牌': 'TOYOTA',
    '圖片': 'http://wowcar.tw/X24-2012-TOYOTA-ALTIS-1.8Z/images/gallery/X24-01.jpg',
    '連結': 'X24-2012-TOYOTA-ALTIS-1.8Z',
    '條件': '新上架',
    '上架': '2014-11-13',
    '特價': 15000,
    '特價期限': '2014-12-31'
  },
  { 
    '里程': '11,246 mi.',
    '外觀': '銀白',
    '內裝': '黑',
    '年份': 2011,
    '價格': 398000,
    '車型': 'LIVINA-1.6H',
    '廠牌': 'NISSAN',
    '圖片': 'http://wowcar.tw/350-2011-NISSAN-LIVINA-1.6H/images/gallery/350-02.jpg',
    '連結': '350-2011-NISSAN-LIVINA-1.6H',
    '條件': '新上架',
    '上架': '2014-11-13',
    '特價': 15000,
    '特價期限': '2014-12-31'
  },
  { 
    '里程': '11,246 mi.',
    '外觀': '銀白',
    '內裝': '黑',
    '年份': 2006,
    '價格': 328000,
    '車型': 'MAZDA-3-2.0S-手自排',
    '廠牌': 'MAZDA',
    '圖片': 'http://wowcar.tw/349-2006-MAZDA-3-2.0S/images/gallery/349-01.jpg',
    '連結': '349-2006-MAZDA-3-2.0S',
    '條件': '新上架',
    '上架': '2014-11-13',
    '特價': 15000,
    '特價期限': '2014-12-31'
  },
  { 
    '里程': '11,246 mi.',
    '外觀': '銀白',
    '內裝': '黑',
    '年份': 2004,
    '價格': 208000,
    '車型': 'SAVRIN-2.0基本型-手自排',
    '廠牌': '三菱',
    '圖片': 'http://wowcar.tw/347-2004-MITSUBISHI-SAVRIN-2.0/images/gallery/347-01.jpg',
    '連結': '347-2004-MITSUBISHI-SAVRIN-2.0',
    '條件': '新上架',
    '上架': '2014-11-13',
    '特價': 15000,
    '特價期限': '2014-12-31'
  },
  { 
    '里程': '11,246 mi.',
    '外觀': '銀白',
    '內裝': '黑',
    '年份': 2005,
    '價格': 368000,
    '車型': 'CRV-2.0EX-自排',
    '廠牌': 'HONDA',
    '圖片': 'http://wowcar.tw/562-2005-HONDA-CRV-2.0EX/images/gallery/562-101.jpg',
    '連結': '562-2005-HONDA-CRV-2.0EX',
    '條件': '新上架',
    '上架': '2014-11-21',
    '特價': 15000,
    '特價期限': '2014-12-31'
  },
  { 
    '里程': '11,246 mi.',
    '外觀': '銀白',
    '內裝': '黑',
    '年份': 2009,
    '價格': 308000,
    '車型': 'COLT PLUS-1.5-自排',
    '廠牌': '三菱',
    '圖片': 'http://wowcar.tw/561-2009-MITSUBISHI-COLT-PLUS-1.5/images/gallery/561-101.jpg',
    '連結': '561-2009-MITSUBISHI-COLT-PLUS-1.5',
    '條件': '新上架',
    '上架': '2014-11-21',
    '特價': 15000,
    '特價期限': '2014-12-31'
  },
  { 
    '里程': '11,246 mi.',
    '外觀': '銀白',
    '內裝': '黑',
    '年份': 2012,
    '價格': 368000,
    '車型': 'VIOS-1.5J-自排',
    '廠牌': 'TOYOTA',
    '圖片': 'http://wowcar.tw/553-TOYOTA-VIOS-1.5J/images/gallery/553-101.jpg',
    '連結': '553-TOYOTA-VIOS-1.5J',
    '條件': '新上架',
    '上架': '2014-11-21',
    '特價': 15000,
    '特價期限': '2014-12-31'
  },
  { 
    '里程': '11,246 mi.',
    '外觀': '銀白',
    '內裝': '黑',
    '年份': 2007,
    '價格': 238000,
    '車型': 'TIERRA-1.6XT-自排',
    '廠牌': 'FORD',
    '圖片': 'http://wowcar.tw/560-2007-FORD-TIERRA-1.6XT/images/gallery/560-101.jpg',
    '連結': '560-2007-FORD-TIERRA-1.6XT',
    '條件': '新上架',
    '上架': '2014-11-21',
    '特價期限': '2014-12-31'
  }
];