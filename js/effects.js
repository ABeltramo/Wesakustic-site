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

/* ANDROID HACK 
 * see: http://stackoverflow.com/questions/24944925/background-image-jumps-when-address-bar-hides-ios-android-mobile-chrome
 */
$(function(){
  if ((/Android|iPhone|iPad|iPod|BlackBerry/i).test(navigator.userAgent || navigator.vendor || window.opera)) {
    jQuery(window).resize("resizeBackground");
    resizeBackground();
  }
  
  function resizeBackground(){
    console.log("Android device");
    var height = jQuery(window).height();
    $(".bigContainer").css("minHeight",height-70+"px");
  }
});
/* //ANDROID HACK */