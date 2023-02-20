const btns = document.querySelectorAll(".btn");
const calculatorFront = document.querySelector(".calculator");
const calculatorBack = document.querySelector(".calculator.back");
const textarea = document.querySelector(".text-area");
const accmulate = document.querySelector(".accumulate");

btns[1].addEventListener("click", () => {
  document.body.classList.toggle("night");
  if (btns[1].textContent == "Day") {
    btns[1].textContent = "night";
  } else {
    btns[1].textContent = "Day";
  }
});
btns.forEach((el) => {
  el.addEventListener("mousedown", (a) => {
    el.classList.add("click");
    switch (el.textContent) {
      case "1":
        if (textarea.textContent == "0") {
          textarea.textContent = "";
        }
        if (accmulate.textContent.at(-2) == "=") {
          accmulate.textContent = "";
          textarea.textContent = "";
        }
        textarea.textContent += "1";
        break;
      case "2":
        if (textarea.textContent == "0") {
          textarea.textContent = "";
        }
        if (accmulate.textContent.at(-2) == "=") {
          accmulate.textContent = "";
          textarea.textContent = "";
        }
        textarea.textContent += "2";
        break;
      case "3":
        if (textarea.textContent == "0") {
          textarea.textContent = "";
        }
        if (accmulate.textContent.at(-2) == "=") {
          accmulate.textContent = "";
          textarea.textContent = "";
        }
        textarea.textContent += "3";
        break;
      case "4":
        if (textarea.textContent == "0") {
          textarea.textContent = "";
        }
        if (accmulate.textContent.at(-2) == "=") {
          accmulate.textContent = "";
          textarea.textContent = "";
        }
        textarea.textContent += "4";
        break;
      case "5":
        if (textarea.textContent == "0") {
          textarea.textContent = "";
        }
        if (accmulate.textContent.at(-2) == "=") {
          accmulate.textContent = "";
          textarea.textContent = "";
        }
        textarea.textContent += "5";
        break;
      case "6":
        if (textarea.textContent == "0") {
          textarea.textContent = "";
        }
        if (accmulate.textContent.at(-2) == "=") {
          accmulate.textContent = "";
          textarea.textContent = "";
        }
        textarea.textContent += "6";
        break;
      case "7":
        if (textarea.textContent == "0") {
          textarea.textContent = "";
        }
        if (accmulate.textContent.at(-2) == "=") {
          accmulate.textContent = "";
          textarea.textContent = "";
        }
        textarea.textContent += "7";
        break;
      case "8":
        if (textarea.textContent == "0") {
          textarea.textContent = "";
        }
        if (accmulate.textContent.at(-2) == "=") {
          accmulate.textContent = "";
          textarea.textContent = "";
        }
        textarea.textContent += "8";
        break;
      case "9":
        if (textarea.textContent == "0") {
          textarea.textContent = "";
        }
        if (accmulate.textContent.at(-2) == "=") {
          accmulate.textContent = "";
          textarea.textContent = "";
        }
        textarea.textContent += "9";
        break;
      case "0":
        if (textarea.textContent == "0") {
          textarea.textContent = "";
        }
        if (accmulate.textContent.at(-2) == "=") {
          accmulate.textContent = "";
          textarea.textContent = "";
        }
        textarea.textContent += "0";
        break;
      case ".":
        if (textarea.textContent.indexOf(".") == -1) {
          textarea.textContent += ".";
        } else {
          return;
        }

        break;
      case "Delete":
        let Delete = textarea.textContent;
        textarea.textContent = Delete.slice(0, -1);
        if (textarea.textContent == "") {
          textarea.textContent = "0";
        }
        break;
      case "Ac":
        accmulate.textContent = "";
        textarea.textContent = "0";
        break;
      case "/":
        btns[18].dispatchEvent(new Event("mousedown"));
        btns[18].dispatchEvent(new Event("mouseup"));
        accmulate.textContent = `${textarea.textContent} /`;
        textarea.textContent = "0";
        break;
      case "*":
        btns[18].dispatchEvent(new Event("mousedown"));
        btns[18].dispatchEvent(new Event("mouseup"));
        accmulate.textContent = `${textarea.textContent} *`;
        textarea.textContent = "0";
        break;
      case "-":
        btns[18].dispatchEvent(new Event("mousedown"));
        btns[18].dispatchEvent(new Event("mouseup"));
        accmulate.textContent = `${textarea.textContent} -`;
        textarea.textContent = "0";
        break;
      case "+":
        btns[18].dispatchEvent(new Event("mousedown"));
        btns[18].dispatchEvent(new Event("mouseup"));

        accmulate.textContent = `${textarea.textContent} +`;
        textarea.textContent = "0";
        break;
      case "=":
        let accLen = accmulate.textContent.length;
        let accValue = accmulate.textContent.slice(0, accLen - 2);
        let textValue = textarea.textContent;

        switch (accmulate.textContent.at(-1)) {
          case "/":
            let divideNum = Number(accValue) / Number(textValue);
            let divideStr = parseFloat(divideNum.toFixed(10));
            textarea.textContent = divideStr;
            accmulate.textContent = `${accValue} / ${textValue} = `;
            break;
          case "*":
            let multiplyNum = Number(accValue) * Number(textValue);
            let multiplyStr = parseFloat(multiplyNum.toFixed(10));
            textarea.textContent = multiplyStr;
            accmulate.textContent = `${accValue} * ${textValue} = `;
            break;
          case "-":
            let minusNum = Number(accValue) - Number(textValue);
            let minusStr = parseFloat(minusNum.toFixed(10));
            textarea.textContent = minusStr;
            accmulate.textContent = `${accValue} - ${textValue} = `;
            break;
          case "+":
            let plusNum = Number(accValue) + Number(textValue);
            let plusStr = parseFloat(plusNum.toFixed(10));
            textarea.textContent = plusStr;
            accmulate.textContent = `${accValue} + ${textValue} = `;
            break;
        }
    }
  });
  el.addEventListener("mouseup", () => {
    el.classList.remove("click");
  });
  el.addEventListener("mouseout", () => {
    el.classList.remove("click");
  });
});

