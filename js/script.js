let valueDisplays = document.querySelectorAll(".num");
let interval = 4000;

valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  
  // Use a single interval for all elements
  let counter = setInterval(function () {
    if (startValue <= endValue) {
      valueDisplay.textContent = startValue;
      startValue += 1;
    } else {
      clearInterval(counter);
    }
  }, duration);
});