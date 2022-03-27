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
$(window).on("load scroll", function (event) {
    // Give/remove navbar glass class
    if ($(window).scrollTop() > 0) {
        if (!$(".navbar").hasClass("glass")) {
            $(".navbar").addClass("glass");
        }
    } else {
        if ($(".navbar").hasClass("glass")) {
            $(".navbar").removeClass("glass");
        }
    }

    // Update current link in navbar
    if ($(window).scrollTop() < $("#about").position()["top"] * (1/2)) {
        updateCurrent("#home");
    } else if ($(window).scrollTop() < $("#projects").position()["top"] * (3/4)) {
        updateCurrent("#about");
    } else if ($(window).scrollTop() < $("#contact").position()["top"]* (5/6)) {
        updateCurrent("#projects");
    } else {
        updateCurrent("#contact");
    }
});

// Slideshow
