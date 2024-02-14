const alternatives = [
  { text: "", images: "images/cat-01.gif" },
  { text: "Are you sure?", images: "images/cat-02.gif" },
  { text: "Think it over again", images: "images/cat-03.gif" },
  { text: "What if I asked really nicely?", images: "images/cat-04.gif" },
  { text: "Don't let fear stop you", images: "images/cat-05.gif" },
  { text: "Come on, dare to say yes", images: "images/cat-01.gif" },
  { text: "PLEASE POO", images: "images/cat-02.gif" },
  { text: "But", images: "images/cat-03.gif" },
  { text: "I am going to die", images: "images/cat-04.gif" },
  { text: "Yep im dead", images: "images/cat-05.gif" },
  { text: "ok ur talking lopsang's ghost", images: "images/cat-01.gif" },
  { text: "please babe", images: "images/cat-02.gif" },
];
const ohyes = {
  text: "I knew you would accept. I love you Sanu Maya. Happy Valentine's Day",
  images: "images/cat-yes.gif",
};
const title = document.querySelector(".title");
const text = document.querySelector(".text");
const cat = document.querySelector(".cat");
const buttons = document.querySelectorAll(".button");
const errorButton = document.querySelector(".button__error");

let count = 0;

function updateDisplay(item) {
  cat.src = item.images;
  text.innerHTML = item.text;
}

errorButton.addEventListener("click", () => {
  count = 0;
  updateDisplay(alternatives[count]);
  buttons.forEach((btn) => (btn.style.display = "inline-block"));
  errorButton.style.display = "none";
});

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.textContent === "YES") {
      updateDisplay(ohyes);
      buttons.forEach((btn) => (btn.style.display = "none"));
    }
    if (button.textContent === "NO") {
      count++;
      if (count < alternatives.length) {
        updateDisplay(alternatives[count]);
      } else {
        buttons.forEach((btn) => (btn.style.display = "none"));
        errorButton.style.display = "inline-block";
      }
    }
  });
});
