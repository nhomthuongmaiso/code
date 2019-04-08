$(window).scroll(function () {
    if ($(window).scrollTop() >= 99) {
        $('.main').addClass('navbar-fixed-top');
    }
    if ($(window).scrollTop() >= 100) {
        $('.main').addClass('show');
    } else {
        $('.main').removeClass('show navbar-fixed-top');
    }
});