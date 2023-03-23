console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('yyhs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let yyhs = [
    {songName: "Warriyo - Mortals", filePath: "yyhs/1.mp3", coverPath: "yCovers/1.jpg"},
    {songName: "Mohtarma", filePath: "yyhs/2.mp3", coverPath: "yCovers/2.jpg"},
    {songName: "Rajasthan", filePath: "yyhs/3.mp3", coverPath: "yCovers/3.jpg"},
    {songName: "Aankhon Aankhon", filePath: "yyhs/4.mp3", coverPath: "yCovers/4.jpg"},
    {songName: "Raat Jashn Di", filePath: "yyhs/5.mp3", coverPath: "yCovers/5.jpg"},
    {songName: "Gal Ban Gyi", filePath: "yyhs/6.mp3", coverPath: "yCovers/6.jpg"},
    {songName: "Sakhiyaan", filePath: "yyhs/2.mp3", coverPath: "yCovers/7.jpg"},
    {songName: "Malang Sajna", filePath: "yyhs/2.mp3", coverPath: "yCovers/8.jpg"},
    {songName: "Akhar", filePath: "yyhs/2.mp3", coverPath: "yCovers/9.jpg"},
    {songName: "Call Aundi", filePath: "yyhs/10.mp3", coverPath: "yCovers/10.jpg"},
]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = yyhs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = yyhs[i].songName; 
})
 

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
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

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `yyhs/${songIndex+1}.mp3`;
        masterSongName.innerText = yyhs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `yyhs/${songIndex+1}.mp3`;
    masterSongName.innerText = yyhs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `yyhs/${songIndex+1}.mp3`;
    masterSongName.innerText = yyhs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})