document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const subject = document.getElementById("subject");
  const message = document.getElementById("message");
  const success = document.getElementById("success");

  let valid = true;

  document.querySelectorAll("small").forEach(s => s.textContent = "");

  if (!name.value.trim()) {
    document.getElementById("error-name").textContent = "Name is required.";
    valid = false;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email.value)) {
    document.getElementById("error-email").textContent = "Enter a valid email.";
    valid = false;
  }

  if (!subject.value.trim()) {
    document.getElementById("error-subject").textContent = "Subject is required.";
    valid = false;
  }

  if (message.value.trim().length < 10) {
    document.getElementById("error-message").textContent = "Message must be at least 10 characters.";
    valid = false;
  }

  if (valid) {
    success.hidden = false;
    e.target.reset();
  } else {
    success.hidden = true;
  }
});
