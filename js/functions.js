$(function() {
    smoothScroll();
    $('#circuito').addClass('animated bounceOutLeft');
    fadedScroll();





});
$(window).scroll(function() {
    parallax()
});

function smoothScroll() {
    $(".scroll").click(function(a) {
        a.preventDefault();
        $("body,html").animate({
            scrollTop: $(this.hash).offset().top - $("#fixed-Nav").height()
        }, 1E3)
    })
}

function parallax() {
    var a = $(window).scrollTop();
    $(".parallax--bg").css("background-position", "center " + .5 * a + "px")
}

function fadedScroll() {
    window.sr = ScrollReveal({
        reset: !0
    });
    sr.reveal(".deck1", {
        duration: 1E3,
        rotate: { x: 5, y: 5, z: 5 },
    });
    sr.reveal(".deck2", {
        duration: 1E3,
        rotate: { x: 5, y: 50, z: 0 },
    });
    sr.reveal(".deck3", {
        duration: 1E3,
        rotate: { x: 45, y: 0, z: 5 },
    });
}
