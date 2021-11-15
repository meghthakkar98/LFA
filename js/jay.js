
init();

function init() {
    $('body').css('overflow','hidden');
    $("#fullscreen").hide();
    $("#preloader").show();
    
}

document.getElementById("fullscreen").addEventListener("click", openFullscreen);
var elem = document.documentElement;

function openFullscreen() {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) {
        /* Firefox */
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
        /* Chrome, Safari and Opera */
        elem.webkitRequestFullscreen();
    } 
    $('body').css('overflow','auto');
}

window.addEventListener('DOMContentLoaded', (event) => {
    $("#fullscreen").delay("4000").fadeIn();
    $("#preloader").delay("4000").fadeOut();
});

$('.img-scroll-click').click(function () {
    $('body').css('overflow','hidden');
})
$('.img-full-click').click(function () {
    $('body').css('overflow','visible');
})