document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("sellerForm");
    const submitButton = form.querySelector("button[type='submit']");
    const messageDiv = document.createElement("div");
    messageDiv.textContent = "Data has been submitted.";
    messageDiv.style.display = "none";
    form.appendChild(messageDiv);

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Here you can perform any additional processing or validation before showing the message

        // Display the message div
        messageDiv.style.display = "block";

        // You can also clear the form fields if needed
        form.reset();
    });
});
