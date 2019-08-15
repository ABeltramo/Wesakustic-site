function scrollTo(element){
  $('html, body').animate({
       scrollTop: $(element).offset().top
     }, 500, function(){

       // when done, add hash to url
       // (default click behaviour)
       window.location.hash = element;
     });
}

$(".scrollto").on('click', function(e) {
    target = $(this).attr("href");
   // prevent default anchor click behavior
   e.preventDefault();

   // animate
   scrollTo(target);

});

var DoScroll = true; // Se la setto a false non fa l'animazione (pagina contatti)
$(document).scroll(function(){
		if(DoScroll){
			var $this = $(this);
			if ($this.scrollTop() > 120) {
        $(".header").addClass("headerVisible");
        $(".logo img").attr("src","img/OnlyLogo.png");
			}
			else{
        $(".header").removeClass("headerVisible");
        $(".logo img").attr("src","img/OnlyLogoWhite.png");
			}
		}
});

/* ANDROID HACK 
 * see: http://stackoverflow.com/questions/24944925/background-image-jumps-when-address-bar-hides-ios-android-mobile-chrome
 */
$(function(){
  function resizeBackground(){
    console.log("Android device");
    var height = jQuery(window).height();
    $(".bigContainer").css("minHeight",height-70+"px");
  }

  if ((/Android|iPhone|iPad|iPod|BlackBerry/i).test(navigator.userAgent || navigator.vendor || window.opera)) {
    jQuery(window).resize(resizeBackground);
    resizeBackground();
  }
});
/* //ANDROID HACK */

/*
 * LANGUAGE UTILS
 */
$("#changeLanguage li").click(function(e){
  e.preventDefault();
  var lang = $(e.target).parents("li").attr("lang");
  i18next.changeLanguage(lang, (err, t) => {
      console.log(t);
      if (err) return console.log('something went wrong loading', err);
      changeFlag(lang);
      $('body').localize();
  });
})

function changeFlag(locale){
  var selected = $("#changeLanguage li[lang='" + locale + "']");
  // console.log(selected.find("img").attr("src"));
  // console.log($("#langFlag img").attr("src"));
  $("#langFlag img").attr("src",selected.find("img").attr("src"));
  $("#langFlag span").text(selected.text());
}