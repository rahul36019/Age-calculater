document.addEventListener("DOMContentLoaded", () => {
  const birthdate = document.getElementById("birthdate");
  const btn = document.querySelector(".btn");
  const ageDisplay = document.getElementById("age");

  btn.addEventListener("click", () => {
    const birthDateValue = new Date(birthdate.value);
    if (!isNaN(birthDateValue)) {
      const today = new Date();
      let years = today.getFullYear() - birthDateValue.getFullYear();
      let months = today.getMonth() - birthDateValue.getMonth();
      let days = today.getDate() - birthDateValue.getDate();

      // Adjust for days in month
      if (days < 0) {
        months--;
        days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
      }

      // Adjust for months in year
      if (months < 0) {
        years--;
        months += 12;
      }

      ageDisplay.textContent = `Your age is ${years} years, ${months} months, and ${days} days.`;
    } else {
      ageDisplay.textContent = "Please enter a valid birthdate.";
    }
  });
});
