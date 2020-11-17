function toggleSidebar() {
  const menu_toggler = document.getElementById("sidebar-toggler");
  const body = document.getElementById("body");

  if (menu_toggler.className === "fas fa-bars pointer") {
    document.getElementById("sidebar").style.right = "0";
    menu_toggler.className = "fas fa-times pointer";
    body.style.overflow = "hidden";
  } else {
    document.getElementById("sidebar").style.right = "-100%";
    menu_toggler.className = "fas fa-bars pointer";
    body.style.overflow = "visible";
  }
}
