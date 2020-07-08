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

$('.mobileProduktyInner').slick({
  infinite: false,
  variableWidth: true,
  dots: false,
  autoplay: false,
  autoplaySpeed: 3000,
  centerMode: true,
  arrows: false,
  initialSlide: 0,
  centerPadding: '70px',
});


// faqs

$(".otazka h2").click(function() {
  if ($(this).parent().hasClass("zavreno")) {


    $(this).parent().removeClass("zavreno");
  }

  else {

    $(this).parent().addClass("zavreno");
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



$('iframe').load( function() {
    $('iframe').contents().find("head")
      .append($("<style type='text/css'>  .i4ewOd-pzNkMb-haAclf {display: none;}  </style>"));
});

$('a[href="#"]').click(function(){
  $(".eshopBanner").addClass("eshopBannerOtevrit");
});

$(".eshopBanner span").click(function(){
  $(".eshopBanner").removeClass("eshopBannerOtevrit");
});




/*


$('<li class="homepageOrigo"><a class="menu-item" href="https://jztferments.cz/"><span class="menu-item-text">Domů</span></a></li>').insertAfter('.level-1 li');
$('<li class="onasOrigo"><a class="menu-item" href="https://jztferments.cz/o-nas"><span class="menu-item-text">O nás</span></a></li>').insertAfter('.homepageOrigo');
$('<li class="kontaktOrigo"><a class="menu-item" href="https://jztferments.cz/kontakt"><span class="menu-item-text">Kontakt</span></a></li>').insertAfter('.onasOrigo');
$('<li class="kdeNasNajdeteOrigo"><a class="menu-item" href="https://jztferments.cz/kde-nas-najdete"><span class="menu-item-text">Kde nás najdete?</span></a></li>').insertAfter('.kontaktOrigo');
$('<li class="faqsOrigo"><a class="menu-item" href="https://jztferments.cz/faqs"><span class="menu-item-text">FAQs</span></a></li>').insertAfter('.kdeNasNajdeteOrigo');
*/
