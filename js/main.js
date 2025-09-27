document.cookie = "userConsent=accepted; path=/; Secure; SameSite=Lax";

$(window).on("load", function () {
    $("#preloader").fadeOut("slow");
});

$(document).ready(function(){

    let path = window.location.pathname.substring(1); 
    if (path) {
        let $targetElement = $("#" + path);
        if ($targetElement.length) {
            history.replaceState(null, null, "#" + path); 
            $("html, body").animate({ scrollTop: $targetElement.offset().top }, 500); 
        }
    }

    $("a[href^='#']").on("click", function (event) {
        event.preventDefault();
    
        var targetId = $(this).attr("href").substring(1); // Get the ID name without #
        var targetElement = $("#" + targetId);
    
        if (targetElement.length) {
            $("html, body").animate({ scrollTop: targetElement.offset().top }, 500);
    
            // Remove # from the URL without refreshing the page
            history.replaceState(null, null, targetId);
        }
    }); 

    if (window.location.hash) {
        let cleanPath = window.location.pathname;
        history.replaceState(null, null, cleanPath);
    }

    $('.fa-bars').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('load scroll',function(){
        $('.fa-bars').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if($(window).scrollTop()>35)
        {
            $('.header').css({'background':'white','box-shadow':'0 .2rem .5rem rgba(0,0,0,.4)'});
            $('.header .navbar ul li a').css({'color': '#000000'})
            $('.header .fa-bars').css({'color': 'black'});
            $('.logo img').attr('src', './images/purtanindo-colored.webp');
        }
        else
        {
            $('.header').css({'background':'none','box-shadow':'none'});
            $('.header .navbar ul li a').css({'color': '#fff'})
            $('.header .fa-bars').css({'color': 'white'});
            $('.logo img').attr('src', './images/purtanindo-white.webp');
        }
    });   

    const counters = document.querySelectorAll('.counter');
    const speed = 120;
    counters.forEach(counter => {
	const updateCount = () => {
		const target = +counter.getAttribute('data-target');
		const count = +counter.innerText;
		const inc = target / speed;
		if (count < target) {
			counter.innerText = count + inc;
			setTimeout(updateCount, 1);
		} else {
			counter.innerText = target;
		}
	};
	updateCount();
    });

   (function ($) {
    "use strict";
    
    $(".clients-carousel").owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        responsive: { 0: {items: 2}, 768: {items: 4}, 900: {items: 6} }
    });

    $(".gallery-carousel").owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        margin: 20, // Adds space between images
        stagePadding: 10, // Ensures spacing at edges
        responsive: {
            0: { items: 1 },
            576: { items: 2 },
            768: { items: 3 },
            992: { items: 4 }
        }
    });
    
    $(".gallery-carousel").magnificPopup({
        delegate: "a", // Select anchor elements
        type: "image",
        gallery: { enabled: true }, // Enable gallery mode
        mainClass: "mfp-fade", // Fade effect
        removalDelay: 300 // Delay before closing
    });

    $(".testimonials-carousel").owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        responsive: { 0: {items: 1}, 576: {items: 2}, 768: {items: 3}, 992: {items: 4} }
    });

    $(".management-carousel").owlCarousel({
        autoplay: true,
        dots: true,
        loop: false,
        responsive: { 0: {items: 1}, 576: {items: 2}, 768: {items: 3}}
    });    
})(jQuery);

$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
});
$('.back-to-top').click(function () {
    $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
    return false;
});

$('.accordion-header').click(function(){
    $('.accordion .accordion-body').slideUp(500);
    $(this).next('.accordion-body').slideDown(500);
    $('.accordion .accordion-header span').text('+');
    $(this).children('span').text('-');
});

});

document.addEventListener("contextmenu", (e) => e.preventDefault());
document.addEventListener("keydown", (e) => {
  if (e.ctrlKey && (e.key === "u" || e.key === "s" || e.key === "i")) {
    e.preventDefault();
  }
});



function enableThirdPartyCookies() {
    console.log("Cookies Accepted! Enable third-party scripts here.");
    if (document.querySelector('script[src*="www.googletagmanager.com/gtag/js"]')) {
        return; // Stop execution if script is found
    }
    // Load Google Analytics
    let gtagScript = document.createElement("script");
    gtagScript.src = "https://www.googletagmanager.com/gtag/js?id=G-S7D2G751RH";
    gtagScript.async = true;
    document.head.appendChild(gtagScript);

    gtagScript.onload = function () {
        window.dataLayer = window.dataLayer || [];
        function gtag(){ dataLayer.push(arguments); }
        gtag('js', new Date());
        gtag('config', 'G-S7D2G751RH');
    };
}

function disableThirdPartyCookies() {
    console.log("Cookies Declined! Block third-party scripts.");
    // Example: Modify or remove third-party scripts.
}

function clearCookies() {
    document.cookie.split(";").forEach(function (cookie) {
        document.cookie = cookie.replace(/^ +/, "")
            .replace(/=.*/, "=;expires=" + new Date(0).toUTCString() + ";path=/");
    });
    console.log("Cookies cleared!");
}

$(document).ready(function () {
    const $cookieBanner = $("#cookieConsent");
    const $acceptButton = $("#acceptCookies");
    const $declineButton = $("#declineCookies");

    // Check if user already made a choice
    if (localStorage.getItem("cookieConsent") !== null) {
        $cookieBanner.hide(); // Hide banner if choice is stored
    }

    // Accept Cookies
    $acceptButton.click(function () {
        localStorage.setItem("cookieConsent", "accepted");
        $cookieBanner.fadeOut();
        enableThirdPartyCookies();
    });

    // Decline Cookies
    $declineButton.click(function () {
        localStorage.setItem("cookieConsent", "declined");
        $cookieBanner.fadeOut();
        disableThirdPartyCookies();
        clearCookies(); // Optional: Remove cookies if declined
    });
});
