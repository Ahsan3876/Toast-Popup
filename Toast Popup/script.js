const messageInput = document.getElementById("Text-input");
const submitButton = document.querySelector(".button");
const messageNote = document.querySelector(".LT span");
const horizontalPosition = document.querySelector("#l-r");
const verticalPosition = document.querySelector("#T-p");
const messageContainer = document.querySelector(".messages");
const currentStatus = document.querySelector("#Status");
const trueNote = document.querySelector(".LB");
const duration = document.querySelector("#Range-input");

submitButton.addEventListener("click", () => {
  const crossSymbol = document.createElement("span");
  crossSymbol.innerText = `✕`;
  crossSymbol.classList.add("cross");

  const newContainer = document.createElement("div");
  newContainer.classList.add("container");
  newContainer.classList.add("LT");
  newContainer.classList.add(currentStatus.value);
  newContainer.innerText = `${messageInput.value}`;

  if (!messageInput.value) {
    submitButton.disabled();
  }

  crossSymbol.addEventListener("click", () => {
    if (messageContainer.classList.contains("right")) {
      newContainer.classList.add("goRight");
    } else {
      newContainer.classList.add("goLeft");
    }
    newContainer.classList.add("goLeft");
    setTimeout(() => {
      newContainer.remove();
    }, parseInt(duration.value));
  });

  setTimeout(() => {
    newContainer.remove();
  }, parseInt(duration.value) * 1000);

  newContainer.append(crossSymbol);
  messageContainer.append(newContainer);

  messageInput.addEventListener("input", () => {
    if (!messageInput.value.trim()) {
      submitButton.disabled = true;
      submitButton.classList.add("disabled");
    } else {
      submitButton.disabled = false;
      submitButton.classList.remove("disabled");
    }
  });

  if (horizontalPosition.value === "right") {
    messageContainer.classList.add("right");
  } else {
    messageContainer.classList.remove("right");
  }
  if (verticalPosition.value === "Bottom") {
    messageContainer.classList.add("Bottom");
  } else {
    messageContainer.classList.remove("Bottom");
  }
});
