$('.carouselSlider').slick({
  infinite: true,
  variableWidth: true,
  centerPadding: '70px',
  dots: true,
  autoplay: false,
  autoplaySpeed: 3000,
  centerMode: true,
  arrows: false,
});

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });


// slick

$('.produktyInner').slick({
  infinite: false,
  variableWidth: true,
  dots: false,
  autoplay: false,
  autoplaySpeed: 3000,
  centerMode: true,
  arrows: false,
  initialSlide: 2,
  centerPadding: '70px',
});

// faqs

$(".otazka").click(function() {
  if ($(this).hasClass("zavreno")) {
    $(this).removeClass("zavreno");
  }

  else {
    $(this).addClass("zavreno");
  }
});

// menu

$(".menuButton").click(function() {
  if ($(".mobilniMenu").hasClass("mobilniMenuZavrit")) {
    $(".mobilniMenu").removeClass("mobilniMenuZavrit");
    $(".mobilniMenu").addClass("animated");
    $(".mobilniMenu").addClass("fadeInDown");
  }

  else {
    $(".mobilniMenu").removeClass("animated");
    $(".mobilniMenu").removeClass("fadeInDown");

    $(".mobilniMenu").addClass("animated");
    $(".mobilniMenu").addClass("fadeOutUp");

    setTimeout(function(){
      $(".mobilniMenu").addClass("mobilniMenuZavrit");
      $(".mobilniMenu").removeClass("animated");
      $(".mobilniMenu").removeClass("fadeOutUp");
    }, 1000);
  }
});

$(".zavrit").click(function() {
  if ($(".mobilniMenu").hasClass("mobilniMenuZavrit")) {
    $(".mobilniMenu").removeClass("mobilniMenuZavrit");
    $(".mobilniMenu").addClass("animated");
    $(".mobilniMenu").addClass("fadeInDown");
  }

  else {
    $(".mobilniMenu").removeClass("animated");
    $(".mobilniMenu").removeClass("fadeInDown");

    $(".mobilniMenu").addClass("animated");
    $(".mobilniMenu").addClass("fadeOutUp");

    setTimeout(function(){
      $(".mobilniMenu").addClass("mobilniMenuZavrit");
      $(".mobilniMenu").removeClass("animated");
      $(".mobilniMenu").removeClass("fadeOutUp");
    }, 1000);
  }
});
