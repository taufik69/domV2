let initailValue = 0;

const Counter = document.querySelector(".Counter");
const btn = document.querySelectorAll(".btn");

Counter.innerHTML = initailValue;
btn.forEach((item) => {
  item.addEventListener("click", (items) => {
    let classListbtn = items.currentTarget.classList;
    if (classListbtn.contains("add")) {
      initailValue++;
      Counter.innerHTML = initailValue;
    } else if (classListbtn.contains("dec")) {
      initailValue--;
      Counter.innerHTML = initailValue;
    } else {
      initailValue = 0;
      Counter.innerHTML = initailValue;
    }
    if (initailValue >= 1) {
      Counter.style.color = "green";
    }
    if (initailValue < 1) {
      Counter.style.color = "red";
    }
    if (initailValue == 0) {
      Counter.style.color = "black";
    }
  });
});
