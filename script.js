// Input fields
const nameInput = document.getElementById("cardholder-name");
const numberInput = document.getElementById("card-number");
const monthInput = document.getElementById("exp-month");
const yearInput = document.getElementById("exp-year");
const cvcInput = document.getElementById("cvc");

// Display elements
const displayName = document.getElementById("display-name");
const displayNumber = document.getElementById("display-number");
const displayExpiry = document.getElementById("display-expiry");
const displayCVC = document.getElementById("display-cvc");

// Form and thank you state
const form = document.getElementById("card-form");
const thankYou = document.getElementById("thank-you");
const continueButton = document.getElementById("continue-button");

// Error message elements
const nameError = document.getElementById("name-error");
const numberError = document.getElementById("number-error");
const dateError = document.getElementById("date-error");
const cvcError = document.getElementById("cvc-error");

// Format card number input live
numberInput.addEventListener("input", () => {
  let value = numberInput.value.replace(/\D/g, ""); // remove non-digits
  value = value.replace(/(.{4})/g, "$1 ").trim(); // add space after every 4 digits
  numberInput.value = value;
  displayNumber.textContent = value || "0000 0000 0000 0000";
});

// Live update previews
nameInput.addEventListener("input", () => {
  displayName.textContent = nameInput.value || "Xeinny Damola";
});
monthInput.addEventListener("input", updateExpiry);
yearInput.addEventListener("input", updateExpiry);
cvcInput.addEventListener("input", () => {
  displayCVC.textContent = cvcInput.value || "000";
});

function updateExpiry() {
  const mm = monthInput.value || "00";
  const yy = yearInput.value || "00";
  displayExpiry.textContent = `${mm}/${yy}`;
}

// Validate input on submit
form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (validateForm()) {
    form.classList.add("hidden");
    thankYou.classList.remove("hidden");
  }
});

// Reset form
continueButton.addEventListener("click", () => {
  form.reset();
  displayName.textContent = "Xeinny Damola";
  displayNumber.textContent = "0000 0000 0000 0000";
  displayExpiry.textContent = "00/00";
  displayCVC.textContent = "000";
  clearErrors();

  thankYou.classList.add("hidden");
  form.classList.remove("hidden");
});

// Validation logic
function validateForm() {
  let isValid = true;
  clearErrors();

  // Regex
  const numberRegex = /^\d{4} \d{4} \d{4} \d{4}$/;
  const nameValid = nameInput.value.trim() !== "";
  const numberValid = numberRegex.test(numberInput.value.trim());
  const monthValid = /^\d{2}$/.test(monthInput.value);
  const yearValid = /^\d{2}$/.test(yearInput.value);
  const cvcValid = /^\d{3}$/.test(cvcInput.value);

  // Name
  if (!nameValid) {
    nameError.textContent = "Can't be blank";
    isValid = false;
  }

  // Number
  if (!numberValid) {
    numberError.textContent = "Wrong format (use 16 digits)";
    isValid = false;
  }

  // Date
  if (!monthValid || !yearValid) {
    dateError.textContent = "Invalid date";
    isValid = false;
  }

  // CVC
  if (!cvcValid) {
    cvcError.textContent = "Invalid CVC";
    isValid = false;
  }

  return isValid;
}

function clearErrors() {
  nameError.textContent = "";
  numberError.textContent = "";
  dateError.textContent = "";
  cvcError.textContent = "";
}