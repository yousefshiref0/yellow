(function ($) {
    "use strict";

    var agione = {
        
        /* ============================================================ */
        /* PRELOADER
        /* ============================================================ */
        preloader: function(){
            $(window).on('load', function() {
                $(".preloader").fadeOut();     
            });
        },

        /* ============================================================ */
        /* Random
        /* ============================================================ */
        commonActivation: function(){

        },

        /* ============================================================ */
        /* Mobile Menu Intigration
        /* ============================================================ */
        mobile_menu: function() {
            function mobile_menu(selector, actionSelector) {
                var mobile_menu = $(selector);
                mobile_menu.on("click", function() {
                    $(selector).toggleClass('menu-active');
                });
                
                var hamburgerbtn = $(selector);
                hamburgerbtn.on("click", function() {
                    $(actionSelector).toggleClass('menu-active');
                });
        
                $(document).on('click', function(e) {
                    var selectorType = $(actionSelector).add(mobile_menu);
                    if (selectorType.is(e.target) !== true && selectorType.has(e.target).length === 0) {
                        $(actionSelector).removeClass("menu-active");
                        $(selector).removeClass("menu-active");
                    }          
                });
        
            };
            mobile_menu('.navbar-toggle', '.mobile-menu');
        },

        /* ============================================================ */
        /* Sticky Menu
        /* ============================================================ */
        sticky_menu: function() {
            var WinD = $(window);
            WinD.on('scroll',function() {  
                var AcSticky = $('.site-navigation, header');
                var scroll = $(window).scrollTop();
                var AESticky = AcSticky;
                if (scroll < 330) {
                    AESticky.removeClass("is-sticky");
                    // AESticky.removeAttribute("data-bg-color", "#fff");
                }
                // }
                else{
                    // AESticky.setAttribute("data-bg-color", "#fff");
                    AESticky.addClass("is-sticky");
                }
                return false;
            });
        },
        
        /* ============================================================ */
        /* Music Slider
        /* ============================================================ */
        musicSlider: function() {
            $('.music-slider').slick({
                autoplay: false,                
                dots: false,
                centerMode: true,
                focusOnSelect: true,
                arrows: false,
                centerPadding: '0',
                slidesToShow: 5,
                slidesToScroll: 1,
                responsive: [   
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1,
                        }
                    },                 
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 576,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            centerMode: true,
                        }
                    }
                ]
            });

            $(".modal-trigger").on("click",function(e){
                e.preventDefault();
                if($(this).attr("data-iframe") !== undefined) {
                    $("#modalframe").attr("src", $(this).attr("data-iframe"));
                }
                return true;
            });
            function triggerModal(selector, actionSelector) {
                var triggerModal = $(selector);
                triggerModal.on("click", function() {
                    $(actionSelector).addClass('open');
                });
                
        
                $(document).on('click', function(e) {
                    var selectorType = $(actionSelector).add(triggerModal);
                    if (selectorType.is(e.target) !== true && selectorType.has(e.target).length === 0) {
                        $(actionSelector).removeClass("open");
                    }          
                });
        
            };
            triggerModal('.modal-trigger', '.modal-track');

        },

        /* ============================================================ */
        /* Background Image
        /* ============================================================ */
        background_image: function() {
            $("[data-bg-color], [data-bg-image], [data-bg-particles]").each(function() {
                var $this = $(this);
    
                if( $this.hasClass("pt-separate-bg-element") ){
                    $this.append('<div class="pt-background">');
    
                    // Background Color    
                    if( $("[data-bg-color]") ){
                        $this.find(".pt-background").css("background-color", $this.attr("data-bg-color") );
                    }
    
                    // Background Image
                    if( $this.attr("data-bg-image") !== undefined ){
                        $this.find(".pt-background").append('<div class="pt-background-image">');
                        $this.find(".pt-background-image").css("background-image", "url("+ $this.attr("data-bg-image") +")" );
                        $this.find(".pt-background-image").css("background-size", $this.attr("data-bg-size") );
                        $this.find(".pt-background-image").css("background-position", $this.attr("data-bg-position") );
                        $this.find(".pt-background-image").css("opacity", $this.attr("data-bg-image-opacity") );
    
                        $this.find(".pt-background-image").css("background-size", $this.attr("data-bg-size") );
                        $this.find(".pt-background-image").css("background-repeat", $this.attr("data-bg-repeat") );
                        $this.find(".pt-background-image").css("background-position", $this.attr("data-bg-position") );
                        $this.find(".pt-background-image").css("background-blend-mode", $this.attr("data-bg-blend-mode") );
                    }
    
                    // Parallax effect    
                    if( $this.attr("data-bg-parallax") !== undefined ){
                        $this.find(".pt-background-image").addClass("pt-parallax-element");
                    }
                }
                else {
    
                    if(  $this.attr("data-bg-color") !== undefined ){                        
                        $this.css("background-color", $this.attr("data-bg-color") );
                        if( $this.hasClass("btn") ) {
                            $this.css("border-color", $this.attr("data-bg-color"));
                        }
                    }
    
                    if( $this.attr("data-bg-image") !== undefined ){
                        $this.css("background-image", "url("+ $this.attr("data-bg-image") +")" );    
                        $this.css("background-size", $this.attr("data-bg-size") );
                        $this.css("background-repeat", $this.attr("data-bg-repeat") );
                        $this.css("background-position", $this.attr("data-bg-position") );
                        $this.css("background-blend-mode", $this.attr("data-bg-blend-mode") );
                    }
                }
            });
        },

        initializ: function() {
			agione.preloader();
			agione.mobile_menu();
			agione.sticky_menu();
			agione.musicSlider();
			agione.background_image();
		}

    };
    $(function() {
		agione.initializ();
	});


})(jQuery);