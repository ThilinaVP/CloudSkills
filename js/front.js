$('.nav__toggle-btn').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu button");
    $("#mainListDiv").toggleClass("nav__wrapper--visible");
    $("#mainListDiv").fadeIn();

});

$(window).scroll(function() {
            if ($(document).scrollTop() > 50) {
                $('.nav').addClass('highlight');
                $('.navLink').addClass('highlightNavItems');
                $('.highlightNavItems').removeClass('navLink');
                console.log("OK");
            } else {
                $('.nav').removeClass('highlight');
                $('.highlightNavItems').addClass('navLink');
                $('.navLink').removeClass('highlightNavItems');
            }
});
