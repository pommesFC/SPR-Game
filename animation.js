document.addEventListener("DOMContentLoaded", function() {
    // Fade in and type out each introduction
    fadeInAndType("story-intro", "intro1", 4000);
    setTimeout(() => {
      fadeInAndType("fighter-intro", "intro2", 3000);
    }, 8000);
    setTimeout(() => {
      fadeInAndType("Ai-intro", "intro3", 2500);
    }, 13000);
    setTimeout(() => {
      fadeInAndType("fighter-spirit", "intro4", 3500);
    }, 17000);
  });

  function fadeInAndType(containerId, textId, duration) {
    const container = document.getElementById(containerId);
    const text = document.getElementById(textId);

    setTimeout(() => {
      container.classList.add("fade-in");
      typeOutText(text, duration);
    }, duration);
  }

  function typeOutText(element, duration) {
    const textContent = element.textContent;
    element.textContent = "";

    let i = 0;
    const typeEffect = setInterval(() => {
      if (i < textContent.length) {
        element.textContent += textContent.charAt(i);
        i++;
      } else {
        clearInterval(typeEffect);
      }
    }, duration / textContent.length);
  }