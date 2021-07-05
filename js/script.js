$('.owl-carousel').owlCarousel({
    loop:true,
    center:false,
    dots: false,
    items:3,
    merge:true,
    lazyload:false,
    margin: 10,
    nav:true,
    navText: [
        '<svg class="first" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"  width="100%" height="68%" viewBox="0 0 62 62"><defs><style>.a1{fill:#fff;stroke:white;stroke-width:4px;}.b1{stroke:#000;}.c1{stroke:none;}.d1{fill:none;}.e1{filter:url(#a1);}</style><filter id="a1" x="0" y="0" width="62" height="62" filterUnits="userSpaceOnUse"><feOffset dy="3" input="SourceAlpha"/><feGaussianBlur stdDeviation="3" result="b"/><feFlood flood-opacity="0.161"/><feComposite operator="in" in2="b"/><feComposite in="SourceGraphic"/></filter></defs><g transform="translate(-1527 -173)"><g class="e1" transform="matrix(1, 0, 0, 1, 1527, 173)"><g class="a1" transform="translate(9 6)"><circle class="c1" cx="22" cy="22" r="22"/><circle class="d1" cx="22" cy="22" r="20"/></g></g><path class="b1" d="M4,11H16.17L10.58,5.41,12,4l8,8-8,8-1.41-1.41L16.17,13H4Z" transform="translate(1570 213) rotate(180)"/></g></svg>',
        '<svg class="hide-show animate" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100%" height="68%" viewBox="0 0 62 62 "><defs><style>.a{fill:#fff;stroke:white;stroke-width:4px;}.b{stroke:#000;}.c{stroke:none;}.d{fill:none;}.e{filter:url(#a);}.animate .d,.a{animation: load-icon 1.5s linear .4s ;stroke-dasharray: 200;animation-direction: alternate-reverse;}@keyframes load-icon {to {stroke-dashoffset:200;stroke:white;}}</style><filter id="a" x="0" y="0" width="62" height="62" filterUnits="userSpaceOnUse"><feOffset dy="3" input="SourceAlpha"/><feGaussianBlur stdDeviation="3" result="b"/><feFlood flood-opacity="0.161"/><feComposite operator="in" in2="b"/><feComposite in="SourceGraphic"/></filter></defs><g transform="translate(-11 -173)"><g class="e" transform="matrix(1, 0, 0, 1, 11, 173)"><g class="a" transform="translate(9 6)"><circle class="c" cx="22" cy="22" r="22"/><circle class="d" cx="22" cy="22" r="20"/></g></g><path class="b" d="M20,11H7.83l5.59-5.59L12,4,4,12l8,8,1.41-1.41L7.83,13H20Z" transform="translate(54 213) rotate(-180)"/></g></svg>            '
    ],
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 1
        },
        1024: {
            items: 1
        }
    }
});

