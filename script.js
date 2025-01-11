console.log("welcome to spotify")

let songIndex = 0;
let audioElement = new Audio('song/2.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName')
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    { songname: "Randal- Waharan (DJ Orcun)", filepath: "song/1.mp3", coverpath: "covers/1.webp" },
    { songname: "4G ka Jamana (Haryana-Hood)", filepath: "song/2.mp3", coverpath: "covers/2.webp" },
    { songname: "Backbone (Hrdy Sidhu)", filepath: "song/3.mp3", coverpath: "covers/3.jpg" },
    { songname: "California_Love_Song-_Lofi_Mix", filepath: "song/4.mp3", coverpath: "covers/4.jpg" },
    { songname: "Dilbar_-__slowed_Reverb__song", filepath: "song/5.mp3", coverpath: "covers/5.png" },
    { songname: "KAKA_New_Mitti_De_Tibbe", filepath: "song/6.mp3", coverpath: "covers/6.jpg" },
    { songname: "Laad_Piya_Ke_Slowed_Riverb", filepath: "song/7.mp3", coverpath: "covers/7.webp" },
    { songname: "Na_Na_Na_Na_[Slowed___Reverb]", filepath: "song/8.mp3", coverpath: "covers/8.jpg" },
    { songname: "Samandar__lyrics_", filepath: "song/9.mp3", coverpath: "covers/9.webp" },
    { songname: "aaj_milan_ki_Raat", filepath: "song/10.mp3", coverpath: "covers/10.webp" }
]

songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverpath;
    element.getElementsByClassName("songNamee")[0].innerText = songs[i].songname;
});



masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})

audioElement.addEventListener('timeupdate', () => {
    console.log('timeupdate');
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    console.log(progress)
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = (myProgressBar.value * audioElement.duration) / 100;
})

const makeAllplays = () => {
    Array.from(document.getElementsByClassName('songitemPlay')).forEach((element) => {
        element.classList.remove('fa-circle-pause')
        element.classList.add('fa-circle-play')
    })
}

Array.from(document.getElementsByClassName('songitemPlay')).forEach((element) => {
    element.addEventListener('click', (e => {
        makeAllplays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        masterSongName.innerText = songs[songIndex].songname;
        audioElement.src = `song/${songIndex + 1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    }))
})

document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 9) {
        songIndex = 0;
    } else {
        songIndex += 1
    }
    audioElement.src = `song/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songname;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
})

document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0;
    } else {
        songIndex -= 1
    }
    audioElement.src = `song/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songname;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
})
