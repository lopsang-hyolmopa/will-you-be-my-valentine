const valentineAlternatives = [
  { text: "", image: "images/cat-01.gif" },
  { text: "Are you sure?", image: "images/cat-02.gif" },
  { text: "Think it over again.", image: "images/cat-03.gif" },
  { text: "What if I asked really nicely?", image: "images/cat-04.gif" },
  { text: "Don't let fear stop you.", image: "images/cat-05.gif" },
  { text: "Come on, dare to say yes.", image: "images/cat-02.gif" },
  { text: "PLEASE BABE", image: "images/cat-03.gif" },
  { text: "But", image: "images/cat-04.gif" },
  { text: "I am going to die.", image: "images/cat-05.gif" },
  { text: "Yep I'm dead.", image: "images/cat-02.gif" },
  { text: "Ok you're talking Lopsang's ghost.", image: "images/cat-03.gif" },
];

const valentineYesMessage =
  "I knew you would accept. I love you Sanu Maya. Happy Valentine's Day";
const valentineElements = {
  title: document.querySelector(".valentine-title"),
  text: document.querySelector(".valentine-text"),
  image: document.querySelector(".valentine-image"),
  buttons: {
    yes: document.querySelector(".yes-button"),
    no: document.querySelector(".no-button"),
    error: document.querySelector(".error-button"),
  },
};

let currentIndex = 0;

function updateValentineDisplay(item) {
  valentineElements.image.src = item.image;
  valentineElements.text.innerHTML = item.text;
}

valentineElements.buttons.error.addEventListener("click", () => {
  currentIndex = 0;
  updateValentineDisplay(valentineAlternatives[currentIndex]);
  Object.values(valentineElements.buttons).forEach(
    (btn) => (btn.style.display = "inline-block")
  );
  valentineElements.buttons.error.style.display = "none";
});

function handleValentineButtonClick(answer) {
  if (answer === "YES") {
    updateValentineDisplay({
      text: valentineYesMessage,
      image: "images/cat-yes.gif",
    });
    Object.values(valentineElements.buttons).forEach(
      (btn) => (btn.style.display = "none")
    );
  } else if (answer === "NO") {
    currentIndex++;
    if (currentIndex < valentineAlternatives.length) {
      updateValentineDisplay(valentineAlternatives[currentIndex]);
    } else {
      Object.values(valentineElements.buttons).forEach(
        (btn) => (btn.style.display = "none")
      );
      valentineElements.buttons.error.style.display = "inline-block";
    }
  }
}

valentineElements.buttons.yes.addEventListener("click", () =>
  handleValentineButtonClick("YES")
);
valentineElements.buttons.no.addEventListener("click", () =>
  handleValentineButtonClick("NO")
);
