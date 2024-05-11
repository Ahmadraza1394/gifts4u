document.addEventListener('DOMContentLoaded', function () {
  // Function to handle sign up
  const handleSignup = (event) => {
    event.preventDefault();
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    // Save the user data in localStorage
    localStorage.setItem('userData', JSON.stringify({ name, email, password }));

    // Redirect to home page
    window.location.href = 'login.html';
  };

  // Function to handle login
  const handleLogin = (event) => {
    event.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    // Get user data from localStorage
    const userData = JSON.parse(localStorage.getItem('userData'));

    // Check if entered credentials match those stored in localStorage
    if (userData && userData.email === email && userData.password === password) {
      window.location.href = 'index.html'; // Redirect to home page if credentials are correct
    } else {
      alert('Incorrect email or password.'); // Show error if credentials are incorrect
    }
  };

  // Attach event listeners to the forms
  const signupForm = document.querySelector('.signup-form form');
  const loginForm = document.querySelector('.login-form form');

  signupForm.addEventListener('submit', handleSignup);
  loginForm.addEventListener('submit', handleLogin);

  const forgotPasswordLink = document.querySelector('.login-form a[href="#"]');
forgotPasswordLink.addEventListener('click', function (e) {
  e.preventDefault(); // Prevent default link behavior

  // Prompt user to enter email for password reset
  const email = prompt('Please enter your email address to receive a password reset link:');

  // Check if the email is provided
  if (email && email.trim() !== '') {
    // Perform password reset logic (e.g., send reset link to the provided email)
    // Replace this with your actual password reset implementation

    // Display success message
    alert(`A password reset link has been sent to ${email}. Please check your email.`);
  } else {
    // Display error message if no email is provided
    alert('Invalid email address.');
  }
});

});