document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("feedback-form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const phone = document.getElementById("phone").value;
        const email = document.getElementById("email").value;
        const satisfaction = document.getElementById("satisfaction").value;
        const feedback = document.getElementById("feedback").value;

        
        console.log("Name: " + name);
        console.log("Phone: " + phone);
        console.log("Email: " + email);
        console.log("Overall Satisfaction: " + satisfaction);
        console.log("Specific Feedback: " + feedback);

        
        alert("Successfully Submitted!");

        
        form.reset();
    });
});
