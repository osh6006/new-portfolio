// Header에 페이지 아래로 스크롤 시 다크 스타일링 적용
const headerEl = document.querySelector(".header");
const headerHeight = headerEl.getBoundingClientRect().height;

document.addEventListener("scroll", () => {
  if (window.scrollY > headerHeight) {
    headerEl.classList.add("header--dark");
  } else {
    headerEl.classList.remove("header--dark");
  }
});

// 페이지를 아래로 스크롤 시 home의 투명도 조절
const homeEl = document.querySelector(".home__box");
const homeHeight = homeEl.getBoundingClientRect().height;

document.addEventListener("scroll", () => {
  homeEl.style.opacity = 1 - window.scrollY / homeHeight;
});

// 스크롤이 Home 절반쯤 내려가면 Arrow-up 버튼의 diplay를 토글
const arrowEl = document.querySelector(".arrow-up");

document.addEventListener("scroll", () => {
  if (1 - window.scrollY / homeHeight < 0.5) {
    arrowEl.classList.remove("hidden");
  } else {
    arrowEl.classList.add("hidden");
  }
});
