function about() {
    var offset = $("p").offset();
    $("html,body").animate({
        scrollTop: 250,
        scrollLeft: offset.left
    });
}