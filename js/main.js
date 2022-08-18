const $w = $(window);

function funcOnScroll() {
    // btn to top
    if($w.scrollTop() <= 70) {
        $(".btn-to-top").removeClass("animated fadeInUpBig d-md-block").addClass("d-md-none");
    } else{
        $(".btn-to-top").removeClass("d-md-none").addClass("animated fadeInUpBig d-md-block");
    }
}
funcOnScroll();
$w.on("scroll", function(){
    funcOnScroll();
});

var url_atual = window.location.href.split('#');


$(document).ready( function () {
    /* função de animação ao chegar no scroll desejado */
    $.each($('[data-scrollanimateclass]'), function(index, e) {
        var el = $(this);
        e.style.visibility = "hidden";
        var animateClass = e.getAttribute('data-scrollanimateclass');
        var scrollLess = e.getAttribute('data-scrollnegative');
        var heightViewport = $(window).height()-100;
        scrollLess = scrollLess == null ? heightViewport : scrollLess;
        var scrollNum = el.offset().top - scrollLess;

        var startAnimation = () => {
            if ($w.scrollTop() > scrollNum){
                el.addClass(animateClass);
                e.style.visibility = "visible";
            }
        };

        startAnimation();

        $(window).on("scroll", function(){
            startAnimation();
        });
    });

    /* função de animação ao chegar no scroll desejado */
    $.each($('.content-gallery .item'), function(index, e) {
        var el = $(this);

        var startAnimation = () => {
            if($w.scrollTop() >= el.offset().top-150 && $w.scrollTop() < el.offset().top+el.height()-150) {
                el.addClass('active');
            } else{
                el.removeClass('active');
            }
        };

        startAnimation();

        $(window).on("scroll", function(){
            startAnimation();
        });
    });

    var hasLoadingPage = $(`#loading-page`).length;

    if (hasLoadingPage)
        $(`header`).css(`display`, `none`);
    else
        $(`body`).css(`overflow-y`, `auto`);

    setTimeout( function () {
        if (hasLoadingPage) {
            $(`#loading-page`).addClass(`animated fadeOut`);
            setTimeout(function () {
                $(`#loading-page`).css(`display`, `none`);
            }, 1000);
            $(`header`).css(`display`, `block`);

            if (url_atual[1] !== '' && url_atual[1] !== '' && url_atual[1] !== undefined && url_atual[1] !== null){
                history.pushState({}, null, `https://bgninfo.com/ghvg/landpage_for_photographer/`);
                $(`.navbar .navbar-collapse a[data-linkto="#${url_atual[1]}"]`)[0].click();
            }
        }
        $(`body`).css(`overflow-y`, `auto`);

    }, 2000);
});