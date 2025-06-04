document.getElementById("registerForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const repeat = document.getElementById("repeat").value;

  if (password !== repeat) {
    alert("Passwords do not match!");
    return;
  }

  alert(`Thank you for registering, ${name}!`);
});
