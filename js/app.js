// genaration pin
function getPin() {
  const pin = getRandom();
  const pinString = pin + "";

  // checking is it 4 digit or smaller
  if (pinString.length === 4) {
    const genaretFieldElement = document.getElementById("genater-field");
    genaretFieldElement.value = pin;
  } else {
    // again call this function and this function gentaert pin until get 4 digit
    getPin();
  }
}

//get random number
function getRandom() {
  const randomNumber = Math.round(Math.random() * 10000);
  return randomNumber;
}

// get number from keypad
function calcNumber() {
  const number = event.target.innerText;
  const numberField = document.getElementById("typednumber");

  // checking number or alphabet
  if (isNaN(number)) {
    /*  if the alphabet id "c", than clearing the input field.
        if the alphabet id "<", than clearing the last number in input field */

    if (number.toLowerCase() === "c") {
      numberField.value = "";
    } else if (number === "<") {
      const prvNumber = numberField.value;
      const digits = prvNumber.split("");
      digits.pop();
      numberField.value = digits.join("");
    }
  } else {
    const prvNumber = numberField.value;
    const newNumber = prvNumber + number;
    numberField.value = newNumber;
  }
}

//check matching
function submit() {
  const numberField = document.getElementById("typednumber");
  const genaretFieldElement = document.getElementById("genater-field");

  if (numberField.value === genaretFieldElement.value) {
    const lastChild =
      document.querySelector(".notify-section").lastElementChild;
    lastChild.style.background = "green";
    const firstChild =
      document.querySelector(".notify-section").firstElementChild;
    firstChild.style.background = "";
  } else {
    //cheack wrong code
    const remainnumberElement = document.getElementById("remainAction");
    const remainNumber = parseFloat(remainnumberElement.innerText);
    const newRemainNumber = remainNumber - 1;
    remainnumberElement.innerText = newRemainNumber;

    //   3 times chance if code is wrong
    if (newRemainNumber < remainNumber && newRemainNumber > 0) {
      const firstChild =
        document.querySelector(".notify-section").firstElementChild;
      firstChild.style.background = "red";
      const lastChild =
        document.querySelector(".notify-section").lastElementChild;
        lastChild.style.background = "";
    } else {
      alert("RELODE YOUR PAGE");
      remainnumberElement.innerText = 3;
    }
  }
}
