
$('.openJS').on('click',  () =>{
    $('.menuJs').animate({'width': '25%'},500);
    $('.openJS').hide(100);
    $('.closeJS').show(100);
    
});

$('.closeJS').on('click',  ()=> {
    $('.menuJs').animate({'width': '0%'},500);
    $('.openJS').show(100);
    $('.closeJS').hide(100);
    
});

$('.col-7 h2').eq(0).click(() =>{
    $('.col-7 p').eq(0).slideToggle(500);
    $('.col-7 p').eq(1).hide(500);
    $('.col-7 p').eq(2).hide(500);
    $('.col-7 p').eq(3).hide(500);
});
$('.col-7 h2').eq(1).click(() =>{
    $('.col-7 p').eq(1).slideToggle(500);
    $('.col-7 p').eq(0).hide(500);
    $('.col-7 p').eq(2).hide(500);
    $('.col-7 p').eq(3).hide(500);
});

$('.col-7 h2').eq(2).click(  () =>{
    $('.col-7 p').eq(2).slideToggle(500);
    $('.col-7 p').eq(1).hide(500);
    $('.col-7 p').eq(0).hide(500);
    $('.col-7 p').eq(3).hide(500);
});

$('.col-7 h2').eq(3).click(  () =>{
    $('.col-7 p').eq(3).slideToggle(500);
    $('.col-7 p').eq(1).hide(500);
    $('.col-7 p').eq(2).hide(500);
    $('.col-7 p').eq(0).hide(500);
});

$(window).scroll( ()=> { 
    let Duration = $('#Duration').offset().top
    let scroll = $(window).scrollTop()
    if (scroll>Duration /2) {
        $('.menu-icon , .menu-icon i').css('color','#DF9F33');
    }
    else{
        $('.menu-icon ,.menu-icon i').css('color','white');
    }
    if (scroll > Duration ) {
        $('.btn-back-home').show(100)
    }
    else{
        $('.btn-back-home').hide(100)
    }
});




let countdownInterval = setInterval(()=> {
let targetDate = new Date("2023-08-31");
let currentDate = new Date();
let timeRemaining = targetDate - currentDate;

let days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
let hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
let seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

$('.days').html(days);
$('.hours').html(hours);
$('.minutes').html(minutes);
$('.seconds').html(seconds);
let countdownElement = " Time is Over!";
    if (timeRemaining <= 0) {
        clearInterval(countdownInterval);
        days = countdownElement;
        hours = countdownElement;
        minutes = countdownElement;
        seconds = countdownElement;
    }
}, 1000);

$(document).ready(()=> {
$('.loding').fadeOut(1000 ,  () =>{
    $('body').css('overflow-y','auto');
});

});
$('.off-dark').click( () =>{ 
    $('.on-dark').css({'background-color':'white'},1000);
    $('.on-dark i').css({'color':'black'},1000);
    $('.off-dark').css({'background-color':'#DF9F33'},1000);
    $('.off-dark i').css({'color':'white'},1000);
    $(':root').css({'--main-bg-layer':'rgba(0, 0, 0, 0.905)','--main-bg-body':'rgba(28, 28, 28, 0.905)'},1000);
    
});
$('.on-dark').click( () =>{ 
    $('.off-dark').css({'background-color':'white'},1000);
    $('.off-dark i').css({'color':'black'},1000);
    $('.on-dark').css({'background-color':'#DF9F33'},1000);
    $('.on-dark i').css({'color':'white'},1000);
    $(':root').css({'--main-bg-layer':'rgba(224, 20, 20, 0.584)','--main-bg-body':'white'});
});