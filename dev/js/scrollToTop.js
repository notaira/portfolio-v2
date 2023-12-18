window.onscroll = function() {
    scrollFunction();
  };
  
function scrollFunction() {
var scrollToTopBtn = document.getElementById("scrollToTopBtn");

if (document.body.scrollTop > 950 || document.documentElement.scrollTop > 950) {
    scrollToTopBtn.classList.add("show");
} else {
    scrollToTopBtn.classList.remove("show");
}
}

function scrollToTop() {
window.scrollTo({
    top: 0,
    behavior: 'smooth'
});
}
