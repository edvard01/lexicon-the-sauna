let temp = 0;
let notOptimal = true;
let tempInCels = 0;

let acceptableTempFloor = 73;
let acceptableTempRoof = 77;
let optimalTemp = 75;

function convertToCels(temp) {
  return ((temp - 32) * 5) / 9;
}

temp = parseInt(
  prompt(
    "Welcome to the Sauna! Please input a temperature in Fahrenheit to have it converted to Celsius."
  )
);

while (notOptimal) {
  if (!isNaN(temp)) {
    tempInCels = convertToCels(temp);

    if (tempInCels < 73) {
      alert(
        "Temperature is too low to be acceptable. Please turn up the heat."
      );
    } else if (tempInCels > 77) {
      alert(
        "Temperature is too high to be acceptable. Please turn down the heat."
      );
    } else if (tempInCels >= acceptableTempFloor && tempInCels < optimalTemp) {
      alert(
        "Temperature is acceptable but too cold to be considered optimal. If you wish for the tempreature to be considered optimal then please raise it."
      );
    } else if (tempInCels > optimalTemp && tempInCels <= acceptableTempRoof) {
      alert(
        "Temperature is acceptable but too hot to be considered optimal. If you wish for the temperature to be considered optimal then please lower it."
      );
    } else if (tempInCels === optimalTemp) {
      alert("Temperature is optimal! Closing user input.");
      notOptimal = false;
      break;
    }
  } else {
    alert("Please input a valid number.");
  }

  temp = prompt("Please input new temperature.");
}
