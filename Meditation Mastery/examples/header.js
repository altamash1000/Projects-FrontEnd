var prevScrollPos = window.pageYOffset;
var shyHeader = document.getElementById('shy-header');

window.addEventListener('scroll', function() {
    var currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos) {
        shyHeader.style.top = '0';
    } else {
        shyHeader.style.top = '-100px';
    }

    prevScrollPos = currentScrollPos;
});

shyHeader.style.top = '0';
