$("#menu").on("click",".nav-link", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href');
    var top = $(id).offset().top + -40;
    $('body,html').animate({scrollTop: top}, 1500);
});
$(window).scroll(function() {
    if($(this).scrollTop() != 0) {
        $('#toTop').fadeIn();
    } else {
        $('#toTop').fadeOut();
    }
    });
    $('#toTop').click(function() {
    $('body,html').animate({scrollTop:0},800);
});