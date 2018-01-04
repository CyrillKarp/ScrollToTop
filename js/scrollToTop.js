window.onload = function() {
    var scrolled;
    var timer;

    window.onscroll = function() {
        var scrolled = window.pageYOffset || document.documentElement.scrollTop;

        if (scrolled == 0)
            document.getElementById("scroll-to-top").style.display = "none";
        else
            document.getElementById("scroll-to-top").style.display = "block";
    }

    document.getElementById("scroll-to-top").onclick = function() {
        scrolled = window.pageYOffset;
        scrollToTop();
    }

    function scrollToTop() {
        if (scrolled > 0) {
            window.scrollTo(0, scrolled);
            scrolled = scrolled - 50;
            timer = setTimeout(scrollToTop, 20);
        } else {
            clearTimeout(timer);
            window.scrollTo(0, 0);
        }
    }
}