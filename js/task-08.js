const loginForm = document.querySelector(".login-form");
console.dir(loginForm);

loginForm.addEventListener("submit", sendForm);

function sendForm(evt) {
  evt.preventDefault();
  const {
    elements: { email, password },
  } = evt.currentTarget;
  if (email.value === "" || password.value.trim() === "") {
    alert("Please fill in all the fields!");
  } else {
    const user = {
      email: email.value,
      password: password.value,
    };
    console.log(user);
    loginForm.reset();
    loginForm.lastElementChild.disabled = true;
  }
}
