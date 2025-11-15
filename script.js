
const modeBtn = document.getElementById("modeToggle");
modeBtn.addEventListener("click", function() {
  document.body.classList.toggle("dark-mode");
});


let count = 0;
const counterValue = document.getElementById("counterValue");
document.getElementById("increaseBtn").addEventListener("click", function() {
  count++;
  counterValue.textContent = count;
});
document.getElementById("resetBtn").addEventListener("click", function() {
  count = 0;
  counterValue.textContent = count;
});


const faqButtons = document.querySelectorAll(".faq-toggle");
faqButtons.forEach(button => {
  button.addEventListener("click", function() {
    const content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
});


const form = document.getElementById("signupForm");

form.addEventListener("submit", function(e) {
  e.preventDefault(); // prevent form submission

  // Clear previous errors
  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("passwordError").textContent = "";

  let isValid = true;

  // Name validation
  const name = document.getElementById("name").value;
  if (name.trim() === "") {
    document.getElementById("nameError").textContent = "Name is required.";
    isValid = false;
  }

  // Email validation
  const email = document.getElementById("email").value;
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    document.getElementById("emailError").textContent = "Invalid email format.";
    isValid = false;
  }

  // Password validation
  const password = document.getElementById("password").value;
  if (password.length < 6) {
    document.getElementById("passwordError").textContent = "Password must be at least 6 characters.";
    isValid = false;
  }

  if (isValid) {
    alert("Form submitted successfully!");
    form.reset();
  }
});
