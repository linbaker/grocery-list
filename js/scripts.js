$(function() {
  $("#grocery-form").submit(function(event) {
    var groceries = ["item1", "item2", "item3", "item4", "item5"];


    var gList = [];
    groceries.forEach(function(grocery) {
    var groceryInput = $("input#" + grocery).val();

    gList.push(groceryInput);

    event.preventDefault();

    });
    gList.sort();
    alert(gList);
    gList.forEach(function(bob) {
    $(".groceries").append("<li>" + bob.charAt(0).toUpperCase() + bob.slice(1) + "</li>").val();

    event.preventDefault();

    });
  });
});
