document.addEventListener("DOMContentLoaded", function() {
    let links = document.querySelectorAll("nav ul li a");
    links.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            let targetId = this.getAttribute("href").substring(1);
            let targetSection = document.getElementById(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });
});
