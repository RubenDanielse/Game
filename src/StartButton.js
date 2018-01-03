import "./StartButton.css";

const StartButton = callback => {
  const button = document.createElement("div");
  button.classList.add("StartButton");
  button.innerHTML = "START";
  button.onclick = function() {
    button.onclick = undefined;
    let count = 3;
    const delay = 1000;
    const timer = setInterval(() => {
      if (count === 0) {
        clearInterval(timer);
        callback();
        button.classList.add("hidden");
      }
      button.innerHTML = count--;
    }, delay);
  };
  return button;
};

export default StartButton;
