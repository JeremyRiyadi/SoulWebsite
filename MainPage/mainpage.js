// DOM Elements
const playPauseBtn = document.getElementById("playPauseBtn")
const playPauseIcon = document.getElementById("playPauseIcon")
const timelineBar = document.querySelector(".timeline-bar")
const timelineProgress = document.querySelector(".timeline-progress")
const volumeSlider = document.querySelector(".volume-slider")
const volumeLevel = document.querySelector(".volume-level")
const currentTimeEl = document.querySelector(".current-time")
const totalTimeEl = document.querySelector(".total-time")
const playlistItems = document.querySelectorAll(".playlist-item")
const emojiButtons = document.querySelectorAll(".emoji-btn")
const mediaInfo = document.querySelector(".media-info")
const albumArt = document.querySelector(".album-art")
const mediaTitle = document.querySelector(".media-text h3")
const mediaArtist = document.querySelector(".media-text p")

// Podcast data
const podcasts = [
  {
    id :1,
    title: "Handle Stress",
    artist: "Dr. Sarah Johnson",
    image: "assets/sidebar/playlist1.png",
    duration: 731, 
    currentTime: 221, 
  },
  {
    id :2,
    title: "Mindful Talks",
    artist: "Alex Chen",
    image: "assets/sidebar/playlist2.png",
    duration: 845,
    currentTime: 0,
  },
  {
    id:3,
    title: "Mental Reset",
    artist: "Emma Williams",
    image: "assets/sidebar/playlist3.png",
    duration: 612, 
    currentTime: 0,
  },
  {id :4,
    title: "Healing in Progress",
    artist: "Michael Brown",
    image: "assets/sidebar/playlist4.png",
    duration: 925, 
    currentTime: 0,
  },
  {
    id :5,
    title: "Breathe & Believe",
    artist: "Sophia Garcia",
    image: "assets/sidebar/playlist5.png",
    duration: 548, 
    currentTime: 0,
  },
  {
    id :6,
    title: "Ethereal Echo",
    artist: "James Wilson",
    image: "assets/sidebar/playlist6.png",
    duration: 782, 
    currentTime: 0,
  },
  {
    id :7,
    title: "Safe Space Stories",
    artist: "Olivia Martinez",
    image: "assets/sidebar/playlist7.png",
    duration: 695, 
    currentTime: 0,
  },
  {
    id : 8,
    title: "Growth & Gratitude",
    artist: "Daniel Taylor",
    image: "assets/sidebar/playlist8.png",
    duration: 863, 
    currentTime: 0,
  },
]

document.querySelector('.sidebar').addEventListener("click", () => {
  window.location.href = "../SoulcastPlaylist/SoulcastPlaylist.html"
})

document.querySelector('.topics-button').addEventListener("click", () => {
  window.location.href = "../WhisperingSoul/whisperingSoull.html"
})

document.querySelector('.icon1').addEventListener("click", () => {
  window.location.href = "../SoulSupportMain/SoulSupport-Main.html"
})

document.querySelector('.icon2').addEventListener("click", () => {
  window.location.href = "../SoulcastStore-Main/index.html"
})

document.querySelector('.reminders').addEventListener("click", () => {
  window.location.href = "../SereneRemindersMain/index.html"
})

document.querySelector('.analytics').addEventListener("click", () => {
  window.location.href = "../SoulAnalytics-Main/index.html"
})

// Audio Player State
let isPlaying = true
let currentPodcastIndex = 0
let currentTime = podcasts[currentPodcastIndex].currentTime
let totalTime = podcasts[currentPodcastIndex].duration
let volume = 0.7

updateTimeDisplay()
updateMediaInfo(currentPodcastIndex)


timelineBar.addEventListener("click", (e) => {
  const rect = timelineBar.getBoundingClientRect()
  const clickPosition = (e.clientX - rect.left) / rect.width
  currentTime = Math.floor(clickPosition * totalTime)
  timelineProgress.style.width = `${clickPosition * 100}%`
  updateTimeDisplay()
  console.log(`Seeking to ${formatTime(currentTime)}`)
})


volumeSlider.addEventListener("click", (e) => {
  const rect = volumeSlider.getBoundingClientRect()
  const clickPosition = (e.clientX - rect.left) / rect.width
  volume = clickPosition
  volumeLevel.style.width = `${clickPosition * 100}%`

  console.log(`Volume set to ${Math.floor(volume * 100)}%`)
})

playlistItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    podcasts[currentPodcastIndex].currentTime = currentTime
    playlistItems.forEach((i) => i.classList.remove("active"))
    item.classList.add("active")

    currentPodcastIndex = index

    updateMediaInfo(currentPodcastIndex)
    currentTime = podcasts[currentPodcastIndex].currentTime
    totalTime = podcasts[currentPodcastIndex].duration
    const progress = (currentTime / totalTime) * 100
    timelineProgress.style.width = `${progress}%`
    updateTimeDisplay()

    isPlaying = true
    playPauseIcon.textContent = "||"

    console.log(`Selected podcast: ${podcasts[currentPodcastIndex].title}`)
  })
})


const playingStates = {}

