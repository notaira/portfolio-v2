let currentQuestionIndex = 0;
let assessmentStarted = false;

function startAssessment() {
  const questionContainer = document.getElementById('question-container');
  const button = document.getElementById('action-button');

  if (!assessmentStarted) {
    // Start the assessment
    assessmentStarted = true;
    button.textContent = "Next Question";
  }

  // Display the next question
  if (currentQuestionIndex < designerSoftSkillQuestions.length) {
    const question = designerSoftSkillQuestions[currentQuestionIndex];
    questionContainer.textContent = question;
    currentQuestionIndex++;
  } else {
    // If all questions are answered, display a message and reset
    questionContainer.textContent = "Assessment complete. Thank you!";
    button.textContent = "Start Again?";
    currentQuestionIndex = 0;
    assessmentStarted = false;
  }
}
