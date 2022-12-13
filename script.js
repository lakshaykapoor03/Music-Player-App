console.log("hey there spotify clone");

const gif = document.getElementById("gif");
const masterPlay = document.getElementsByClassName("master-play");
const prevBtn = document.getElementById("previous");
const musicLine = document.getElementsByClassName("music-line");
let songName=document.getElementsByClassName("song-name")
const songImage= document.getElementsByClassName("song-img")
const miniPlayBtn=document.getElementsByClassName("miniplay-btn")
const smallSongName= document.getElementsByClassName("small-song-name")
console.log(miniPlayBtn);
const nextBtn=document.getElementById("next")
console.log(nextBtn);
console.log(miniPlayBtn);
console.log(songName);
console.dir(prevBtn);

let audio = new Audio("./songs/1.mp3");

let songs=[ {songName: "Warriyo - Mortals [NCS Release]", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
{songName: "Cielo - Huma-Huma", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
{songName: "DEAF KEV - Invincible [NCS Release]-320k", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
{songName: "Different Heaven & EH!DE - My Heart [NCS Release]", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
{songName: "Janji-Heroes-Tonight-feat-Johnning-NCS-Release", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
{songName: "Rabba - Salam-e-Ishq", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
{songName: "Sakhiyaan - Salam-e-Ishq", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
{songName: "Bhula Dena - Salam-e-Ishq", filePath: "songs/8.mp3", coverPath: "covers/8.jpg"},
{songName: "Tumhari Kasam - Salam-e-Ishq", filePath: "songs/9.mp3", coverPath: "covers/9.jpg"},
{songName: "Na Jaana - Salam-e-Ishq", filePath: "songs/10.mp3", coverPath: "covers/10.jpg"},
]

const playAudio = () => {
  if (audio.paused) {
    audio.play();
    masterPlay[0].classList.remove("fa-circle-play");
    masterPlay[0].classList.add("fa-circle-pause");
    gif.style.opacity = 1;
  } else {
    audio.pause();
    masterPlay[0].classList.add("fa-circle-play");
    masterPlay[0].classList.remove("fa-circle-pause");
    gif.style.opacity = 0;
  }

};

masterPlay[0].addEventListener("click", () => {
  playAudio();
  smallSongName[0].innerHTML=songs[0].songName

});

audio.addEventListener("timeupdate", () => {
  progress = (audio.currentTime / audio.duration) * 100;
  musicLine[0].value = progress;

});

musicLine[0].addEventListener("change", () => {
  audio.currentTime = (musicLine[0].value * audio.duration) / 100;
});

const makeAllPlays=()=>{
    miniPlayBtn.forEach((elem,idx)=>{
        miniPlayBtn[idx].classList.remove('fa-circle-pause')
        miniPlayBtn[idx].classList.add('fa-circle-play')
    })
}

songs.forEach((elem,idx)=>{
songName[idx].innerText=songs[idx].songName
songImage[idx].src=songs[idx].coverPath


miniPlayBtn[idx].addEventListener("click",()=> {
    console.log("object");
    gif.style.opacity = 1;
    miniPlayBtn[idx].classList.remove("fa-circle-play")
    miniPlayBtn[idx].classList.add("fa-circle-pause")
    // makeAllPlays()
    smallSongName[0].innerHTML=songs[idx].songName
    audio.src=`songs/${idx+1}.mp3`
audio.play()
masterPlay[0].classList.add("fa-circle-pause");
masterPlay[0].classList.remove("fa-circle-play");
})

nextBtn.addEventListener("click", ()=>{
    console.log("object");
   if(idx>9){
       idx=0
   }
   else{
       idx+=1
   }
   
   audio.src=`songs/${idx+1}.mp3`
   audio.currentTime=0;
   audio.play()
   masterPlay[0].classList.remove("fa-circle-play");
   masterPlay[0].classList.add("fa-circle-pause");
})

}
)

// nextBtn.addEventListener("click", (elem,idx)=>{
//      console.log("object");
//     if(idx>9){
//         idx=0
//     }
//     else{
//         idx+=1
//     }
    
//     audio.src=`songs/${idx+1}.mp3`
//     audio.currentTime=0;
//     audio.play()
//     masterPlay[0].classList.remove("fa-circle-play");
//     masterPlay[0].classList.add("fa-circle-pause");
// })

prevBtn.addEventListener("click", ()=>{
    console.log("yayy");

})






