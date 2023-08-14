document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("#registrationForm form");
    const messageDiv = document.querySelector("#message");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Here you can perform any additional processing or validation before showing the message

        // Display the message div
        messageDiv.classList.remove("hidden");

        // You can also clear the form fields if needed
        form.reset();
    });
});