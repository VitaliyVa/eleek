import './index.scss';

$('#menu-toggle').click(function(){
    $(this).toggleClass('open');
    $('.scroll_menu').toggleClass('scroll_menu_active');
    $('body').toggleClass('body_active');
    $('.nav_menu__block').toggleClass('nav_menu__block_active');

    if ($('.logo__wrap').hasClass('logo_wrap_active')) {
        $('.logo__wrap').removeClass('logo_wrap_active');
        $('.logo__wrap').addClass('logo_wrap_native');
    } else {
        $('.logo__wrap').addClass('logo_wrap_active');
        $('.logo__wrap').removeClass('logo_wrap_native');
    }
    
        
  })
// $(".hamburger").on('click', function(e) {
 
//     if($('.hamburger').hasClass('is-active')){    
//         $('.hamburger').removeClass('is-active');
//         $('.header__menu').removeClass('header__menu-active');
//         // $('.header__menu').removeClass('responsive__box-active');
//         $('body').removeClass('body-active');
//     }else{
//         $('.hamburger').addClass('is-active');
//         $('.header__menu').addClass('header__menu-active');
//         // $('.bg-page').addClass(' bg-page-active');
//         $('body').addClass(' body-active');

//     }
// });

    
  

