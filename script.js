console.log("Welcome to Spotify, have a great time!");

// Initialize the Variabkles
let songIndex = 0;
let audioElement = new Audio('Bandits.mp4');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let playingGif = document.getElementById('playingGif')

let songs = [
    {songName: "Without Me", filePath: "WithoutMe.mp3", coverPath: "withoutme.png"},
    {songName: "Bandits (Remix)", filePath: "Bandits.mp3", coverPath: "banditrmx.png"},
    {songName: "Welcome to The Internet", filePath: "WelcomeToTheInternet.mp3", coverPath: "welcometotheinternet.png"}
]
// audioElement.play();

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        playingGif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        playingGif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})
