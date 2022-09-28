const displayDiv = document.querySelector(".display h4");

(function showDate() {
  const date = new Date();
  displayDiv.innerText = date;
})();

const number = 9;
const string = String(number);

console.log(isNaN("DFDSF"));
console.log(typeof string);
