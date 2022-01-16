$(document).ready(function() {
      var mobileButton = $('header .top-bar .icons')
      $(mobileButton).click(function() {
          $('nav ul').toggleClass('show-nav');
          $('.overlay').fadeToggle();
          $('.menu-icon').toggle();
          $('.close-icon').toggle();
      })
      $('.overlay').click(function() {
          $('nav ul').removeClass('show-nav');
          $('.overlay').fadeOut();
          $('.menu-icon').show();
          $('.close-icon').hide();
      })
      $('nav ul li').click(function() {
          if (window.innerWidth < 991) {
              $('nav ul').removeClass('show-nav');
              $('.overlay').fadeOut();
              $('.menu-icon').show();
              $('.close-icon').hide();
          }
      })
  
      // Finish Toggle Nav-bar, Overlay When The Icons is Clicked
  
      // Start Hide Nav-bar, Overlay and The Icons When The Website Width More Than 991
      $(window).resize(function() {
              if (window.innerWidth > 991) {
                  $('nav ul').removeClass('show-nav');
                  $(mobileButton).hide();
                  $('.overlay').hide();
              }
  
              if (window.innerWidth < 992) {
                  $('.menu-icon').show();
              }
          })
          // Finish Hide Nav-bar, Overlay and The Icons When The Website Width More Than 991
      $('.section').each(function() {
          if ($(window).scrollTop() > ($(this).offset().top) - 1) {
              var sectionId = $(this).attr('id');
              $('header .top-bar nav ul li a').removeClass('active');
              $('header .top-bar nav ul li a[class="' + sectionId + '"]').addClass('active')
          } else if ($(window).scrollTop() < 680) {
              $('header .top-bar nav ul li a[class="home"]').addClass('active')
          }
      })
      $(window).scroll(function() {
              $('.section').each(function() {
                  if ($(window).scrollTop() > ($(this).offset().top) - 1) {
                      var sectionId = $(this).attr('id');
                      $('header .top-bar nav ul li a').removeClass('active');
                      $('header .top-bar nav ul li a[class="' + sectionId + '"]').addClass('active')
                  } else if ($(window).scrollTop() < 680) {
                      $('header .top-bar nav ul li a[class="home"]').addClass('active')
                  }
              })
          })
          // Start Show Nav Bar and Go to Top Icon When Scrolling
      if ($(window).scrollTop() > 10) {
          $('header .top-bar-container').addClass('fixed');
          $('header .banner').css('paddingTop', $('header .top-bar').innerHeight());
          $('.go-to-top-icon').fadeIn();
  
      } else {
          $('header .banner').css('paddingTop', '0');
          $('header .top-bar-container').removeClass('fixed');
          $('.go-to-top-icon').fadeOut();
      }
  
      $(window).scroll(function() {
              if ($(window).scrollTop() > 10) {
                  $('header .top-bar-container').addClass('fixed');
                  $('header .banner').css('paddingTop', $('header .top-bar').innerHeight());
                  $('.go-to-top-icon').fadeIn();
              } else {
                  $('header .top-bar-container').removeClass('fixed');
                  $('header .banner').css('paddingTop', '0');
                  $('.go-to-top-icon').fadeOut();
              }
          })





// Start Frequently Section
var menuContext = $('.faq .faq-boxs .faq-left-box ul li');
var blockContext = $('.faq .faq-boxs .faq-right-box > div');
var Content = $('.faq .faq-boxs .faq-right-box');

$(menuContext).click(function() {
    $(menuContext).removeClass('active');
    $(this).addClass('active');
    $(blockContext).hide();
    $(titleContent).find(".body").hide();
    $(titleContent).find(".body.first").show();
    $(icon).find(".plus").show();
    $(icon).find(".minus").hide();
    $(icon).find(".minus.first").show();
    $(icon).find(".plus.first").hide();
    $(titleContent).removeClass('change-color');
    $(titleContent).has(".first").addClass('change-color');

    if ($(this).hasClass('spreads')) {
        $(Content).find(".spreads").show();

    } else if ($(this).hasClass('protects')) {
        $(Content).find(".protects").show();

    } else if ($(this).hasClass('symptom')) {
        $(Content).find(".symptom").show();

    } else if ($(this).hasClass('outbreak')) {
        $(Content).find(".outbreak").show();

    } else if ($(this).hasClass('busters')) {
        $(Content).find(".busters").show();

    } else {
        $(Content).find(".disease").show();
    }
})

var mainTitle = $('.faq .faq-boxs .faq-right-box div ul li.main-title');
var icon = $('.faq .faq-boxs .faq-right-box div ul li');
var titleContent = $('.faq .faq-boxs .faq-right-box div ul');
$(mainTitle).click(function() {
        if ($(this).hasClass('first')) {
            $(titleContent).find(".body.first").toggle();
            $(titleContent).has(".first").toggleClass('change-color');
            $(icon).find(".plus.first").toggle();
            $(icon).find(".minus.first").toggle();

        } else if ($(this).hasClass('second')) {
            $(titleContent).find(".body.second").toggle();
            $(titleContent).has(".second").toggleClass('change-color');
            $(icon).find(".plus.second").toggle();
            $(icon).find(".minus.second").toggle();

        } else if ($(this).hasClass('third')) {
            $(titleContent).find(".body.third").toggle();
            $(titleContent).has(".third").toggleClass('change-color');
            $(icon).find(".plus.third").toggle();
            $(icon).find(".minus.third").toggle();

        } else if ($(this).hasClass('fourth')) {
            $(titleContent).find(".body.fourth").toggle();
            $(titleContent).has(".fourth").toggleClass('change-color');
            $(icon).find(".plus.fourth").toggle();
            $(icon).find(".minus.fourth").toggle();

        } else if ($(this).hasClass('fifth')) {
            $(titleContent).find(".body.fifth").toggle();
            $(titleContent).has(".fifth").toggleClass('change-color');
            $(icon).find(".plus.fifth").toggle();
            $(icon).find(".minus.fifth").toggle();

        } else if ($(this).hasClass('sixth')) {
            $(titleContent).find(".body.sixth").toggle();
            $(titleContent).has(".sixth").toggleClass('change-color');
            $(icon).find(".plus.sixth").toggle();
            $(icon).find(".minus.sixth").toggle();

        } else if ($(this).hasClass('seventh')) {
            $(titleContent).find(".body.seventh").toggle();
            $(titleContent).has(".seventh").toggleClass('change-color');
            $(icon).find(".plus.seventh").toggle();
            $(icon).find(".minus.seventh").toggle();

        } else if ($(this).hasClass('eighth')) {
            $(titleContent).find(".body.eighth").toggle();
            $(titleContent).has(".eighth").toggleClass('change-color');
            $(icon).find(".plus.eighth").toggle();
            $(icon).find(".minus.eighth").toggle();

        }
    })
    // Finish Frequently Section
});