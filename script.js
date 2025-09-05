// Mood-based color palettes
const moodPalettes = {
  happy: ["#FFD93D", "#FF6F61", "#FF9A8B", "#FDCB82", "#FFB6C1"],
  calm: ["#A7C7E7", "#B8F2E6", "#CDB4DB", "#E0BBE4", "#D8E2DC"],
  energetic: ["#FF2E63", "#08D9D6", "#FF8C00", "#FF4B5C", "#F72585"],
  romantic: ["#FF4D6D", "#FBB1BD", "#FFD6E0", "#FF9AA2", "#E75480"],
  focus: ["#1B1B2F", "#162447", "#1F4068", "#1B98E0", "#2E9CCA"]
};

// Generate palette function
function generatePalette() {
  const mood = document.getElementById("mood").value;
  const colors = moodPalettes[mood];
  const paletteContainer = document.getElementById("palette");

  // Clear previous colors
  paletteContainer.innerHTML = "";

  // Create color boxes
  colors.forEach(color => {
    const box = document.createElement("div");
    box.classList.add("color-box");
    box.style.background = color;
    box.textContent = color;

    // Copy color on click
    box.addEventListener("click", () => {
      navigator.clipboard.writeText(color);
      alert(`Copied: ${color}`);
    });

    paletteContainer.appendChild(box);
  });
}

// Button event
document.getElementById("generate").addEventListener("click", generatePalette);

// Generate default palette on load
window.onload = generatePalette;
