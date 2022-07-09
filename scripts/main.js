const menuToggle = document.querySelector(".menu-bar");
const menu = document.querySelector(".menu");
const overlay = document.querySelector(".overlay");
const footerTitles = document.querySelectorAll(".footer-title");
const footerLists = document.querySelectorAll(".footer-top__layout ul");
const mainImage = document.querySelector(".image-main img");
const imageSlider = document.querySelectorAll(".image-slider div img");
// show and hide menu in mobile screen
let showMenu = false;

menuToggle.addEventListener("click", function (e) {
  if (showMenu) {
    showMenu = false;
    menu.style.height = `0px`;
    overlay.classList.remove("show");
  } else {
    showMenu = true;
    menu.style.height = `${menu.scrollHeight}px`;
    overlay.classList.add("show");
  }
});

overlay.addEventListener("click", function () {
  menu.style.height = `0px`;
  showMenu = false;
  overlay.classList.remove("show");
});

// show hide footer item in mobile screen
// show and hide footer item
function footerItemAction(node, height = 0) {
  node.style.height = `${height}px`;
  height === 0 ? node.classList.remove("show") : node.classList.add("show");
}
[...footerTitles].map((item, index) => {
  item.addEventListener("click", function (e) {
    [...footerLists].map((footerItem) => {
      footerItem.classList.contains("show") && footerItemAction(footerItem);
    });
    const footerItem = footerLists[index];
    const heightFooterItem = footerItem.scrollHeight;

    if (footerItem.classList.contains("show")) {
      footerItemAction(footerItem);
    } else {
      footerItemAction(footerItem, heightFooterItem);
    }
  });
});

// transfrom product detail image slider
mainImage &&
  imageSlider &&
  [...imageSlider].map((item) => {
    item.parentNode.addEventListener("click", () => {
      [...imageSlider].map((itemShow) => {
        const parentActive = itemShow.parentNode;
        parentActive.classList.contains("active") &&
          parentActive.classList.remove("active");
      });

      item.parentNode.classList.add("active");
      const url = item.src;

      mainImage.src = url;
    });
  });
