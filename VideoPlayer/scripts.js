// - Volume slider
// - Speed of play slider

// const app = document.querySelector(".player");
const player = document.querySelector(".viewer");
const progressBar = document.querySelector(".progress__filled")
const playButton = document.querySelector(".toggle");
const volumeSlider = document.querySelector("input[name='volume']");
const speedSlider = document.querySelector("input[name='playbackRate']");
const skippers = document.querySelectorAll("button[data-skip]");

function updateProgress() {
  console.log('progress updated');
  let playPercentage = (player.currentTime * 100) / player.duration;
  progressBar.style.flexBasis = `${playPercentage}%`;
}

function handleSkip() {
  player.currentTime += parseFloat(this.dataset.skip);
}

function handleSpeed() {
  console.log(speedSlider);
  console.dir(speedSlider);
}

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

player.addEventListener("timeupdate", updateProgress);
player.addEventListener("click", playPause);
playButton.addEventListener("click", playPause);
volumeSlider.addEventListener("click", handleSound);
speedSlider.addEventListener("click", handleSpeed);
skippers.forEach((skipper) => skipper.addEventListener("click", handleSkip));
