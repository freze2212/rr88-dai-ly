function initVideoPlayer() {
  const videoPlaceholder = document.getElementById("videoPlaceholder");
  const videoPlayer = document.getElementById("videoPlayer");

  if (videoPlaceholder && videoPlayer) {
    videoPlaceholder.addEventListener("click", function () {
      videoPlaceholder.style.display = "none";
      videoPlayer.style.display = "block";
      videoPlayer.play().catch(function (error) {
        console.log("Video play failed:", error);
        videoPlayer.style.display = "none";
        videoPlaceholder.style.display = "block";
      });
    });

    videoPlayer.addEventListener("ended", function () {});
  }
}

document.addEventListener("DOMContentLoaded", function () {
  initVideoPlayer();
});

window.addEventListener("load", function () {
  initVideoPlayer();
});
