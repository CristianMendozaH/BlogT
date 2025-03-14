function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

window.addEventListener("scroll", function() {
    let btnArriba = document.getElementById("btn-arriba");
    if (window.scrollY > 300) {
        btnArriba.style.display = "block";
    } else {
        btnArriba.style.display = "none";
    }
});