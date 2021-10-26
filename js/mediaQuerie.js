const headerMain = document.getElementById("headerMain");
let toggleDiv = document.createElement("div");

const comprobarAncho = () => {
  if (window.innerWidth <= 768) {
    toggleDiv.classList.add("header__menuToggle", "fas", "fa-bars");
    toggleDiv.setAttribute("id", "menuToggle");
    headerMain.insertAdjacentElement("beforeend", toggleDiv);
  }else{
      toggleDiv.remove();
  }
};

/*MENU */
toggleDiv.addEventListener("click", () => {
  const nav = document.getElementById("nav");
  toggleDiv.classList.toggle("active");
  nav.classList.toggle("active");

  if (toggleDiv.classList.contains("active")) {
    toggleDiv.classList.add("fa-times");
    toggleDiv.classList.remove("fa-bars");
  } else {
    toggleDiv.classList.remove("fa-times");
    toggleDiv.classList.add("fa-bars");
  }
});


window.addEventListener("resize", () => {
  comprobarAncho();
});

window.addEventListener("load", () => {
  comprobarAncho();
});