document.body.addEventListener("keydown", (key) => {
  switch (key.key) {
    case "Escape":
      btns[0].dispatchEvent(new Event("mousedown"));
      break;
    case "Backspace":
      btns[2].dispatchEvent(new Event("mousedown"));
      break;
    case "/":
      btns[3].dispatchEvent(new Event("mousedown"));
      break;
    case "7":
      btns[4].dispatchEvent(new Event("mousedown"));
      break;
    case "8":
      btns[5].dispatchEvent(new Event("mousedown"));
      break;
    case "9":
      btns[6].dispatchEvent(new Event("mousedown"));
      break;
    case "*":
      btns[7].dispatchEvent(new Event("mousedown"));
      break;
    case "4":
      btns[8].dispatchEvent(new Event("mousedown"));
      break;
    case "5":
      btns[9].dispatchEvent(new Event("mousedown"));
      break;
    case "6":
      btns[10].dispatchEvent(new Event("mousedown"));
      break;
    case "-":
      btns[11].dispatchEvent(new Event("mousedown"));
      break;
    case "1":
      btns[12].dispatchEvent(new Event("mousedown"));
      break;
    case "2":
      btns[13].dispatchEvent(new Event("mousedown"));
      break;
    case "3":
      btns[14].dispatchEvent(new Event("mousedown"));
      break;
    case "+":
      btns[15].dispatchEvent(new Event("mousedown"));
      break;
    case "0":
      btns[16].dispatchEvent(new Event("mousedown"));
      break;
    case ".":
      btns[17].dispatchEvent(new Event("mousedown"));
      break;
    case "Enter":
      btns[18].dispatchEvent(new Event("mousedown"));
      break;
    case "=":
      btns[18].dispatchEvent(new Event("mousedown"));
      break;
  }
});
document.body.addEventListener("keyup", (key) => {
  switch (key.key) {
    case "Escape":
      btns[0].dispatchEvent(new Event("mouseup"));
      break;
    case "Backspace":
      btns[2].dispatchEvent(new Event("mouseup"));
      break;
    case "/":
      btns[3].dispatchEvent(new Event("mouseup"));

      break;
    case "7":
      btns[4].dispatchEvent(new Event("mouseup"));
      break;
    case "8":
      btns[5].dispatchEvent(new Event("mouseup"));
      break;
    case "9":
      btns[6].dispatchEvent(new Event("mouseup"));
      break;
    case "*":
      btns[7].dispatchEvent(new Event("mouseup"));
      break;
    case "4":
      btns[8].dispatchEvent(new Event("mouseup"));
      break;
    case "5":
      btns[9].dispatchEvent(new Event("mouseup"));
      break;
    case "6":
      btns[10].dispatchEvent(new Event("mouseup"));
      break;
    case "-":
      btns[11].dispatchEvent(new Event("mouseup"));
      break;
    case "1":
      btns[12].dispatchEvent(new Event("mouseup"));
      break;
    case "2":
      btns[13].dispatchEvent(new Event("mouseup"));
      break;
    case "3":
      btns[14].dispatchEvent(new Event("mouseup"));
      break;
    case "+":
      btns[15].dispatchEvent(new Event("mouseup"));
      break;
    case "0":
      btns[16].dispatchEvent(new Event("mouseup"));
      break;
    case ".":
      btns[17].dispatchEvent(new Event("mouseup"));
      break;
    case "Enter":
      btns[18].dispatchEvent(new Event("mouseup"));
      break;
    case "=":
      btns[18].dispatchEvent(new Event("mouseup"));
      break;
  }
});
