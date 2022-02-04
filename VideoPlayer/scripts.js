const player = document.querySelector(".viewer");
const progress = document.querySelector(".progress");
const progressBar = document.querySelector(".progress__filled");
const playButton = document.querySelector(".toggle");
const sliders = document.querySelectorAll(".player__slider");
const skippers = document.querySelectorAll("button[data-skip]");

function updateProgress() {
  let playPercentage = (player.currentTime * 100) / player.duration;
  progressBar.style.flexBasis = `${playPercentage}%`;
}

function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * player.duration;
  player.currentTime = scrubTime;
}

function handleSliderUpdate() {
  player[this.name] = this.value;
}

function handleSkip() {
  player.currentTime += parseFloat(this.dataset.skip);
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

sliders.forEach((slider) =>
  slider.addEventListener("change", handleSliderUpdate)
);
sliders.forEach((slider) =>
  slider.addEventListener("mousemove", handleSliderUpdate)
);

skippers.forEach((skipper) => skipper.addEventListener("click", handleSkip));

let mousedown = false;
progress.addEventListener("click", scrub);
progress.addEventListener("mousemove", (e) => mousedown && scrub(e)); //only starts to track mouse movement when mousedown is true!
progress.addEventListener("mousedown", () => (mousedown = true));
progress.addEventListener("mouseup", () => (mousedown = false));
