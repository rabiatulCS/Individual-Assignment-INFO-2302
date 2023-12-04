// Show thank you message and hide the form on submit
function showThankYou1() {
    document.getElementById('salaryForm1').style.display = 'none';
    document.getElementById('salaryForm2').style.display = 'none';
    document.getElementById('button_form').style.display = 'none';
    document.getElementById('thankYouMessage').style.display = 'block';
    return false;
  }

  function showThankYou2() {
    document.getElementById('salaryForm1').style.display = 'none';
    document.getElementById('salaryForm2').style.display = 'none';
    document.getElementById('button_form').style.display = 'none';
    document.getElementById('thankYouMessage').style.display = 'block';
    return false;
  }

  //scroll to the form 1
  function scrollToForm1(){
    document.getElementById('salaryForm1').scrollIntoView({behavior: 'smooth'});
  }

  //scroll to the form 2
  function scrollToForm2(){
    document.getElementById('salaryForm2').scrollIntoView({behavior: 'smooth'});
  }

  // Toggle Dark Mode
  function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    document.querySelectorAll('header, section, footer').forEach(element => {
      element.classList.toggle('dark-mode');
    });
  }