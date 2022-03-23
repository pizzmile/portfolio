// Update nav links upon scroll
function updateCurrent(currentSectionId) {
    $(".nav-link.current").removeClass("current");
    $(".nav-link").each((index, element)=> {
        if (element.getAttribute("href") === currentSectionId) {
            element.classList.add("current");
        } else {
            element.classList.remove("current");
        }
    });
}

// Nav links click event
$(".nav-link").click(function () {
    if (!this.classList.contains("current")) {
        $([document.documentElement, document.body]).animate({
            scrollTop: $(this.getAttribute("href")).offset().top
        }, 500);
    }
});

// Scroll event
$(window).scroll(function (event) {
    if ($(window).scrollTop() < $("#about").position()["top"]) {
        updateCurrent("#home");
    } else if ($(window).scrollTop() < $("#projects").position()["top"]) {
        updateCurrent("#about");
    } else if ($(window).scrollTop() < $("#contact").position()["top"]) {
        updateCurrent("#projects");
    } else {
        updateCurrent("#contact");
    }
});