function showOnScroll($id) {
    let el = document.getElementById($id);
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            el.style.opacity = 1;
        } else {
            el.style.opacity = 0;
        }
    });
}