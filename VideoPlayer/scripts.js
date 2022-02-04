// Build functions
// - Volume slider
// - Speed of play slider
// - Skip forward/backward buttons

const player = document.querySelector(".viewer");
const playButton = document.querySelector(".toggle");
const volumeSlider = document.querySelector("input[name='volume']");
const speedSlider = document.querySelector("input[name='playbackRate']");

function handleSound() {
  console.log(volumeSlider);
  console.dir(volumeSlider);
}

function playPause() {
  if (player.paused === true) {
    player.play();
    playButton.innerHTML = "||";
  } else {
    player.pause();
    playButton.innerHTML = "►";
  }
}

player.addEventListener("click", playPause);
playButton.addEventListener("click", playPause);
volumeSlider.addEventListener("click", handleSound);
