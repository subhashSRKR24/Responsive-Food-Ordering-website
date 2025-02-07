const vid = document.querySelector(".cooking-vid");
const playPauseEffect = document.querySelector(".play-pause-effect");

// Function to toggle play and pause
function playPauseVideo() {
  if (!vid.paused) {
    vid.pause();
    playPauseEffect.classList.add("show"); // Show the play icon
  } else {
    vid.play();
    playPauseEffect.classList.remove("show"); // Hide the play icon
  }
}

// Automatically show play icon when video is paused manually
vid.addEventListener("pause", () => {
  playPauseEffect.classList.add("show");
});

// Automatically hide play icon when video starts playing
vid.addEventListener("play", () => {
  playPauseEffect.classList.remove("show");
});

// Attach click listeners to video and play button
vid.addEventListener("click", playPauseVideo);
playPauseEffect.addEventListener("click", playPauseVideo);

// Initialize: Show or hide the play/pause button based on the current state of the video
if (vid.paused) {
  playPauseEffect.classList.add("show"); // Show the play button if video is paused
} else {
  playPauseEffect.classList.remove("show"); // Hide the play button if video is playing
}