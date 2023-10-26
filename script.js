document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("feedback-form");
    const successMessage = document.getElementById("success-message");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const phone = document.getElementById("phone").value;
        const email = document.getElementById("email").value;
        const satisfaction = document.getElementById("satisfaction").value;
        const feedback = document.getElementById("feedback").value;

        // You can handle the form data here, e.g., send it to a server
        console.log("Name: " + name);
        console.log("Phone: " + phone);
        console.log("Email: " + email);
        console.log("Overall Satisfaction: " + satisfaction);
        console.log("Specific Feedback: " + feedback);

        // Show the success message
        successMessage.style.display = "block";

        // Clear the form fields
        form.reset();

        // Hide the success message after a few seconds (optional)
        setTimeout(function () {
            successMessage.style.display = "none";
        }, 3000); // Hides the message after 3 seconds (adjust as needed)
    });
});
