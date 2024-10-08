let baseScrollY = 0;
function checkScreenWidth() {
  if (window.innerWidth < 1000) {
    document.querySelector('.height-mobile--js').style.minHeight =
      document.querySelector('.secondTextColor').offsetHeight +
      document.querySelector('.cards--js').offsetHeight +
      300 +
      'px';
    if (document.querySelector('.cards--js').classList.contains('showFullItemsList')) {
      if (baseScrollY === 0) {
        baseScrollY = window.scrollY;
      }
      let currentScrollY = window.scrollY;
      let scrollDifference = currentScrollY - baseScrollY;

      console.log('scrollDifference', scrollDifference);
      console.log('currentScrollY', currentScrollY);
      console.log('baseScrollY', baseScrollY);

      let height = document.querySelector('.cards--js').offsetHeight;
      let windowHeight = window.innerHeight;
      if (height > windowHeight) {
      }
      // document.querySelector('.cards--js').style.transform = `translateY(-${scrollDifference}px)`;
      // document.querySelector(
      //   '.secondTextColor',
      // ).style.transform = `translateY(-${scrollDifference}px)`;

      document.querySelectorAll('.cards--js, .secondTextColor').forEach((element) => {
        // if (element.getBoundingClientRect().top < 0) {
        element.style.transform = `translateY(-${scrollDifference}px)`;
        // }
      });
      // console.log('document', document.querySelector('.cards--js').offsetTop);
      // console.log('scrollY', window.scrollY);
    }
  } else {
    // Code to execute if screen width is greater than or equal to 1000 pixels
    console.log('Screen width is 1000 pixels or greater');
  }
}

document.addEventListener('scroll', checkScreenWidth, false);
document.addEventListener('DOMContentLoaded', checkScreenWidth, false);

document.querySelectorAll('.scroll-link-js').forEach((element) => {
  element.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
});
