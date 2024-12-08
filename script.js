// script.js

document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Get input values
  var userId = document.getElementById('userId').value;
  var password = document.getElementById('password').value;
  var pin = document.getElementById('pin').value;

  // Validate input values
  if (userId === '123456' && password === 'Amadeus1' && pin === '1993') {
    // Redirect to welcome.html
    window.location.href = 'welcome.html';
  } else {
    // Alert user about incorrect credentials
    alert('Credentials are not correct. Please try again.');
  }
});
