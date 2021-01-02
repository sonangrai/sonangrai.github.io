
$(document).ready(function(){
    AOS.init();

    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
      if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        document.getElementById("myBtn").style.display = "block";
      } else {
        document.getElementById("myBtn").style.display = "none";
      }
    }

    $(window).scroll(function(){
      var scroll = $(window).scrollTop();
        if (scroll > 100) {
          $(".menus").addClass("sticked");
        }
        else{
            $(".menus").removeClass("sticked");   
        }
    });
    
    $(".topslider").owlCarousel({
        items:1,
        nav:true,
        dots:false,
        loop:true,
        autoplay:true,
        animateOut: 'fadeOut'
    });

    
    $("#lightgallery").lightGallery({
      selector: '.item'
    }); 

    $('#aniimated-thumbnials').lightGallery(); 

    $('#video-gallery').lightGallery({
      loadYoutubeThumbnail: true,
      youtubeThumbSize: 'default',
      loadVimeoThumbnail: true,
      vimeoThumbSize: 'thumbnail_medium',
  }); 

  $('[data-toggle="tooltip"]').tooltip();   
});