playlistItems.forEach((item, index) => {
  const podcastId = index + 1 

  item.addEventListener("click", (e) => {
    togglePlayPause(item)
  })
  playingStates[podcastId] = index === currentPodcastIndex
})

playlistItems.forEach((item, index) => {
  const podcastId = Number(item.dataset.podcastId)
  playingStates[podcastId] = false 

  item.addEventListener("click", () => {
    handlePlaylistClick(item, index)
  })
})

function handlePlaylistClick(item, index) {
  const clickedPodcastId = Number(item.dataset.podcastId)

  if (playingStates[clickedPodcastId]) {
    playingStates[clickedPodcastId] = false
    isPlaying = false
    playPauseIcon.textContent = "▶"
    updatePlayPauseIcons()
    console.log("Paused")
    return
  }

  playlistItems.forEach((el) => {
    const pid = Number(el.dataset.podcastId)
    playingStates[pid] = false
    el.classList.remove("active")
  })

  playingStates[clickedPodcastId] = true
  currentPodcastIndex = index
  isPlaying = true
  currentTime = podcasts[index].currentTime
  totalTime = podcasts[index].duration
  updateTimeDisplay()
  updateMediaInfo(index)
  playPauseIcon.textContent = "||"

  item.classList.add("active")
  updatePlayPauseIcons()

  console.log(`Now playing: ${podcasts[index].title}`)
}

function updatePlayPauseIcons() {
  playlistItems.forEach((item) => {
    const podcastId = Number(item.dataset.podcastId)
    const playIcon = item.querySelector(".play-icon")
    const pauseIcon = item.querySelector(".pause-icon")

    if (playingStates[podcastId]) {
      playIcon.classList.add("hidden")
      pauseIcon.classList.remove("hidden")
    } else {
      playIcon.classList.remove("hidden")
      pauseIcon.classList.add("hidden")
    }
  })
}



playPauseBtn.addEventListener("click", () => {
  isPlaying = !isPlaying
  playPauseIcon.textContent = isPlaying ? "||" : "▶"
  const currentId = podcasts[currentPodcastIndex].id
  playingStates[currentId] = isPlaying
  updatePlayPauseIcons()
  console.log(isPlaying ? "Playing audio" : "Paused audio")
})

emojiButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    emojiButtons.forEach((b) => b.classList.remove("active"))
    btn.classList.add("active")
    console.log(`Mood selected: ${btn.querySelector("img").alt}`)
  })
})

function updateTimeDisplay() {
  currentTimeEl.textContent = formatTime(currentTime)
  totalTimeEl.textContent = formatTime(totalTime)
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60)
  const remainingSeconds = seconds % 60
  return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`
}

function updateMediaInfo(index) {
  const podcast = podcasts[index]
  albumArt.src = podcast.image
  mediaTitle.textContent = podcast.title
  mediaArtist.textContent = podcast.artist
}

function simulateAudioProgress() {
  if (isPlaying && currentTime < totalTime) {
    currentTime++
    const progress = (currentTime / totalTime) * 100
    timelineProgress.style.width = `${progress}%`
    updateTimeDisplay()
  }
}
setInterval(() => {
  if (isPlaying) {
    simulateAudioProgress()
  }
}, 1000)

const seeMoreBtn = document.querySelector(".topics-button")
seeMoreBtn.addEventListener("click", () => {
  alert("Loading more topics...")

})

const prevBtn = document.querySelector(".prev-btn")
const nextBtn = document.querySelector(".next-btn")

prevBtn.addEventListener("click", () => {
  podcasts[currentPodcastIndex].currentTime = currentTime
  currentPodcastIndex = (currentPodcastIndex - 1 + podcasts.length) % podcasts.length
  playlistItems.forEach((item, index) => {
    item.classList.toggle("active", index === currentPodcastIndex)
  })

  updateMediaInfo(currentPodcastIndex)

  currentTime = podcasts[currentPodcastIndex].currentTime
  totalTime = podcasts[currentPodcastIndex].duration
  const progress = (currentTime / totalTime) * 100
  timelineProgress.style.width = `${progress}%`
  updateTimeDisplay()

  console.log(`Previous podcast: ${podcasts[currentPodcastIndex].title}`)
})

nextBtn.addEventListener("click", () => {
  podcasts[currentPodcastIndex].currentTime = currentTime
  currentPodcastIndex = (currentPodcastIndex + 1) % podcasts.length
  playlistItems.forEach((item, index) => {
    item.classList.toggle("active", index === currentPodcastIndex)
  })

  updateMediaInfo(currentPodcastIndex)

  currentTime = podcasts[currentPodcastIndex].currentTime
  totalTime = podcasts[currentPodcastIndex].duration
  const progress = (currentTime / totalTime) * 100
  timelineProgress.style.width = `${progress}%`
  updateTimeDisplay()

  console.log(`Next podcast: ${podcasts[currentPodcastIndex].title}`)
})

const buttons = document.querySelectorAll("button")
buttons.forEach((button) => {
  if (button.querySelector("img")) {
    const imgAlt = button.querySelector("img").alt
    button.title = imgAlt
  }
})

document.querySelector('.media-player').addEventListener("click", () => {
  window.location.href = "../SoulCastMain/soulcastMain.html"
})