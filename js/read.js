function myFunctions() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("readMore");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "See more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "See less";
        moreText.style.display = "inline";
    }
}
const nav = document.querySelector('#nav');
let navTop = nav.offsetTop;

function fixedNav() {
    if (window.scrollY >= navTop) {
        nav.classList.add('fixed');
    } else {
        nav.classList.remove('fixed');
    }
}

window.addEventListener('scroll', fixedNav);
//Get the button:
mybutton = document.getElementById("myBtn");
//when the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction(){
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else{
        mybutton.style.display = "none";
    }
}
//when the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; //for Safari
    document.documentElement.scrollTop = 0; //for chrome, firefox, IE and Opera
}

const $dropdown = $(".dropdown");
const $dropdownToggle = $(".dropdown-toggle");
const $dropdownMenu = $(".dropdown-menu");
const showClass = "show";

$(window).on("load resize", function() {
    if (this.matchMedia("(min-width: 768px)").matches) {
        $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
        );
    } else {
        $dropdown.off("mouseenter mouseleave");
    }
});

    jQuery(document).ready(function() {
    if (jQuery('body').hasClass('home')) {
    jQuery('#style-selector').animate({
    'right': '0px'
}, 'slow');
} else {
    jQuery('body').addClass('ss-open');
    jQuery('#style-selector').animate({
    'right': '-' + jQuery('#style-selector').width() + 'px'
}, 'slow');
}
});

    jQuery('#style-selector .style-toggle').click(function(e) {
    e.preventDefault();
    if (jQuery('body').hasClass('ss-close')) {
    jQuery('body').removeClass('ss-close');
    jQuery('body').addClass('ss-open');
    jQuery('#style-selector').animate({
    'right': '-' + jQuery('#style-selector').width() + 'px'
}, 'slow');
} else if (jQuery('body').hasClass('ss-open')) {
    jQuery('body').removeClass('ss-open');
    jQuery('body').addClass('ss-close');
    jQuery('#style-selector').animate({
    'right': '0px'
}, 'slow');
} else {
    jQuery('body').addClass('ss-open');
    jQuery('#style-selector').animate({
    'right': '-' + jQuery('#style-selector').width() + 'px'
}, 'slow');
}
});

    function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'en', includedLanguages: 'en,ja', layout: google.translate.TranslateElement.InlineLayout.SIMPLE, multilanguagePage: true}, 'google_translate_element');
}

