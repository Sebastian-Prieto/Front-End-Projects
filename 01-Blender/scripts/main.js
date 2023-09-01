let blenderState = "off"; // Don't get it
let blender = document.getElementById("blender-object"); // Blender call
let blenderSound = document.getElementById("blender-sound"); // Blender sound call
let switchSound = document.getElementById("switch-sound"); // Switch sound call

function turnOn() {
  if (blenderState === "off") {
    blenderState = "on";
    makeNoise();
    blender.classList.add("active");
    console.log("I'm on!");
  } else {
    blenderState = "off";
    makeNoise();
    blender.classList.remove("active");
    console.log("I'm off!");
  }
}

function makeNoise() {
    if (blenderSound.paused) { 
      switchSound.play();
      blenderSound.play();
    } else {
      switchSound.play();
      blenderSound.pause();
      switchSound.currentTime = 0;
    }
  }
