// Inisialisasi Vanta.js Globe
VANTA.GLOBE({
    el: "#vantajs-bg",
    mouseControls: true,
    touchControls: true,
    gyroControls: true,
    color: 0x0077ff,
    backgroundColor: 0x0d0d0d
  });
  
  // Efek Mengetik di Headline
  const typedText = document.getElementById('typed-text');
  const textArray = [
    "Hi, I design intelligent systems to solve real-world problems.",
    "Transforming raw data into automated solutions.",
    "Passionate about building AI models."
  ];
  let textIndex = 0;
  let charIndex = 0;
  
  function typeText() {
    if (charIndex < textArray[textIndex].length) {
      typedText.textContent += textArray[textIndex].charAt(charIndex++);
      setTimeout(typeText, 100);
    } else {
      setTimeout(eraseText, 2000);
    }
  }
  
  function eraseText() {
    if (charIndex > 0) {
      typedText.textContent = textArray[textIndex].substring(0, --charIndex);
      setTimeout(eraseText, 50);
    } else {
      textIndex = (textIndex + 1) % textArray.length;
      setTimeout(typeText, 1000);
    }
  }
  
  // Efek Mengetik Deskripsi Project
  const projectDesc = document.getElementById('projects-desc');
  const projectMessages = [
    "Here are some of the projects I've worked on.",
    "Click a project for more details!",
    "Reach out if you're curious about my work."
  ];
  let projectIndex = 0, projectCharIndex = 0, erasing = false;
  
  function animateProjectText() {
    const currentText = projectMessages[projectIndex];
    if (!erasing && projectCharIndex < currentText.length) {
      projectDesc.textContent += currentText.charAt(projectCharIndex++);
      setTimeout(animateProjectText, 100);
    } else if (erasing && projectCharIndex > 0) {
      projectDesc.textContent = currentText.substring(0, --projectCharIndex);
      setTimeout(animateProjectText, 50);
    } else {
      erasing = !erasing;
      if (!erasing) projectIndex = (projectIndex + 1) % projectMessages.length;
      setTimeout(animateProjectText, 2000);
    }
  }
  
  // Overlay untuk Deskripsi Proyek
  function showDescription(title, description) {
    document.getElementById('overlay').style.display = 'flex';
    document.getElementById('description').innerHTML = `<h2>${title}</h2><p>${description}</p>`;
  }
  
  function hideDescription() {
    document.getElementById('overlay').style.display = 'none';
  }
  
  // Jalankan Efek setelah DOM siap
  document.addEventListener('DOMContentLoaded', () => {
    typeText();
    animateProjectText();
  });
  