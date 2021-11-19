var vid,
  playButton,
  pauseButton,
  seekslider,
  curTime,
  durTime,
  forButton,
  reButton,
  intervalRewind;

function initializePlayer() {
  vid = document.getElementById("myVideo");
  playButton = document.getElementById("playBtn");
  pauseButton = document.getElementById("pauseBtn");

  seekslider = document.getElementById("seekSlider");
  curTime = document.getElementById("curTimeText");
  durTime = document.getElementById("durTimeText");

  forButton = document.getElementById("forwardBtn");
  reButton = document.getElementById("rewindBtn");

  playButton.addEventListener("click", play, false);
  pauseButton.addEventListener("click", pause, false);

  seekslider.addEventListener("change", vidSeek, false);
  vid.addEventListener("timeupdate", seekTimeUpdate, false);

  forButton.addEventListener("click", Forward, false);
  reButton.addEventListener("click", rewind, false);
}

window.onload = initializePlayer;

// play function
function play() {
  vid.play();
}
function pause() {
  vid.pause();
}
function vidSeek() {
  var seekTo = vid.duration * (seekslider.value / 100);
  vid.currentTime = seekTo;
}
function seekTimeUpdate() {
  var newTime = vid.currentTime * (100 / vid.duration);
  seekslider.value = newTime;

  var currentMins = Math.floor(vid.currentTime / 60);
  var currentSec = Math.floor(vid.currentTime - currentMins * 60);
  var durationMins = Math.floor(vid.duration / 60);
  var durationSec = Math.floor(vid.duration - durationMins * 60);
  if (currentSec < 10) {
    currentSec = "0" + currentSec;
  }
  if (durationSec < 10) {
    durationSec = "0" + durationSec;
  }
  if (currentMins < 10) {
    currentMins = "0" + currentMins;
  }
  if (durationMins < 10) {
    durationMins = "0" + durationMins;
  }
  curTime.innerHTML = currentMins + ":" + currentSec;
  durTime.innerHTML = durationMins + ":" + durationSec;
}


// forward function
function Forward() {
  vid.currentTime += 3;
}

// rewind function
function rewind() {
  vid.currentTime += -2;
}
