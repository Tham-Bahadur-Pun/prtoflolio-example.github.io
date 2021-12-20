function navbar() {
  // console.log("scrolled");
  const navbarColorChange = document.querySelector(".navbar");

  // console.log(scrollY);
  if (scrollY > 20) {
    navbarColorChange.style.backgroundColor = "#9B885B";
  } else {
    navbarColorChange.style.removeProperty("background-color");
  }
}
