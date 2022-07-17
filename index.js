window.onload = () => {
    const audio = document.querySelector("audio")
    const seekBar = document.querySelector(".seek-bar")
    const currentSeek = document.querySelector(".current-seek-bar")
    const mouseTime = document.querySelector(".show-time")
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
            let audioCurrent = audio.currentTime
            let percentage = `${audioCurrent * 100 / audioDuration}%`
            currentSeek.style.width = percentage
            currentLabel.innerText = formatTime(audioCurrent)
    }

    function formatTime(time){
        let minutes = Math.floor(time/60)
        let seconds = Math.ceil(time%60)

        return `${minutes.toFixed(0).padStart(2, '0')}:${seconds.toFixed(0).padStart(2, '0')}`
    }

    function addEvents() {
        playButton.addEventListener("click", playPause)
        pauseButton.addEventListener("click", playPause)
        seekBar.addEventListener("mousemove",barOver)
        seekBar.addEventListener("click",barOver)
        seekBar.addEventListener("mouseout",barOut)
    }

    function barOver(e){
        //let actualTime = ((e.clientX - (seekBar.offsetLeft)) * (audioDuration + (seekBar.offsetLeft/2)) / (seekBar.clientWidth + (seekBar.offsetLeft)))
        let actualTime = ((e.clientX - seekBar.offsetLeft) * (audioDuration + seekBar.offsetLeft/2)) / (seekBar.clientWidth + seekBar.offsetLeft)
        mouseTime.classList.remove("hidden")
        mouseTime.style.left = `${e.clientX}px`
        mouseTime.style.top = `${e.clientY-mouseTime.offsetHeight-2}px`
        mouseTime.innerText = formatTime(actualTime>0 ? actualTime : 0)
        if(e.type==="click"){
            audio.currentTime = actualTime
        }

        console.log(e)
    }

    function barOut(){
        mouseTime.classList.add("hidden")
    }

    function playPause() {
        audio.paused ? audio.play() : audio.pause()
        playButton.classList.toggle("hidden")
        pauseButton.classList.toggle("hidden")
    }
}