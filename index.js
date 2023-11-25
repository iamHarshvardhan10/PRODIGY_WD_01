
const menu = document.querySelector('#menubars')
const navbar = document.querySelector('.navbar')
const header = document.querySelector('header')

const searchIcon = document.querySelector('#search-icon');
const searchForm = document.querySelector('#search-form');
const closeForm = document.querySelector('#close');





menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle('active')
}


const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header .navbar a');

window.onscroll = () => {
  const menu = document.getElementById('menu');
  const navbar = document.querySelector('.navbar');

  menu.classList.remove("fa-times");
  navbar.classList.remove('active');

  sections.forEach(sec => {
    const top = window.scrollY;
    const height = sec.offsetHeight;
    const offset = sec.offsetTop - 150;
    const id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {

      navLinks.forEach(link => {
        link.classList.remove('active');
      });

      document.querySelectorAll(`header .navbar a[href*="${id}"]`).forEach(link => {
        link.classList.add('active');
      });
    }
  });
};


searchIcon.onclick = () => {
  searchForm.classList.toggle('active')
}
closeForm.onclick = () => {
  searchForm.classList.remove('active')
}




var swiper = new Swiper(".home-slider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
});


var swiper = new Swiper(".review-slider", {
  spaceBetween: 20,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
  breakpoints: {
    0: {
      slidersPerView: 1,
    },
    640: {
      slidersPerView: 2,
    },
    768: {
      slidersPerView: 2,
    },
    1024: {
      slidersPerView: 3,
    }
  }
});



document.addEventListener("DOMContentLoaded", function () {
  var header = document.querySelector("header");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      header.style.backgroundColor = "blue";
    } else {
      header.style.backgroundColor = "#020236";
    }
  });
});