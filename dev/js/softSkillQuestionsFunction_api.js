let currentQuestionIndex = 0;
let assessmentStarted = false;

function startAssessment() {
  const questionContainer = document.querySelector('.question-container');
  const buttons = document.querySelectorAll('.action-button');

  if (!assessmentStarted) {
    // Start the assessment
    assessmentStarted = true;
    buttons.forEach(button => {
      button.textContent = "Next Question";
    });
  }

  // Display the next question
  if (currentQuestionIndex < designerSoftSkillQuestions.length) {
    const question = designerSoftSkillQuestions[currentQuestionIndex];
    questionContainer.textContent = question;
    currentQuestionIndex++;
  } else {
    // If all questions are answered, display a message and reset
    const thankYouMessage = "Thank you for participating! I hope you now know more about yourself.";
    const styledThankYouMessage = `<span style="color: #FF19A4;">${thankYouMessage}</span>`;
    
    questionContainer.innerHTML = styledThankYouMessage;
    buttons.forEach(button => {
      button.textContent = "Start Again?";
    });
    currentQuestionIndex = 0;
    assessmentStarted = false;
  }
}
