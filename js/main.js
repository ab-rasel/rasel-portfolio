$(document).ready(function() {
    var skl = true;
    $('.FunfactSec').appear();

    $('.FunfactSec').on('appear', function() {
        if (skl)
        {
            $('.funfacts').each(function() {
                var $this = $(this);
                jQuery({Counter: 0}).animate({Counter: $this.attr('data-counter')},
                {
                    duration: 6000,
                    easing: 'swing',
                    step: function() {
                        var num = Math.ceil(this.Counter).toString();
                        if (Number(num) > 9999) {
                            while (/(\d+)(\d{3})/.test(num)) {
                                num = num.replace(/(\d+)(\d{3})/, '');
                            }
                        }
                        $this.html(num);
                    }
                });
            });
            skl = false;
        }
    });

    /*
     * wow start
     */
    new WOW().init();

    /*
     * skill start
     */

    $('.singleSkill').appear();

    $('.singleSkill').on('appear', function() {
        $(".skill").each(function() {
            $(this).easyPieChart({
                barColor: '#fff',
                trackColor: '',
                scaleColor: '',
                lineWidth: 10,
                lineCap: 'square',
                size: 150,
                onStep: function(from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent) + '%');
                }
            });
        });
    });
    $(function() {
        $('[data-toggle="tooltip"]').tooltip({
        });
    });

    /*Typed Carosul start*/

    $(function() {
        $(".Typeing").typed({
            strings: ["Rasel...", "Designer...", "Developer..."],
            typeSpeed: 80,
            loop: true,
            stringsElement: null,
            cursorChar: "|",
            backDelay: 1000
        });

    });

    /*Typed Carosul end*/

    /*MobileMenu Start Here*/

    $('.scrolls a').on('click', function() {
        $('html, body').animate({scrollTop: $(this.hash).offset().top - 70}, 1000);
        return false;
    });

    function Scroll() {

        var contentTop = [];
        var contentBottom = [];
        var winTop = $(window).scrollTop();
        var rangeTop = 200;
        var rangeBottom = 500;

        $('.main-menu').find('.scrolls > a').each(function() {
            var atr = $(this).attr('href');
            if ($(atr).length > 0)
            {
                contentTop.push($($(this).attr('href')).offset().top);
                contentBottom.push($($(this).attr('href')).offset().top + $($(this).attr('href')).height());
            }

        });

        $.each(contentTop, function(i) {

            if (winTop > contentTop[i] - rangeTop) {

                $('.main-menu li.scrolls')
                        .removeClass('active')
                        .eq(i).addClass('active');
            }
        });

    }

    /***********************************
     //     * Main Menu
     //     ***********************************/
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 90)
        {
            $(".Hmenu").addClass('fixedHeader');
        }
        else
        {
            $(".Hmenu").removeClass('fixedHeader');
        }

        /************ Menu Active on Scroll **********************/
        Scroll();

    });

    /* Main Menu Fixed on Top End*/

    /*Back To Top Start*/
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > $(window).height())
        {
            $(".BackTo").fadeIn('slow');
        }
        else
        {
            $(".BackTo").fadeOut('slow');
        }

    });
    $("body, html").on("click", ".BackTo", function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: 0}, 800);
    });

    /*Back To Top End*/

    /*magnificPopup Section Start*/
    $('.lense').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });
    /*magnificPopup Section End*/

    //=======================================================
    // Google map
    //=======================================================
    if ($('#map').length > 0) {
        var map;
        map = new GMaps({
            el: '#map',
            lat: 53.967015,
            lng: -1.079608,
            scrollwheel: false,
            zoom: 10,
            zoomControl: true,
            panControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            overviewMapControl: false,
            clickable: false
        });


        var image = '';
        map.addMarker({
            lat: 53.967015,
            lng: -1.079608,
            icon: 'images/MapIcon.png',
            animation: google.maps.Animation.DROP,
            verticalAlign: 'bottom',
            horizontalAlign: 'center',
            backgroundColor: '#d3cfcf'
        });
    }
    $('#Grid').themeWar();

    /*SKILLs Section START*/
    /*
     * 
     */
    // Our Skills
    //========================
    if ($(".skillItem").length > 0)
    {
        $('.skillItem').appear();
        $('.skillItem').on('appear', loadSkills);
    }
    var coun = true;
    function loadSkills()
    {
        $(".skillItem").each(function() {
            var datacount = $(this).attr("data-limit");
            $(".SkillsBar", this).animate({'width': datacount + '%'}, 2000);
            if (coun)
            {
                $(this).find('.ppp').each(function() {
                    var $this = $(this);
                    $({Counter: 0}).animate({Counter: datacount}, {
                        duration: 2000,
                        easing: 'swing',
                        step: function() {
                            $this.text(Math.ceil(this.Counter) + '%');
                        }
                    });
                });

            }
        });
        coun = false;
    }

    /*SKILLS Section End*/
    $(".mobileMenu").on('click', function() {
        $(".main-menu").slideToggle('slow');
        $(this).toggleClass('active');
    });
});

