var navLinks = document.querySelectorAll("div.navbar ul.nav-list li.nav-item a.nav-link");
var currentLink = navLinks[0];

for (var i=0; i<navLinks.length; i++) {
    navLinks[i].addEventListener("click", function () {
        if (this !== currentLink) {
            currentLink.classList.remove("current");
            this.classList.add("current");
            currentLink = this;
        }
    });
}