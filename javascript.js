$('.carousel.carousel-slider').carousel({full_width: true});
$('.carousel.carousel-slider').carousel('next');
$('.carousel.carousel-slider').carousel('next', 3); // Move next n times.
// Previous slide
$('.carousel.carousel-slider').carousel('prev');
$('.carousel.carousel-slider').carousel('prev', 4); // Move prev n times.


$(function() {

    $.getJSON('data.json', function(data) {
        var template = $('#aboutus').html();
        var html = Mustache.to_html(template, data);
        $('#aboutcarousel').html(html);

        $('#aboutcarousel').cycle({
            fx: 'fade',
            pause: 1,
            next: '#next_btn',
            prev: '#prev_btn',
            speed: 500,
            timeout: 10000
        });
    }); //getJSON

}); //function