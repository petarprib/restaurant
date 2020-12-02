AOS.init();

function toggleSidebar() {
  if ($("#sidebar-toggler").attr("class") === "pointer fas fa-bars") {
    $("#sidebar").css("right", "0");
    $("#sidebar-toggler").removeClass("fa-bars");
    $("#sidebar-toggler").addClass("fa-times");
    $("body").css("overflow", "hidden");
  } else {
    $("#sidebar").css("right", "-100%");
    $("#sidebar-toggler").removeClass("fa-times");
    $("#sidebar-toggler").addClass("fa-bars");
    $("body").css("overflow", "visible");
  }
}

const gallery_images = [
  "https://ik.imagekit.io/w1xennnidd/restaurant/01_jsIApnb2kPYQ.jpg",
  "https://ik.imagekit.io/w1xennnidd/restaurant/02_69tQyqSC-fZrj.jpg",
  "https://ik.imagekit.io/w1xennnidd/restaurant/03_fivS6EQhZ3ar.jpg",
  "https://ik.imagekit.io/w1xennnidd/restaurant/04_mGmUbSkW6ZmL.jpg",
  "https://ik.imagekit.io/w1xennnidd/restaurant/05_Nk5hgnOVMT4RZ.jpg",
  "https://ik.imagekit.io/w1xennnidd/restaurant/06_N_VvBWf7Hadp.jpg",
  "https://ik.imagekit.io/w1xennnidd/restaurant/07_FwjY72oVj6N8.jpg",
  "https://ik.imagekit.io/w1xennnidd/restaurant/08_1iiUWED2wcF3.jpg",
  "https://ik.imagekit.io/w1xennnidd/restaurant/09_vdq8AGuqjD-O.jpg",
  "https://ik.imagekit.io/w1xennnidd/restaurant/10_rNphfJE00xjJ.jpg",
  "https://ik.imagekit.io/w1xennnidd/restaurant/11_qF7NGSE_N2jm.jpg",
  "https://ik.imagekit.io/w1xennnidd/restaurant/12_h_VUmlQDjP0Z.jpg",
  "https://ik.imagekit.io/w1xennnidd/restaurant/13_P_6pLsAkTP1n.jpg",
  "https://ik.imagekit.io/w1xennnidd/restaurant/14_7GaVB7712dFN.jpg",
  "https://ik.imagekit.io/w1xennnidd/restaurant/15_GKSbfs1t8M98i.jpg",
  "https://ik.imagekit.io/w1xennnidd/restaurant/16_Zbq_ApRctQnU.jpg",
  "https://ik.imagekit.io/w1xennnidd/restaurant/17_TDP73-vOoeSo.jpg",
  "https://ik.imagekit.io/w1xennnidd/restaurant/18_NY1yLq1BVlA9.jpg",
  "https://ik.imagekit.io/w1xennnidd/restaurant/19_E1O19jmNzagLt.jpg",
  "https://ik.imagekit.io/w1xennnidd/restaurant/20_qnLOdsTboLlpm.jpg",
  "https://ik.imagekit.io/w1xennnidd/restaurant/21_TVRy-0HwfBM2.jpg",
  "https://ik.imagekit.io/w1xennnidd/restaurant/22_0mfVwKHALes_.jpg",
  "https://ik.imagekit.io/w1xennnidd/restaurant/23_WXOiY0BBcr1x.jpg",
  "https://ik.imagekit.io/w1xennnidd/restaurant/24_7G-FnZ1W9_Co.jpg",
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
    resetGallery();
  }
});

function resetGallery() {
  $("#gallery-images").empty();
  appendGalleryImages();
  $("#close-gallery").replaceWith(
    "<p id='load-more' class='pointer gallery-button' onclick='loadMoreImages()'>Load more</p>"
  );
}

function appendGalleryImages() {
  for (let i = 0; i < initialNoOfColumns; i++) {
    let src = gallery_images[i];
    let alt = src.substring(src.lastIndexOf("/") + 1, src.lastIndexOf("."));

    $("#gallery-images").append(
      `<div class="gallery-image"><img class="pointer" data-aos="fade" data-aos-duration="750" data-aos-easing="ease" data-aos-once="true" onclick="openImage('${src}')" src="${src}" alt="${alt}"/></div>`
    );
  }
}

function loadMoreImages() {
  let galleryLength = $(".gallery-image").length;

  if (galleryLength < gallery_images.length / 2) {
    $("#gallery-images").empty();
    for (let i = 0; i < gallery_images.length / 2; i++) {
      let src = gallery_images[i];
      let alt = src.substring(src.lastIndexOf("/") + 1, src.lastIndexOf("."));

      $("#gallery-images").append(
        `<div class="gallery-image"><img class="pointer" onclick="openImage('${src}')" src="${src}" alt="${alt}"/></div>`
      );
    }
  } else if (galleryLength === gallery_images.length / 2) {
    for (let i = gallery_images.length / 2; i < gallery_images.length; i++) {
      let src = gallery_images[i];
      let alt = src.substring(src.lastIndexOf("/") + 1, src.lastIndexOf("."));

      $("#gallery-images").append(
        `<div class="gallery-image"><img class="pointer" onclick="openImage('${src}')" src="${src}" alt="${alt}"/></div>`
      );
    }
  }

  if ($(".gallery-image").length === gallery_images.length) {
    $("#load-more").replaceWith(
      "<p id='close-gallery' class='pointer gallery-button' onclick='resetGallery()'>Close gallery</p>"
    );
  }
}

let slideshowOpen = false;

function openImage(src) {
  slideshowOpen = true;
  $("#slideshow-image").empty();
  $("#gallery-slideshow").removeClass("hidden");
  $("#gallery-slideshow").addClass("show-slideshow");
  $("body").css("overflow", "hidden");
  let alt = src.substring(src.lastIndexOf("/") + 1, src.lastIndexOf("."));
  $("#slideshow-image").append(`<img src="${src}" alt="${alt}"/>`);
}

function closeSlideshow() {
  slideshowOpen = false;
  $("#gallery-slideshow").addClass("hidden");
  $("body").css("overflow", "visible");
}

function previousImage() {
  let src = $("#slideshow-image img").attr("src");
  let imageIndex = gallery_images.indexOf(src);
  let previousImage = gallery_images[imageIndex - 1];
  let previousAlt = previousImage.substring(
    previousImage.lastIndexOf("/") + 1,
    previousImage.lastIndexOf(".")
  );
  if (imageIndex > 0) {
    $("#slideshow-image").empty();
    $("#slideshow-image").append(
      `<img src="${previousImage}" alt="${previousAlt}"/>`
    );
  }
}

function nextImage() {
  let src = $("#slideshow-image img").attr("src");
  let imageIndex = gallery_images.indexOf(src);
  let nextImage = gallery_images[imageIndex + 1];
  let nextAlt = nextImage.substring(
    nextImage.lastIndexOf("/") + 1,
    nextImage.lastIndexOf(".")
  );

  if (imageIndex < gallery_images.length - 1) {
    $("#slideshow-image").empty();
    $("#slideshow-image").append(`<img src="${nextImage}" alt="${nextAlt}"/>`);
  }
}

$("body").keydown(function (e) {
  if (slideshowOpen) {
    if (e.key === "Escape") {
      closeSlideshow();
    } else if (e.key === "ArrowLeft") {
      previousImage();
    } else if (e.key === "ArrowRight") {
      nextImage();
    }
  }
});
