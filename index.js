window.onload = () =>{
    const audio = document.querySelector("audio")
    const playButton = document.querySelector(".play")
    const pauseButton = document.querySelector(".pause")

    playButton.addEventListener("click", playPause)
    pauseButton.addEventListener("click", playPause)

    function playPause(){
        audio.paused ? audio.play() : audio.pause()
        playButton.classList.toggle("hidden")
        pauseButton.classList.toggle("hidden")
    }
}