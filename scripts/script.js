AOS.init();

function toggleSidebar() {
  const sidebar_toggler = document.getElementById("sidebar-toggler");
  const body = document.getElementById("body");

  if (sidebar_toggler.className === "fas fa-bars pointer") {
    document.getElementById("sidebar").style.right = "0";
    sidebar_toggler.className = "fas fa-times pointer";
    body.style.overflow = "hidden";
  } else {
    document.getElementById("sidebar").style.right = "-100%";
    sidebar_toggler.className = "fas fa-bars pointer";
    body.style.overflow = "visible";
  }
}

const gallery_images = [
  { src: "https://ik.imagekit.io/w1xennnidd/restaurant/01_jsIApnb2kPYQ.jpg" },
  { src: "https://ik.imagekit.io/w1xennnidd/restaurant/02_69tQyqSC-fZrj.jpg" },
  { src: "https://ik.imagekit.io/w1xennnidd/restaurant/03_fivS6EQhZ3ar.jpg" },
  { src: "https://ik.imagekit.io/w1xennnidd/restaurant/04_mGmUbSkW6ZmL.jpg" },
  { src: "https://ik.imagekit.io/w1xennnidd/restaurant/05_Nk5hgnOVMT4RZ.jpg" },
  { src: "https://ik.imagekit.io/w1xennnidd/restaurant/06_N_VvBWf7Hadp.jpg" },
  { src: "https://ik.imagekit.io/w1xennnidd/restaurant/07_FwjY72oVj6N8.jpg" },
  { src: "https://ik.imagekit.io/w1xennnidd/restaurant/08_1iiUWED2wcF3.jpg" },
  { src: "https://ik.imagekit.io/w1xennnidd/restaurant/09_vdq8AGuqjD-O.jpg" },
  { src: "https://ik.imagekit.io/w1xennnidd/restaurant/10_rNphfJE00xjJ.jpg" },
  { src: "https://ik.imagekit.io/w1xennnidd/restaurant/11_qF7NGSE_N2jm.jpg" },
  { src: "https://ik.imagekit.io/w1xennnidd/restaurant/12_h_VUmlQDjP0Z.jpg" },
  { src: "https://ik.imagekit.io/w1xennnidd/restaurant/13_P_6pLsAkTP1n.jpg" },
  { src: "https://ik.imagekit.io/w1xennnidd/restaurant/14_7GaVB7712dFN.jpg" },
  { src: "https://ik.imagekit.io/w1xennnidd/restaurant/15_GKSbfs1t8M98i.jpg" },
  { src: "https://ik.imagekit.io/w1xennnidd/restaurant/16_Zbq_ApRctQnU.jpg" },
  { src: "https://ik.imagekit.io/w1xennnidd/restaurant/17_TDP73-vOoeSo.jpg" },
  { src: "https://ik.imagekit.io/w1xennnidd/restaurant/18_NY1yLq1BVlA9.jpg" },
  { src: "https://ik.imagekit.io/w1xennnidd/restaurant/19_E1O19jmNzagLt.jpg" },
  { src: "https://ik.imagekit.io/w1xennnidd/restaurant/20_qnLOdsTboLlpm.jpg" },
  { src: "https://ik.imagekit.io/w1xennnidd/restaurant/21_TVRy-0HwfBM2.jpg" },
  { src: "https://ik.imagekit.io/w1xennnidd/restaurant/22_0mfVwKHALes_.jpg" },
  { src: "https://ik.imagekit.io/w1xennnidd/restaurant/23_WXOiY0BBcr1x.jpg" },
  { src: "https://ik.imagekit.io/w1xennnidd/restaurant/24_7G-FnZ1W9_Co.jpg" },
];

let initialNoOfColumns = $("#gallery-images")
  .css("grid-template-columns")
  .split(" ").length;

$(document).ready(function () {
  appendGalleryImages();
});

$(window).resize(function () {
  let noOfColumns = $("#gallery-images").css("grid-template-columns").split(" ")
    .length;

  let changeInNoOfColumns = false;

  if (noOfColumns !== initialNoOfColumns) {
    initialNoOfColumns = noOfColumns;
    changeInNoOfColumns = true;
  }

  if (changeInNoOfColumns) {
    $("#gallery-images").empty();
    appendGalleryImages();
    changeInNoOfColumns = false;
  }
});

function appendGalleryImages() {
  for (let i = 0; i < initialNoOfColumns; i++) {
    let src = gallery_images[i].src;
    let alt = src.substring(src.lastIndexOf("/") + 1, src.lastIndexOf("."));
    $("#gallery-images").append(
      `<div class="gallery-image"><img src="${src}" alt="${alt}" loading="lazy" /></div>`
    );
  }
}

function loadMoreImages() {
  let galleryLength = $(".gallery-image").length;

  if (galleryLength < gallery_images.length / 2) {
    $("#gallery-images").empty();
    for (let i = 0; i < gallery_images.length / 2; i++) {
      let src = gallery_images[i].src;
      let alt = src.substring(src.lastIndexOf("/") + 1, src.lastIndexOf("."));
      $("#gallery-images").append(
        `<div class="gallery-image"><img src="${src}" alt="${alt}" loading="lazy" /></div>`
      );
    }
  } else if (galleryLength === gallery_images.length / 2) {
    for (let i = gallery_images.length / 2; i < gallery_images.length; i++) {
      let src = gallery_images[i].src;
      let alt = src.substring(src.lastIndexOf("/") + 1, src.lastIndexOf("."));
      $("#gallery-images").append(
        `<div class="gallery-image"><img src="${src}" alt="${alt}" loading="lazy" /></div>`
      );
    }
  }
}
