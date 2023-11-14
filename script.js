const input = document.querySelector("#input");
const unit = document.querySelector("#unitdropdown");
const resultTxt = document.querySelector("#resultTxt");
// Definer variabler med HTML elementer i begynnelsen av js koden (good practice!)

const convertUnit = () => {
  result = 0;

  switch (unit.value) {
    case "lbs2kg":
      result = `${(input.value / 2.2).toFixed(2)}kg`;
      break;
    case "kg2lbs":
      result = `${(input.value * 2.2).toFixed(2)}lbs`;
      break;
    case "inch2cm":
      result = `${(input.value * 2.54).toFixed(2)}cm`;
      break;
    case "cm2inch":
      result = `${(input.value / 2.54).toFixed(2)}inch`;
      break;
    case "mile2km":
      result = `${(input.value / 1.6).toFixed(2)}km`;
      break;
    case "km2mile":
      result = `${(input.value * 1.6).toFixed(2)}mile`;
      break;
    default:
      result = "Error";
  }
  resultTxt.textContent = result;
};

/*//////////////////////////////////*/
// BMI calculator
////////////////////////////////////*/

const inputBmiWeight = document.querySelector("#inputbmiweight");
const inputBmiHeight = document.querySelector("#inputbmiheight");
const resultTxtBmi = document.querySelector("#resulttxtbmi");

function calculateBMI() {
  // Parse the weight and height from the input fields
  const weight = parseFloat(inputBmiWeight.value);
  const height = parseFloat(inputBmiHeight.value);

  // Check if the input is valid
  if (isNaN(weight) || isNaN(height) || height === 0) {
    resultTxtBmi.textContent = "Invalid input. Please enter valid values.";
    return;
  }

  // Calculate BMI
  let resultBmi = (weight / (height * height)).toFixed(2);

  // Create a message string
  let message = "";

  // Determine BMI category and build the message
  if (resultBmi <= 18.5) {
    message = "Underweight";
  } else if (resultBmi <= 25) {
    message = "Normal";
  } else if (resultBmi <= 30) {
    message = "Overweight";
  } else {
    message = "Obese";

    // Add humorous console logs and build the message
    if (resultBmi <= 35) {
      message += " (You're in the 'Chubby' zone.)";
      console.log("You're in the 'Chubby' zone.");
    } else if (resultBmi <= 40) {
      message += " (You're in the 'Fluffy' zone.)";
      console.log("You're in the 'Fluffy' zone.");
    } else if (resultBmi <= 45) {
      message += " (You're in the 'Round' zone. Rolling might be easier.)";
      console.log("You're in the 'Round' zone. Rolling might be easier.");
    } else if (resultBmi <= 50) {
      message += " (You're in the 'Rotund' zone. You might need a forklift.)";
      console.log("You're in the 'Rotund' zone. You might need a forklift.");
    } else if (resultBmi <= 55) {
      message += " (You're in the 'Circular' zone. Circles are your new favorite shape.)";
      console.log("You're in the 'Circular' zone. Circles are your new favorite shape.");
    } else if (resultBmi <= 60) {
      message += " (You're in the 'Spherical' zone. Earth might envy your shape.)";
      console.log("You're in the 'Spherical' zone. Earth might envy your shape.");
    } else if (resultBmi <= 65) {
      message += " (You're in the 'Orbital' zone. Ready for takeoff!)";
      console.log("You're in the 'Orbital' zone. Ready for takeoff!");
    } else {
      message += " (You're in the 'Singularity' zone. You've achieved infinite density.)";
      console.log("You're in the 'Singularity' zone. You've achieved infinite density.");
    }
  }

  // Set the message as the text content
  resultTxtBmi.textContent = resultBmi + " BMI = " + message;
}