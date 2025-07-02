let count = 0;
const numberDisplay = document.getElementById('number');

function increment() {
  count++;
  numberDisplay.textContent = count;
}

function decrement() {
  count--;
  numberDisplay.textContent = count;
}
