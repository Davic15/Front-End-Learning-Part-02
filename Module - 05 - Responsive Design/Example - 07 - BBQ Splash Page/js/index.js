let emailCollectorForm = document.getElementById("Email-Collector");
emailCollectorForm.addEventListener("submit", event => {
    event.preventDefault();
    let ourFormData = new FormData(event.target);
    let userFirstName = ourFormData.get("firstName");
    let updateHtmlContent = `
        <h2>Congratulation, ${userFirstName} </h2>
        <p>
            You're on your way to becoming a BBQ Master!
        </p>
        
        <p class="fine-print">We'll never share your information without your permission</p>
    `;
    let ourMainContent = document.getElementById("Main-Content");
    ourMainContent.innerHTML = updateHtmlContent;
});
