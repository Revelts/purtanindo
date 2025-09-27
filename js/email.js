emailjs.init("_-JL8QuvvYmyGCP9r");
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Collect form data
    const formData = {
        from_name: this.name.value,
        phone_number: this.phone.value,
        from_email: this.email.value,
        message: this.message.value
    };

    // Send email using EmailJS
    emailjs.send("service_mb270rv", "template_3bvd27e", formData)
        .then(() => {
            alert("Thanks! We will contact you soon.");
            this.reset(); // Clear the form after submission
        })
        .catch((error) => {
            alert("Error sending message! Please try again.");
            console.error("EmailJS Error:", error);
        });
});