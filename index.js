window.onload = () => {
    const audio = document.querySelector("audio")
    const currentSeek = document.querySelector(".current-seek-bar")
    const playButton = document.querySelector(".play")
    const pauseButton = document.querySelector(".pause")
    const durationLabel = document.querySelector(".duration")
    const currentLabel = document.querySelector(".current")
    const audioDuration = audio.duration

    addEvents()
    loadAudioInformation()

    setInterval(updateAudioStatus, 1000)

    function loadAudioInformation(){
        

        durationLabel.innerText = formatTime(audioDuration)
    }

    function updateAudioStatus() {
        if (!audio.paused) {
            let audioCurrent = audio.currentTime
            let percentage = `${audioCurrent / audioDuration * 100}%`
            currentSeek.style.width = percentage

        }
    }

    function formatTime(time){
        let minutes = time/60
        let seconds = time%60

        return `${minutes.toFixed(0).padStart(2, '0')}:${seconds.toFixed(0).padStart(2, '0')}`
    }

    function addEvents() {
        playButton.addEventListener("click", playPause)
        pauseButton.addEventListener("click", playPause)
    }

    function playPause() {
        audio.paused ? audio.play() : audio.pause()
        playButton.classList.toggle("hidden")
        pauseButton.classList.toggle("hidden")
    }
}