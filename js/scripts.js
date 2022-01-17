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

  var total = document.getElementById("total");
  total.style.display = "block";
  document.getElementById("size").innerHTML = size;
  document.getElementById("crust").innerHTML = crust;
  document.getElementById("top").innerHTML = top;

  var sizes = {
    large: 800,
    medium: 600,
    small: 400,
  };
  var crust = {
    stuffed: 150,
    cracker: 120,
    thin: 80,
  };

  var tops = {
    pepperoni: 150,
    sausage: 150,
    mushroom: 100,
  };
}
