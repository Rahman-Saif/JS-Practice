const play=document.getElementById('play');
const music=document.querySelector('audio');
const img=document.querySelector('img');
const title=document.getElementById('title');
const artist=document.getElementById('artist');
const prev=document.getElementById('prev');
const next=document.getElementById('next');

const songs =[
    {
    name:'music-1',
    title:'tiktok',
    artist:'bollywood'
    },
    {
    name:'music-2',
    title:'youtube',
    artist:'lata '
    },
    {
    name:'music-3',
    title:'desi',
    artist:'russian'
    },
]

let isPlaying=false;

const playSong=()=>{
    isPlaying=true;
    music.play();
}

const pauseSong=()=>{
    isPlaying=false;
    music.pause();
}


play.addEventListener("click",()=>{
    if(isPlaying){
        playSong();
    }else{
        PauseSong()
    }
})


const loadSong=(song)=>{
    title.textContent=song.title;
    artist.textContent=song.title;
    music.src="music/"+song.name+".mp3";
    img.src="images/"+song.name+".jpeg";
}

const toNext=()=>{
    songIndex=(songIndex-1+songs.length)%songs.length;
    loadSong(songs[songIndex]);
    playSong();
}



next.addEventListener("click",toNext);