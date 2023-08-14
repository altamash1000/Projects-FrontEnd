let lastScrollPosition = 0;
const shyHeader = document.querySelector('.shy-header');

function checkScrollDirection() {
  const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScrollPosition > lastScrollPosition) {
    // Scrolling down, hide the header
    shyHeader.classList.add('hidden');
  } else {
    // Scrolling up, show the header
    shyHeader.classList.remove('hidden');
  }

  lastScrollPosition = currentScrollPosition;
}

// Add scroll event listener to the window
window.addEventListener('scroll', checkScrollDirection);
