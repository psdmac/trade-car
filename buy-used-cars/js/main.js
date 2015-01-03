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

myApp.controller('BuyCtrl', ['$scope', function($scope) {
  $scope.cars = cars;
}]);

// var cars = 
// [
//   {
//     image : '2D00A2952D6521A2110118247678A63B_800x533.jpg@1e_240w_160h_1c_0i_1o_90Q_1x.jpg',
//     brand : 'BMW' 
//    },
//   {
//     image : '2F9F2378ECCAABCE79A5D09C2077B63E_690x460.JPG@1e_240w_160h_1c_0i_1o_90Q_1x.jpg',
//     brand : 'BMW' 
//    },
//   {
//     image : '3B3AFB8C1CD14E14F41DD4FEA185DC01_690x460.jpg@1e_240w_160h_1c_0i_1o_90Q_1x.jpg',
//     brand : 'BMW' 
//    },
//   {
//     image : '5D6E5A94BC9EBB94C8E049A4A6F3355B_690x460.jpg@1e_240w_160h_1c_0i_1o_90Q_1x.jpg',
//     brand : 'BMW' 
//    },
//   {
//     image : '5D9028F0682D3866CEBF4E8AE6FC3C3C_690x460.jpg@1e_240w_160h_1c_0i_1o_90Q_1x.jpg',
//     brand : 'BMW' 
//    },
//   {
//     image : '5E6316638F9702714A1E28BDD96D26AB_800x600.jpg@1e_240w_160h_1c_0i_1o_90Q_1x.jpg',
//     brand : 'BMW' 
//    },
//   {
//     image : '6C53487489FF8416465591211699F836_800x600.jpg@1e_240w_160h_1c_0i_1o_90Q_1x.jpg',
//     brand : 'BMW' 
//    },
//   {
//     image : '6F5FE386ED7DA998FF40CA7F092269F2_690x460.jpg@1e_240w_160h_1c_0i_1o_90Q_1x.jpg',
//     brand : 'BMW' 
//    },
//   {
//     image : '57CAEDA89E64188A18276AB00A4B35F2_5184x3456.JPG@1e_240w_160h_1c_0i_1o_90Q_1x.jpg',
//     brand : 'BMW' 
//    },
//   {
//     image : '61EF52FA7F0457CF1B9F1AAB5805771A_690x460.jpg@1e_240w_160h_1c_0i_1o_90Q_1x.jpg',
//     brand : 'BMW' 
//    },
//   {
//     image : '740DC9C4546E7BAD984DFF100E942258_690x460.jpg@1e_240w_160h_1c_0i_1o_90Q_1x.jpg',
//     brand : 'BMW' 
//    },
//   {
//     image : '767D9489748161689D4A40CE47D80CC6_690x460.jpg@1e_240w_160h_1c_0i_1o_90Q_1x.jpg',
//     brand : 'BMW' 
//    },
//   {
//     image : '00941221E6ACD55C1E04177600DC6FC1_694x460.JPG@1e_240w_160h_1c_0i_1o_90Q_1x.jpg',
//     brand : 'BMW' 
//    },
//   {
//     image : 'A56EFD1DDBDD0BF55983B88512D3ED23_690x460.jpg@1e_240w_160h_1c_0i_1o_90Q_1x.jpg',
//     brand : 'BMW' 
//    },
//   {
//     image : 'A134D68C38F5BD912313EFE1E2C1C7B9_613x460.jpg@1e_240w_160h_1c_0i_1o_90Q_1x.jpg',
//     brand : 'BMW' 
//    },
//   {
//     image : 'A3553F4C0C58F4D334A6D489AB388023_690x460.jpg@1e_240w_160h_1c_0i_1o_90Q_1x.jpg',
//     brand : 'BMW' 
//    },
//   {
//     image : 'B09CDE601441C5FA9B4795D3291FF25B_690x460.jpg@1e_240w_160h_1c_0i_1o_90Q_1x.jpg',
//     brand : 'BMW' 
//    },
//   {
//     image : 'B049C5A61202BA3712A38E1022B900FB_800x600.jpg@1e_240w_160h_1c_0i_1o_90Q_1x.jpg',
//     brand : 'BMW' 
//    },
//   {
//     image : 'CBDED2C4AB2B09F47287AE881054C9E8_5184x3456.JPG@1e_240w_160h_1c_0i_1o_90Q_1x.jpg',
//     brand : 'BMW' 
//    },
//   {
//     image : 'EB9D4A08165538CFED8D2D51692AB5F1_4352x3264.JPG@1e_240w_160h_1c_0i_1o_90Q_1x.jpg',
//     brand : 'BMW' 
//    },
//   {
//     image : 'F8CD869F6A16CBE05687DA257FD183D1_690x460.jpg@1e_240w_160h_1c_0i_1o_90Q_1x.jpg',
//     brand : 'BMW' 
//    },
//   {
//     image : 'FC3997614BE48BD51E6CA0CA2A630066_1024x682.jpg@1e_240w_160h_1c_0i_1o_90Q_1x.jpg',
//     brand : 'BMW' 
//    }
// ];


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