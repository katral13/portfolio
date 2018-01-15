require('../styles/main.scss')


jQuery(document).ready(function(){
jQuery('.skillbar').each(function(){
  jQuery(this).find('.skillbar-bar').animate({
    width:jQuery(this).attr('data-percent')
  },3000);
});

$('.skill-bar-percent').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 3000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});
});
