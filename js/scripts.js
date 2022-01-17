var input = document.getElementById("submitButton");
input.addEventListener("click", submittedValues, true);

function submittedValues(event) {
  event.preventDefault();
  //var size = document.querySelector('input[name="gender"]:checked').value;
  var amount = document.getElementById("amount").value;
  var size = document.querySelector('input[name="size"]:checked').value;
  var crust = document.querySelector('input[name="crust"]:checked').value;
  var top = document.querySelector('input[name="top"]:checked').value;
  var deliver = document.getElementById("deliver").checked;

  console.log(size,crust,top,amount,deliver);
}
