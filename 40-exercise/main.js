const videoElement = document.querySelector("#video-url");
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const progressContainer = document.querySelector(".progress-bar");
const progress = document.querySelector(".progress");
const currentTimeEl = document.querySelector("#current-time");
const durationEl = document.querySelector("#duration");
const prevBtn = document.querySelector("#prev");
const playBtn = document.querySelector("#play");
const nextBtn = document.querySelector("#next");
const volumeSlider = document.querySelector("#volume");
const speedSelect = document.querySelector("#speed");

let videoIndex = 0;
let speed = 1;
let isPlaying = false;

const Videos = [
  {
    title: "video one",
    author: "author one",
    url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
  },
  {
    title: "video two",
    author: "author two",
    url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
  },
  {
    title: "video three",
    author: "author three",
    url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
  },
  {
    title: "video one",
    author: "author four",
    url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  },
  {
    title: "video five",
    author: "author five",
    url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  },
];

function loadVideo(video) {
  title.textContent = video.title;
  author.textContent = video.author;
  videoElement.src = video.url;
  videoElement.playBackrate = speed;
}
loadVideo(Videos[videoIndex]);

function PlayVideo() {
  playBtn.querySelector("i").classList.remove("fa-play");
  playBtn.querySelector("i").classList.add("fa-pause");
  videoElement.play();
  isPlaying = true;
}

function pauseVideo() {
  playBtn.querySelector("i").classList.remove("fa-pause");
  playBtn.querySelector("i").classList.add("fa-play");
  isPlaying = false;
  videoElement.pause();
}

function nextVideo() {
  pauseVideo();
  setTimeout(() => {
    videoIndex++;
    if (videoIndex > Videos.length - 1) {
      videoIndex = 0;
    }
    loadVideo(Videos[videoIndex]);
    PlayVideo();
  }, 300);
}

function prevVideo() {
  pauseVideo();
  setTimeout(() => {
    videoIndex--;
    if (videoIndex < 0) {
      videoIndex = Videos.length - 1;
    }
    loadVideo(Videos[videoIndex]);
    PlayVideo();
  }, 300);
}
function updatProgress(e) {
  const { currentTime, duration } = e.srcElement;
  if (isNaN(duration)) return;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;

  const currentMinutes = Math.floor(duration / 60);
  let currentSeconds = Math.floor(duration % 60);
  if (currentSeconds < 10) {
    currentSeconds = `0${currentSeconds}`;
  }
  currentTimeEl.textContent = `${currentMinutes}:${currentSeconds}`;

  const durationMintues = Math.floor(currentTime / 60);
  let durationSeconds = Math.floor(currentTime % 60);
  if (durationSeconds < 10) {
    durationSeconds = `0${durationSeconds}`;
  }
  durationEl.textContent = `${durationMintues}:${durationSeconds}`;
}

function setPreogress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = videoElement.duration;
  const newTime = (clickX / width) * duration;
  videoElement.currentTime = newTime;
}

playBtn.addEventListener("click", () => {
  if (isPlaying) {
    pauseVideo();
  } else {
    PlayVideo();
  }
});

nextBtn.addEventListener("click", nextVideo);
prevBtn.addEventListener("click", prevVideo);

videoElement.addEventListener("timeupdate", updatProgress);

volumeSlider.addEventListener("input", (e) => {
  videoElement.volume = e.target.value;
});

speedSelect.addEventListener("change", (e) => {
  speed = parseFloat(e.target.value);
  videoElement.playbackRate = speed;
});

progressContainer.addEventListener("click", setPreogress);

// loading meta data
videoElement.addEventListener("loadedata", updatProgress);
