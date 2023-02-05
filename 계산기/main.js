const btns = document.querySelectorAll(".btn");
const calculatorFront = document.querySelector(".calculator");
const calculatorBack = document.querySelector(".calculator.back");

btns[1].addEventListener("click", () => {
  document.body.classList.toggle("turn");
});
btns[20].addEventListener("click", () => {
  document.body.classList.toggle("turn");
});
btns.forEach((el) => {
  el.addEventListener("mousedown", () => {
    el.classList.add("click");
  });
  el.addEventListener("mouseup", () => {
    el.classList.remove("click");
  });
  el.addEventListener("mouseout", () => {
    el.classList.remove("click");
  });
});

//12
document.body.addEventListener("keydown", (key) => {
  console.log(key.key);
  switch (key.key) {
    case "Backspace":
      btns[2].dispatchEvent(new Event("mousedown"));
      btns[21].dispatchEvent(new Event("mousedown"));
      break;
    case "/":
      btns[3].dispatchEvent(new Event("mousedown"));
      btns[22].dispatchEvent(new Event("mousedown"));
      break;
    case "7":
      btns[4].dispatchEvent(new Event("mousedown"));
      btns[23].dispatchEvent(new Event("mousedown"));
      break;
    case "8":
      btns[5].dispatchEvent(new Event("mousedown"));
      btns[24].dispatchEvent(new Event("mousedown"));
      break;
    case "9":
      btns[6].dispatchEvent(new Event("mousedown"));
      btns[25].dispatchEvent(new Event("mousedown"));
      break;
    case "*":
      btns[7].dispatchEvent(new Event("mousedown"));
      btns[26].dispatchEvent(new Event("mousedown"));
      break;
    case "4":
      btns[8].dispatchEvent(new Event("mousedown"));
      btns[27].dispatchEvent(new Event("mousedown"));
      break;
    case "5":
      btns[9].dispatchEvent(new Event("mousedown"));
      btns[28].dispatchEvent(new Event("mousedown"));
      break;
    case "6":
      btns[10].dispatchEvent(new Event("mousedown"));
      btns[29].dispatchEvent(new Event("mousedown"));
      break;
    case "-":
      btns[11].dispatchEvent(new Event("mousedown"));
      btns[30].dispatchEvent(new Event("mousedown"));
      break;
    case "1":
      btns[12].dispatchEvent(new Event("mousedown"));
      btns[31].dispatchEvent(new Event("mousedown"));
      break;
    case "2":
      btns[13].dispatchEvent(new Event("mousedown"));
      btns[32].dispatchEvent(new Event("mousedown"));
      break;
    case "3":
      btns[14].dispatchEvent(new Event("mousedown"));
      btns[33].dispatchEvent(new Event("mousedown"));
      break;
    case "+":
      btns[15].dispatchEvent(new Event("mousedown"));
      btns[34].dispatchEvent(new Event("mousedown"));
      break;
    case "0":
      btns[16].dispatchEvent(new Event("mousedown"));
      btns[35].dispatchEvent(new Event("mousedown"));
      break;
    case ".":
      btns[17].dispatchEvent(new Event("mousedown"));
      btns[36].dispatchEvent(new Event("mousedown"));
      break;
    case "Enter":
      btns[18].dispatchEvent(new Event("mousedown"));
      btns[37].dispatchEvent(new Event("mousedown"));
      break;
    case "=":
      btns[18].dispatchEvent(new Event("mousedown"));
      btns[37].dispatchEvent(new Event("mousedown"));
      break;
  }
});
document.body.addEventListener("keyup", (key) => {
  switch (key.key) {
    case "Backspace":
      btns[2].dispatchEvent(new Event("mouseup"));
      btns[21].dispatchEvent(new Event("mouseup"));
      break;
    case "/":
      btns[3].dispatchEvent(new Event("mouseup"));
      btns[22].dispatchEvent(new Event("mouseup"));
      break;
    case "7":
      btns[4].dispatchEvent(new Event("mouseup"));
      btns[23].dispatchEvent(new Event("mouseup"));
      break;
    case "8":
      btns[5].dispatchEvent(new Event("mouseup"));
      btns[24].dispatchEvent(new Event("mouseup"));
      break;
    case "9":
      btns[6].dispatchEvent(new Event("mouseup"));
      btns[25].dispatchEvent(new Event("mouseup"));
      break;
    case "*":
      btns[7].dispatchEvent(new Event("mouseup"));
      btns[26].dispatchEvent(new Event("mouseup"));
      break;
    case "4":
      btns[8].dispatchEvent(new Event("mouseup"));
      btns[27].dispatchEvent(new Event("mouseup"));
      break;
    case "5":
      btns[9].dispatchEvent(new Event("mouseup"));
      btns[28].dispatchEvent(new Event("mouseup"));
      break;
    case "6":
      btns[10].dispatchEvent(new Event("mouseup"));
      btns[29].dispatchEvent(new Event("mouseup"));
      break;
    case "-":
      btns[11].dispatchEvent(new Event("mouseup"));
      btns[30].dispatchEvent(new Event("mouseup"));
      break;
    case "1":
      btns[12].dispatchEvent(new Event("mouseup"));
      btns[31].dispatchEvent(new Event("mouseup"));
      break;
    case "2":
      btns[13].dispatchEvent(new Event("mouseup"));
      btns[32].dispatchEvent(new Event("mouseup"));
      break;
    case "3":
      btns[14].dispatchEvent(new Event("mouseup"));
      btns[33].dispatchEvent(new Event("mouseup"));
      break;
    case "+":
      btns[15].dispatchEvent(new Event("mouseup"));
      btns[34].dispatchEvent(new Event("mouseup"));
      break;
    case "0":
      btns[16].dispatchEvent(new Event("mouseup"));
      btns[35].dispatchEvent(new Event("mouseup"));
      break;
    case ".":
      btns[17].dispatchEvent(new Event("mouseup"));
      btns[36].dispatchEvent(new Event("mouseup"));
      break;
    case "Enter":
      btns[18].dispatchEvent(new Event("mouseup"));
      btns[37].dispatchEvent(new Event("mouseup"));
      break;
    case "=":
      btns[18].dispatchEvent(new Event("mouseup"));
      btns[37].dispatchEvent(new Event("mouseup"));
      break;
  }
});
