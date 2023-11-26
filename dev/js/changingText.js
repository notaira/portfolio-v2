// JavaScript code generated with assistance from ChatGPT
document.addEventListener("DOMContentLoaded", function () {
    // Array of texts to display
    const texts = ["Digital Project Management", "Event Planning", "Graphic Design", "Marketing", "Online Marketing", "Personnel Management", "Project Management", "    Social Media Management", "UI Design", "UX Design", "Web Development", "Web Design"];
  
    // Get the element with the changing text
    const changingTextElement = document.querySelector(".career__content--changingtext");
  
    // Function to change the text every second
    function changeText() {
      let index = 0;
  
      setInterval(function () {
        changingTextElement.textContent = texts[index];
        index = (index + 1) % texts.length;
      }, 1000);
    }
  
    // Call the function to initiate the text change
    changeText();
  });
