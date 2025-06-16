const modalMenuBtn = document.querySelector(".modal-menu-btn");
const wrap = document.querySelector(".wrap");
const modalWrap = document.querySelector(".modal-wrap");
const modalMenuWrap = document.querySelector(".modal-menu-wrap");
const modalHeader = document.querySelector(".modal-header");
const modalInner = document.querySelector(".modal-inner");
const modalCloseBtn = document.querySelector(".modal-close-btn");

modalMenuBtn.addEventListener("click", (e) => {
  e.preventDefault();

  // 모달 팝업 시 html, body 스크롤 막기
  document.documentElement.style.overflow = "hidden";
  modalWrap.style.right = 0;
  modalHeader.style.right = 0;
  modalCloseBtn.style.right = "24px";
});

// 모달에서 스크롤 시 모달헤더 고정
modalInner.addEventListener("scroll", () => {
  if (modalInner.scrollTop <= 0) {
    modalHeader.style.position = "absolute";
  } else {
    modalHeader.style.position = "fixed";
    modalCloseBtn.style.position = "fixed";
  }
});

modalCloseBtn.addEventListener("click", () => {
  modalWrap.style.right = "-100%";
  modalHeader.style.right = "-100%";
  document.documentElement.style.overflow = "auto";
  modalCloseBtn.style.right = "-100%";
});
