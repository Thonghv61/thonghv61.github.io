/////////////////////////////////////////////////
//フォント
function fontSizeUnity() { 
	if($.os.name == 'win')  {
		if($.browser.name == 'msie') {
			$('body').css('font-size','100%');
		} else{
			$('body').css('font-size','16px');
		}
	}
	else {
		$('body').css('font-size','16px');
		$('body').css('letter-spacing','-0.01em');
	}
};
$(document).ready(fontSizeUnity);

//////////////////////////////////////////////////
//ポップアップ
function popupWin(){
	var winname = "PopupWin";// ウィンドウネーム
	var winWidth = 700;// 横幅
	var winHeight = 800;// 縦幅
	$("a.TargetPopup").click(function() {
			win = window.open(this.href,winname,'toolbar=0,location=0,status=0,menubar=0,scrollbars=yes,resizable=1,width='+winWidth+',height='+winHeight);
			win.focus();
			return false;
		}
	);
};
$(document).ready(popupWin);

//////////////////////////////////////////////////
//スムーススクロール設定　
$(function() {  
	$('a[href*=#],area[href*=#]').click(function() {  
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')  
		&& location.hostname == this.hostname) {  
			var $target = $(this.hash);  
			$target = $target.length && $target  
			|| $('[name=' + this.hash.slice(1) +']');  
				if ($target.length) {  
				var targetOffset = $target.offset().top - 0;
				var scrollSpeed = 320;//スクロール速度
				$('html,body').animate({scrollTop: targetOffset}, scrollSpeed);  
				return false;  
			}  
		}  
	});
});

//////////////////////////////////////////////////
//ロールオーバー
function initRollOverImages() { 
	var image_cache = new Object();
	$("img.Hover,input.Hover").not("[src*='_on.']").each(function(i) {
		var imgsrc = this.src;
		var imgsrc_on = imgsrc.replace("_off", "_on");
		image_cache[this.src] = new Image();  
		image_cache[this.src].src = imgsrc_on;  
		$(this).hover(  
			function() { this.src = imgsrc_on; },  
			function() { this.src = imgsrc; }  
		);  
	});  
}  
$(document).ready(initRollOverImages);


//////////////////////////////////////////////////
//INDEXバナー
function indexSlideBanner() {
  $(window).load(function() {
    $('#slider').nivoSlider({
      effect:'fold',
      slices:7,
      animSpeed:1000,//画像が切り替わるスピード
      pauseTime:7000,//画像が切り替わるまでの時間
      startSlide:0,//最初に表示する画像
      manualAdvance:false,//Force manual transitions
      captionOpacity:0//Universal caption opacity
    });
  });
}
$(document).ready(indexSlideBanner);



//////////////////////////////////////////////////
//カテゴリートップアイコン
function categoryTopIcon() {
$(".CategoryList ul.CategoryListIcon li:nth-child(6)").css("padding-right","0");
}
$(document).ready(categoryTopIcon);



//////////////////////////////////////////////////
//詳細ページLightbox
$(document).ready(function() {
$('a.expansion').facebox({
loadingImage : '/js/jquery.facebox/loading.gif',
closeImage   : '/js/jquery.facebox/closelabel.png'
});
});