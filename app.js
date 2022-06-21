const form = document.querySelector(".trial-form");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const email = document.getElementById("email");
const password = document.getElementById("password");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateForm();
});

function validateForm() {
  const firstName = fname.value.trim();
  const lastName = lname.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  let pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (firstName === "") {
    errorFunc(fname, "First Name cannot be empty");
  } else {
    successFunc(fname);
  }
  if (lastName === "") {
    errorFunc(lname, "Last Name cannot be empty");
  } else {
    successFunc(lname);
  }
  if (emailValue === "") {
    errorFunc(email, "Email cannot be empty");
  } else if (!emailValue.match(pattern)) {
    errorFunc(email, "Looks like this is not an email");
  } else {
    successFunc(email);
  }
  if (passwordValue === "") {
    errorFunc(password, "Password cannot be empty");
  } else {
    successFunc(password);
  }
}

function errorFunc(input, message) {
  const formControl = input.parentElement;
  const errorText = formControl.querySelector("small");
  errorText.innerHTML = message;
  formControl.className = "error";
  errorText.className = "error-message";

  if (input !== email) {
    input.value = "";
  } else {
    email.style.color = `hsl(0, 100%, 74%) `;
  }
}

function successFunc(input) {
  const formControl = input.parentElement;
  const errorText = formControl.querySelector("small");
  errorText.innerHTML = "";
  formControl.className = "success";
}

