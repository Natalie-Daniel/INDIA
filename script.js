$(function () {
  //regular expression of only letters
  let alphaRegex = /^[a-zA-Z]*$/;

  let selectFood = [
    ["Mexican", ["Tacos", "Burritos", "Chorizo", "Salsa"]],
    ["American", ["Burgers", "Fries", "Bacon"]],
    ["Chinese", ["Fried Rice", "Egg Rolls", "General Tso's"]],
    ["Italian", ["Spaghetti", "Lasagna", "Salad"]],
    ["Dessert",["Ice Cream", "Cake", "Cookies", "Cheesecake", "Chocolate", ""]],
    ["Fast Food",["Taco Bell","Zaxby's","Wendy's","Arby's","McDonald's","Sonic","Subway"]],
    ["bear", ["Barry"]]];

  $("#noSpaces").blur(function () {
    let inputVal = $(this).val();
    let strSpace = " ";
    let spaceCount = inputVal.split(" ").length - 1;

    console.log(spaceCount);
    if (spaceCount === 0) {
      $(this).next().text("all good");
    } else if (spaceCount > 0) {
      $(this).next().text("no spaces allowed in User Name");
    }
  });

  $("#noAlpha").keyup(function (e) {
    e.preventDefault();
    this.value = this.value.replace(/[^0-9\.]/g, "");
    $(this).next().text("remember, no alpha!");
  });

  $("#noNumbers").on("input", function () {
    let inputVal = $(this).val();

    if (alphaRegex.test(inputVal)) {
      $(this).removeClass("error").addClass("success");
      $(this).next().text("super cool!");
    } else {
      $(this).removeClass("success").addClass("error");
      $(this).next().text("ah, farts!");
    }
  });

  //This is example #4
  $("#noNumbersDown").keydown(function (e) {
    let inputVal = $(this).val();

    // test input value against regular expression
    if (alphaRegex.test(inputVal)) {
      $(this).removeClass("error").addClass("success");
      $(this).next().text("super cool!");
    } else {
      $(this).removeClass("success").addClass("error");
      $(this).next().text("ah, farts!");
    }
  });

  //when user selects species of pet...load in names from array
  $("#selectCuisine").on("change", function (e) {
    //enables the pet name dropdown
    $("#selectFood").prop("disabled", false);

    let inputVal = this.value;

    // console.log(inputVal);

    //loop though array of pet names
    $.each(petNames, function (key, value) {
      //match pet name to user selected
      if (inputVal === value[0]) {
        // console.log(value[0] + key + value);
        $.each(value, function (nestKey, nestValue) {
          // console.log(nestKey);

          switch (nestKey) {
            case 0:
              $("label[for=selectFood]").text(nestValue);
              $("#selectFood").empty();
              $("#selectFood").append(
                $("<option>").text(`select a ${nestValue} `)
              );
              break;
            case 1:
              $.each(nestValue, function (nameKey, nameValue) {
                console.log(nameKey, nameValue);

                $("#selectFood").append(
                  $("<option>").val(nameValue).text(nameValue)
                );
              });
              break;
          }
        });
      }
    });
  });

  console.log("user name: " + $("#noSpaces").val());

  // end of doc ready f/n
});

// practice submit code
function logSubmit(event) {
  log.textContent = `Form Submitted!`;
  event.preventDefault();
}

const form = document.getElementById('form');
const log = document.getElementById('log');
form.addEventListener('submit', logSubmit);