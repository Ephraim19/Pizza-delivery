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

  function amounts(sizes, crusts, tops, amounts, delivers) {
    this.sizes = sizes;
    this.crusts = crusts;
    this.tops = tops;
    this.amounts = amounts;
    this.delivers = delivers;
  }
  const myAmount = new amounts(size, crust, top, amount, deliver);
  console.log(myAmount);

  if (myAmount.sizes === "large") {
    var mySize = 800;
  } else if (myAmount.sizes === "medium") {
    mySize = 600;
  } else {
    mySize = 400;
  }
  console.log(mySize);

  if (myAmount.crusts === "stuffed") {
    var myCrust = 150;
  } else if (myAmount.crusts === "cracker") {
    myCrust = 120;
  } else {
    myCrust = 80;
  }
  console.log(myCrust);

  if (myAmount.tops === "pepperoni") {
    var myTop = 150;
  } else if (myAmount.tops === "sausage") {
    myTop = 150;
  } else {
    myTop = 100;
  }
  console.log(myTop);

  if (myAmount.delivers === true){
    var totalAmount = myCrust +mySize + myTop + 100
  } else {
      totalAmount -= 100
  }
  console.log(totalAmount)
  document.getElementById("amounted").innerHTML = myCrust +mySize + myTop;
  document.getElementById("totalAmount").innerHTML = totalAmount;

}

