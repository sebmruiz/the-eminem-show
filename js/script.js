const menuToggle = document.querySelector(".menu-toggle");
const navegation = document.querySelector(".navegation");

menuToggle.onclick = () => {
  navegation.classList.toggle("open");
};

const listItems = document.querySelectorAll(".list-item");
listItems.forEach((item) => {
  item.onclick = () => {
    listItems.forEach((item) => item.classList.remove("active"));
    item.classList.add("active");
  };
});
