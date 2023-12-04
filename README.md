# Individual-Assignment-INFO-2302

 DESCRIPTION TO MY JAVASCRIPT INTERACTION THAT I HAVE CREATED FOR MY WEBSITES:

1. Form Submission and Thank You Message:

Two functions, showThankYou1() and showThankYou2(), are triggered when the corresponding forms (salaryForm1 and salaryForm2) are submitted. The primary purpose is to handle form submission gracefully.
Upon form submission, these functions:
-Hide both forms (salaryForm1 and salaryForm2) using document.getElementById('salaryForm1').style.display = 'none'; and similar statements for the other elements.
-Hide the button div (button_form) to prevent further form submissions.
-Display a thank-you message (thankYouMessage) using document.getElementById('thankYouMessage').style.display = 'block';.
These functions return false to prevent the default form submission behavior, ensuring the page doesn't reload.

2. Smooth Scrolling to Forms:

Two functions, scrollToForm1() and scrollToForm2(), enable smooth scrolling to the corresponding forms when the user clicks on the buttons inside the button_form div.
These functions use scrollIntoView({ behavior: 'smooth' }) to smoothly scroll to the specified form.

3. Dark Mode Toggle:

The toggleDarkMode() function allows users to switch between light and dark modes.
It toggles the dark-mode class on the body, header, section, and footer elements. This class likely has associated CSS styles that define the appearance in dark mode.
This interaction is beneficial for users who prefer different color schemes or need reduced eye strain in low-light conditions.

REFERENCES:

RM1 Campaign – IIUM Endowment Fund. (n.d.). Retrieved December 4, 2023, from https://division.iium.edu.my/ief/rm1-campaign/

W3Schools.(n.d.).How TO - Toggle Dark Mode.W3Schools.Retrieved from https://www.w3schools.com/howto/howto_js_toggle_dark_mode.asp
