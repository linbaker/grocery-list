$(function() {
  $("#grocery-form").submit(function(event) {
    var groceries = ["item1", "item2", "item3", "item4", "item5"];
    console.log("1", groceries);

    groceries.forEach(function(grocery) {
      var groceryInput = $("input#" + grocery).val();
      $(".groceries").sort().append("<li>" + groceryInput.charAt(0).toUpperCase() + groceryInput.slice(1) + "</li>").val();

      console.log("2", groceryInput);
    });
    event.preventDefault();
  });
});
