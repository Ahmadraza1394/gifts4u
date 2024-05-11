document.addEventListener('DOMContentLoaded', function () {
    var form = document.querySelector('form');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevents the default form submission

        var formData = {
            'firstName': document.getElementById('first-name').value,
            'lastName': document.getElementById('last-name').value,
            'gender': document.getElementById('gender').value,
            'mobile': document.getElementById('mobile').value,
            'dob': document.getElementById('dob').value,
            'email': document.getElementById('email').value,
            'language': document.getElementById('language').value,
            'message': document.getElementById('message').value
        };

        // Make a POST request to the server
        fetch('http://localhost:3000/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then(response => response.json())
            .then(data => {
                // Display thank you message
                var thankYouMessage = `Thanks for filling the form, ${formData.firstName}! We will contact you on this email: ${formData.email}`;
                alert(thankYouMessage);

                // Optionally, you can clear the form fields
                form.reset();
            })
            .catch(error => {
                console.error('Error submitting form:', error);
            });
    });
});
