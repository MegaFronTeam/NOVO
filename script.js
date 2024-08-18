function checkScreenWidth() {
  if (window.innerWidth < 1000) {
    // Code to execute if screen width is less than 1000 pixels
    console.log('Screen width is less than 1000 pixels');
  } else {
    // Code to execute if screen width is greater than or equal to 1000 pixels
    console.log('Screen width is 1000 pixels or greater');
  }
}

checkScreenWidth();
document.addEventListener('scroll', checkScreenWidth, false);
