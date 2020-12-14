const titleBtn = document.querySelector(".info__title__moreBtn");
const title = document.querySelector(".info__title__title");

titleBtn.addEventListener("click", () => {
  title.classList.toggle("clamp");
  titleBtn.classList.toggle("clicked");
});
