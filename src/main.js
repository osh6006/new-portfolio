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
