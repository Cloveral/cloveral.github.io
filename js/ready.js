$(document).ready(function(){var $window=$(window),$document=$(document),window_status=0;navPrimaryMobile();navSecondaryMobile();clickSecondaryActiveClass();$window.on('resize',function(){detectDevice()}).resize();$window.on('scroll',function(){fixedSecondaryNav()});function detectDevice(){if(Modernizr.mq('(max-width: 766px)')){if(window_status==1){window_status=0;slickMobile();menuPrimaryDisplayMobile();menuSecondaryDisplayMobile();$('.logo-prodotto').find('img').removeClass('down');$('.menu-secondary a').click(function(){$('.menu-secondary').hide()})}}else{if(window_status==0){window_status=1;slickDesktop();menuPrimaryDisplayDesktop();menuSecondaryDisplayDesktop();$('.menu-secondary a').click(function(){$('.menu-secondary').show()})}}}function slickDesktop(){var slickVar={fade:true,autoplay:true,autoplaySpeed:4500,pauseOnHover:true,speed:900,nextArrow:'<i class="fa fa-chevron-right next"></i>',prevArrow:'<i class="fa fa-chevron-left prev"></i>',dots:true,slidesToShow:1,adaptiveHeight:true};$('.slick').slick(slickVar)}function slickMobile(){var slickVar='unslick';$('.slick').slick(slickVar)}function navPrimaryMobile(){$('.nav-primary').append('<div class="menu-primary-mobile"><span><i class="fa fa-bars" aria-hidden="true"></i></span></div>');$('.menu-primary-mobile').insertBefore('.menu-primary').on('click',function(){$('.menu-primary').slideToggle(800);$(this).find('img').toggleClass('down')})}function menuPrimaryDisplayDesktop(){$('.menu-primary').css('display','block')}function menuPrimaryDisplayMobile(){$('.menu-primary').removeAttr('style')}function navSecondaryMobile(){$('.logo-prodotto').append('<div class="menu-secondary-mobile"><img id="theImg" src="/img/icone/secondary-mobile.svg" /></div>');$('.menu-secondary-mobile').on('click',function(){$('.menu-secondary').slideToggle(800);$('.logo-prodotto').find('img').toggleClass('down')})}function menuSecondaryDisplayDesktop(){$('.menu-secondary').css('display','block')}function menuSecondaryDisplayMobile(){$('.menu-secondary').removeAttr('style')}function fixedSecondaryNav(){var heightHeader=$('.site-header').outerHeight(),heightSlider=$('.slick').outerHeight(),distanceNavSecondary=heightHeader+heightSlider,scrollTop=$window.scrollTop();if(scrollTop>distanceNavSecondary){$('.nav-secondary').addClass('fixed')}else{$('.nav-secondary').removeClass('fixed')}}function clickSecondaryActiveClass(){$('.nav-secondary ul li a.menu-item-scroll').on('click',function(e){e.preventDefault();var heightNavSecondary=$('.nav-secondary').outerHeight(),target=this.hash,$target=$(target);$('html, body').stop().animate({'scrollTop':$target.offset().top-55},800,function(){window.location.hash=''});$('.menu-secondary').hide();$('.logo-prodotto').find('img').removeClass('down')})}});