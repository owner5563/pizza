function Pizza (size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

Pizza.prototype.checkPrice = function () {
return this.size + this.toppings;
}


Pizza.prototype.sizeSelect = function () {


  if (userSize === "1") {
    this.size = 8
  }else if (userSize === "2") {
    this.size = 10
  }else {
    this.size = 12
  }
}


Pizza.prototype.toppingsSelect = function () {

  var toppingsTotal = userToppings1 + userToppings2 + userToppings3;
  if (toppingsTotal === "1") {
    this.toppings = 1.75
  }else if (toppingsTotal === "2") {
    this.toppings = 3.50
  }else if (toppingsTotals === "3") {
    this.toppings = 5.25
  }else{
    this.toppings = 0
  }
}
$(document).ready(function() {
  var userPizza = new Pizza ()
  $("form#options").submit(function(event) {
    event.preventDefault();
    var userToppings1 = $("#toppings1").val();
    var userToppings2 = $("#toppings2").val();
    var userToppings3 = $("#toppings3").val();
    var userSize = $("#size").val();
    $("#result").text(userPizza.checkPrice());

  });
});
