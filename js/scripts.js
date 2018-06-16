function Pizza (size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

Pizza.prototype.checkPrice = function () {
return (+this.size) + (+this.toppings);
}

Pizza.prototype.sizeSelect = function () {

var userSize = $("#size").val();
  if (userSize === "1") {
    this.size = "8"
  }else if (userSize === "2") {
    this.size = "10"
  }else {
    this.size = "12"
  }
}

Pizza.prototype.toppingsSelect = function () {
  var userTopping1 = $("#topping1").val();
  var userTopping2 = $("#topping2").val();
  var userTopping3 = $("#topping3").val();
  var toppingsTotal = (+userTopping1) + (+userTopping2) + (+userTopping3);
  if (toppingsTotal == "1") {
    this.toppings = "1.75"
  }else if (toppingsTotal == "2") {
    this.toppings = "3.50"
  }else if (toppingsTotal == "3") {
    this.toppings = "5.25"
  }else{
    this.toppings = "0"
  }
}
$(document).ready(function() {

  $("form.options").submit(function(event) {
    event.preventDefault();

    var userTopping1 = $("#topping1").val();
    var userTopping2 = $("#topping2").val();
    var userTopping3 = $("#topping3").val();
    var userSize = $("#size").val();
    var toppingsTotal = (+userTopping1) + (+userTopping2) + (+userTopping3);
    var userPizza = new Pizza (userSize, toppingsTotal)
    $("#result").text(userPizza.checkPrice(userPizza.sizeSelect(), userPizza.toppingsSelect()));
debugger;
  });
});
