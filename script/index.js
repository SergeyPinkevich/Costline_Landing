const splide = new Splide( '#screenshot-carousel', {
  type: 'loop',
  perPage: 3,
  focus: 'center',
  speed: 800,
  classes: {
    page  : 'splide__pagination__page screenshot-bullet-progress',
  }
});

splide.mount()

window.addEventListener('resize', function(event) {
  // TODO implement slider per page 1
});

function openMenu() {
  var hamburgerMenu = document.getElementById("mobile-menu-block");
  hamburgerMenu.style.display = "flex";

  var closeMenuLink = document.getElementById("close-menu");
  closeMenuLink.style.display = "block";

  animateOpening();
}

function closeMenu() {
  animateClosing();
}

var openInterval = null;
function animateOpening() {
  var hamburgerMenu = document.getElementById("mobile-menu-block"); 
  var offsetRight = -50;
  clearInterval(openInterval);

  openInterval = setInterval(frame, 1);
  function frame() {
    if (offsetRight == 0) {
      clearInterval(openInterval);
    } else {
      offsetRight++;
      hamburgerMenu.style.right = offsetRight + "%"; 
    }
  }
}

var closeInterval = null;
function animateClosing() {
  var hamburgerMenu = document.getElementById("mobile-menu-block"); 
  var offsetRight = 0;
  clearInterval(closeInterval);

  closeInterval = setInterval(frame, 1);
  function frame() {
    if (offsetRight == -50) {
      clearInterval(closeInterval);
      hamburgerMenu.style.display = "none";
    } else {
      offsetRight--;
      hamburgerMenu.style.right = offsetRight + "%"; 
    }
  }
}