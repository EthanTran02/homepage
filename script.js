const projects = document.querySelectorAll(".project");
projects.forEach((project) => {
  // Generate random R, G, B values (0-255)
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const alpha = 0.5; // Set desired opacity (0.0 to 1.0)

  // Construct the rgba color string
  const randomRgbaColor = `rgba(${r}, ${g}, ${b}, ${alpha})`;

  project.style.backgroundColor = randomRgbaColor; // Apply RGBA color
});
