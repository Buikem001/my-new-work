const link = document.querySelector('.link');
const hamburger = document.querySelector('.hamburger');
const hamburgerClose = document.querySelector('.hamburgerClose');

function OpenNav() {
    link.style = "top: 30%";
    hamburgerClose.style = "display: block";
    hamburger.style = "display: none";
}

function CloseNav() {
    link.style = "top: -30%";
    hamburgerClose.style = "display: none";
    hamburger.style = "display: block";
}




$(".owl-carousel").owlCarousel({
    items: 3,
    loop: true,
    autoplay: true,
    margin: 50,
    dots: true,
    arrows: true,
    nav: false,
    navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
    responsive: {
      0: {
        items: 1,
        nav: true,
        loop: true,
      },
      600: {
        items: 2,
        nav: true,
        loop: true,
      },
      900: {
          items: 3,
          nav: true,
          loop: true,
        },
      1200: {
        items: 4,
        nav: true,
        loop: true,
      },
    },
  });
  
// $(".clients-carousel").owlCarousel({
//     items: 3,
//     loop: true,
//     autoplay: true,
//     margin: 50,
//     dots: true,
//     arrows: true,
//     nav: false,
//     navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
//     responsive: {
//       0: {
//         items: 1,
//         nav: true,
//         loop: true,
//       },
//       600: {
//         items: 2,
//         nav: true,
//         loop: true,
//       },
//       900: {
//           items: 3,
//           nav: true,
//           loop: true,
//         },
//       1200: {
//         items: 4,
//         nav: true,
//         loop: true,
//       },
//     },
//   });
  