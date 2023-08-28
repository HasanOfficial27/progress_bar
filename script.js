/****H****data counter***H****/
let data = document.querySelectorAll("[data-num]");
data.forEach(function (val, i) {
  let dataValue = val.attributes.item(0);
  let dataNumber = Number(dataValue.value);
  var output = data[i];
  console.log("Made by Hasan");
  function countTo(countNum) {
    let from = 0;
    let to = countNum;
    let interval = 20; //ms
    let step = to > from ? 1 : -1;
    if (from == to) {
      output.textContent = from + "%";
      output.style.width = from + "%";
      return;
    }
    let counter = setInterval(function () {
      from += step;
      output.textContent = from + "%";
      output.style.width = from + "%";
      if (from == to) {
        clearInterval(counter);
      }
    }, interval);
  }
  countTo(dataNumber);
});
/****H****data counter****H****/
