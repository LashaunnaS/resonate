$(document).ready(function () { 
  $('a[href*=#]').each(function () {  
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')   && location.hostname == this.hostname   && this.hash.replace(/#/, '')) {   
      var $targetId = $(this.hash),
        $targetAnchor = $('[name=' + this.hash.slice(1) + ']');   
      var $target = $targetId.length ? $targetId : $targetAnchor.length ? $targetAnchor : !1;    
      if ($target) {     
        var targetOffset = $target.offset().top - 1;
        $(this).click(function () {
          $("#nav li a").removeClass("active");
          $(this).addClass('active');      
          $('html, body').animate({
            scrollTop: targetOffset
          }, 500);      
          return !1;     
        });   
      }  
    } 
  });
  var a = $(".container-fluid").offset();
  $(document).scroll(function () {
    if ($(this).scrollTop() > 780) {
      $('.navbar-default').addClass('after-scroll-nav-border')
    } else {
      $('.navbar-default').removeClass('after-scroll-nav-border')
    }
  });
  $(document).onscroll = navbarScroll;

  function navbarScroll() {
    if ($(this).scrollTop() > 1005) {
      $('.navbar-default').fadeIn()
    } else {
      $('.navbar-default').fadeOut()
    }
  }
})