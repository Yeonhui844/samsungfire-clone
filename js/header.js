window.addEventListener("scroll", () => {
  //   console.log("스크롤");
  console.log("scrollY:", window.scrollY);

  if (window.scrollY >= 50) {
    document.querySelector(".header-bottom").classList.add("sticky");
  } else {
    document.querySelector(".header-bottom").classList.remove("sticky");
  }
});
