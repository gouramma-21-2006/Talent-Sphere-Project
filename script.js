```javascript
document.addEventListener("DOMContentLoaded", function () {

    // Google Forms registration link
    const googleFormURL =
        "https://docs.google.com/forms/d/e/1FAIpQLScszu-m2jscgRsvIoCPYhv0oBSUx8SCtShcMeWEJEdob-aF3Q/viewform";

    // Update the Register Now button
    const registerButton = document.querySelector(".register-button");

    if (registerButton) {
        registerButton.href = googleFormURL;
        registerButton.target = "_blank";
        registerButton.rel = "noopener noreferrer";
    }

    // Add hover cursor to talent category cards
    const talentCards = document.querySelectorAll(".category-card");

    talentCards.forEach(function (card) {
        card.addEventListener("mouseenter", function () {
            card.style.cursor = "pointer";
        });
    });

    // Smooth scrolling for navigation links
    const navigationLinks = document.querySelectorAll('nav a[href^="#"]');

    navigationLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            const targetID = link.getAttribute("href");
            const targetSection = document.querySelector(targetID);

            if (targetSection) {
                event.preventDefault();

                targetSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

                history.replaceState(null, "", targetID);
            }
        });
    });

    // Update footer year automatically
    const footerText = document.querySelector("footer p");

    if (footerText) {
        footerText.innerHTML =
            "&copy; " + new Date().getFullYear() +
            " TalentSphere. Discover the Talent Within You.";
    }

    // Welcome messages in the browser console
    console.log(
        "%cWelcome to TalentSphere!",
        "color: #5eead4; font-size: 22px; font-weight: bold;"
    );

    console.log(
        "%cDiscover the Talent Within You.",
        "color: #a78bfa; font-size: 14px;"
    );

});
```