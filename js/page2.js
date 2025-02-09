const songs = [
  { title: "Dilaw", artist: "Maki", src: "music/Dilaw.mp3", duration: "3:12", img: "img/Songs Thumbnail/Dilaw.png" },
  { title: "Autumn", artist: "NIKI", src: "music/Autumn.mp3", duration: "3:52", img: "img/Songs Thumbnail/Autumn.png" },
  { title: "Take A Chance With Me", artist: "NIKI", src: "music/Take A Chance With Me.mp3", duration: "5:01", img: "img/Songs Thumbnail/Autumn.png" },
  { title: "About You", artist: "The 1975", src: "music/About You.mp3", duration: "5:26", img: "img/Songs Thumbnail/About You.png" }
];
  
  let currentSongIndex = 0;
  let isPlaying = false;
  const audioPlayer = document.getElementById('audio-player');
  const playPauseButton = document.getElementById('play-pause');
  const progressBar = document.getElementById('progress');
  const timeCounter = document.getElementById('time-counter');
  const bannerImage = document.querySelector('#song-banner img');
  
  function selectSong(index) {
    currentSongIndex = index;
    const song = songs[index];
  
    document.getElementById('song-title').textContent = song.title;
    document.getElementById('song-artist').textContent = `Artist: ${song.artist}`;
    document.getElementById('song-duration').textContent = `Duration: ${song.duration}`;
    bannerImage.src = song.img;
    bannerImage.alt = song.title;
  
    audioPlayer.src = song.src;
    playSong();
  }
  
  
  function playSong() {
    audioPlayer.play();
    isPlaying = true;
    playPauseButton.innerHTML = '<i class="fas fa-pause"></i>';
  }
  
  function pauseSong() {
    audioPlayer.pause();
    isPlaying = false;
    playPauseButton.innerHTML = '<i class="fas fa-play"></i>';
  }
  
  function togglePlayPause() {
    if (!isPlaying && audioPlayer.src === "") {
      // If no song is loaded, start with the first song
      selectSong(0);
    } else {
      isPlaying ? pauseSong() : playSong();
    }
  }
  
  function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    selectSong(currentSongIndex);
  }
  
  function previousSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    selectSong(currentSongIndex);
  }
  
  audioPlayer.addEventListener('timeupdate', updateProgress);
  
  function updateProgress() {
    const { currentTime, duration } = audioPlayer;
    
    if (!isNaN(duration)) {
      const progressPercent = (currentTime / duration) * 100;
      progressBar.style.width = `${progressPercent}%`;
  
      document.getElementById('current-time').textContent = formatTime(currentTime);
      document.getElementById('end-time').textContent = formatTime(duration);
    }
  }
  
  
  function setProgress(event) {
    const width = event.target.clientWidth;
    const clickX = event.offsetX;
    audioPlayer.currentTime = (clickX / width) * audioPlayer.duration;
  }
  
  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  }
  
  audioPlayer.addEventListener('ended', nextSong);

  
