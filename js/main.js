$(document).ready(function() {
// Smooth Scroll on clicking nav items
$('nav a').click(function () {
  var $href = $(this).attr('href');
  $('body').stop().animate({
    scrollTop: $($href).offset().top
  }, 500);
  return false;
});

// Parallaxing + add class active on scroll
$(document).scroll(function () {


  // add class active to nav a on scroll
  var scrollPos = $(document).scrollTop() + 100;
  $('nav a').each(function () {
    var currLink = $(this);
    var refElement = $(currLink.attr("href"));
    if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
      $('nav a').removeClass("active");
      currLink.addClass("active");
    }
  });

  // change navbar colour
  var a = $(".container-fluid").offset();

    $(document).scroll(function(){
      if($(this).scrollTop() > 970)
      {
        $('.navbar-default').addClass('after-scroll-nav-border');
      }
      else
      {
        $('.navbar-default').removeClass('after-scroll-nav-border');
      }
    });


    // affect the navbar when scrolling between slides
    $(document).ready(function() {
    $(document).onscroll = navbarScroll;
    function navbarScroll () {
      if ($(this).scrollTop() > 1005) {
          $('.navbar-default').fadeIn();
      }
      else {
          $('.navbar-default').fadeOut();
      }
    }; 
  
});

});
});

































// jQuery for sliding nav
//  $(document).ready(function() {

//       $('a[href*=#]').each(function() {
//         if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
//         && location.hostname == this.hostname
//         && this.hash.replace(/#/,'') ) {
//           var $targetId = $(this.hash), $targetAnchor = $('[name=' + this.hash.slice(1) +']');
//           var $target = $targetId.length ? $targetId : $targetAnchor.length ? $targetAnchor : false;
//            if ($target) {
//              var targetOffset = $target.offset().top;

// jQuery click function remove and add class "active" + scroll to the #div
//     $(this).click(function() {
//                 $("#nav li a").removeClass("active");
//                 $(this).addClass('active');
//                $('html, body').animate({scrollTop: targetOffset}, 500);
//                return false;
//              });
//           }
//         }
//   });

//   change navbar colour
//   var a = $(".container-fluid").offset();

//     $(document).scroll(function(){
//       if($(this).scrollTop() > 970)
//       {
//         $('.navbar-default').addClass('after-scroll-nav-border');
//       }
//       else
//       {
//         $('.navbar-default').removeClass('after-scroll-nav-border');
//       }
//     });

//     affectthe navbar when scrolling between slides
//     $(document).onscroll = navbarScroll;
//     function navbarScroll () {
//       if ($(this).scrollTop() > 1005) {
//           $('.navbar-default').fadeIn();
//       }
//       else {
//           $('.navbar-default').fadeOut();
//       }
//     }; 


// });