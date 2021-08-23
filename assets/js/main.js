let menu = document.getElementById("menu");
let toggleMenu = false;
let toggleNoAni = true;
menu.addEventListener("click", () => {
  if (toggleMenu) {
    menu.classList.remove("open");
    toggleMenu = false;
  } else {
    menu.classList.add("open");
    toggleMenu = true;
    if (toggleNoAni) {
      toggleNoAni = false;
      menu.childNodes.forEach((e) => {
        if (e.nodeType == 1) {
          e.classList.remove("no-ani");
        }
      });
    }
  }
});
