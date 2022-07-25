const displayDiv = document.querySelector(".display h4");

(function showDate() {
  const date = new Date();
  displayDiv.innerText = date;
})();
