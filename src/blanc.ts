import "./index.css";

console.log("This page intentionally left blank.");

window.addEventListener(
  "keydown",
  (event) => {
    if (event.key === "x") {
      console.log("x key pressed");
      document.documentElement.requestFullscreen();
    }
  },
  false,
);
