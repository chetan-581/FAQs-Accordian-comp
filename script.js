document.addEventListener('DOMContentLoaded', function () {
  // Get all question boxes and iterate over them
  const questionBoxes = document.querySelectorAll('.questionbox');
  questionBoxes.forEach(function (box) {
    // Add click event listener to each question box
    box.addEventListener('click', function () {
      // Get the corresponding answer and toggle its visibility
      const answer = box.nextElementSibling;
      answer.style.display = answer.style.display === 'none' || answer.style.display === '' ? 'block' : 'none';

      // Toggle the 'open' class on the question box
      box.classList.toggle('open');

      // Toggle the icon source
      const toggleIcon = box.querySelector('#toggle-icon');
      toggleIcon.src = answer.style.display === 'none' ? '/assets/images/icon-plus.svg' : '/assets/images/icon-minus.svg';

      // Close other open accordions
      questionBoxes.forEach(function (otherBox) {
        if (otherBox !== box) {
          const otherAnswer = otherBox.nextElementSibling;
          otherAnswer.style.display = 'none';
          otherBox.classList.remove('open');
          const otherToggleIcon = otherBox.querySelector('#toggle-icon');
          otherToggleIcon.src = '/assets/images/icon-plus.svg';
        }
      });
    });
  });
});


  
  