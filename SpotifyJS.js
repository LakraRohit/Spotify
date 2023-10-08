// MASTER PLAY ********************************

const music = new Audio('audio/1.mp3');
// music.play();

const songs =[
    {
        id:1,
        songName:'Numb<br> <div class="subtitle">Linkin Park</div>',
        poster:"img/1.jpg"
    },
    {
        id:2,
        songName:'On My Way<br> <div class="subtitle">Alan Walker</div>',
        poster:"img/2.jpg"
    },
    {
        id:3,
        songName:'Baby<br> <div class="subtitle">Justin Bieber</div>',
        poster:"img/3.jpg"
    },
    {
        id:4,
        songName:'Money<br> <div class="subtitle">Lisa</div>',
        poster:"img/4.jpg"
    },
    {
        id:5,
        songName:'Naatu Naatu<br> <div class="subtitle">RRR</div>',
        poster:"img/5.jpg"
    },
    {
        id:6,
        songName:'Until I Found U<br> <div class="subtitle">Stephen Sanchez</div>',
        poster:"img/6.jpg"
    },
    {
        id:7,
        songName:'Summer of 69<br> <div class="subtitle">Bryan Adams</div>',
        poster:"img/7.jpg"
    },
    {
        id:8,
        songName:'Tu Mera Koi Na<br> <div class="subtitle">Arijit Singh</div>',
        poster:"img/8.jpg"
    },
    {
        id:9,
        songName:'Sunflower-Spider Man<br> <div class="subtitle">Post Malone</div>',
        poster:"img/9.jpg"
    },
    {
        id:10,
        songName:'Numb<br> <div class="subtitle">Linkin Park</div>',
        poster:"img/10.jpg"
    },
    {
        id:11,
        songName:'Middle of the Night<br> <div class="subtitle">Elley Duhe</div>',
        poster:"img/11.jpg"
    },
    {
        id:12,
        songName:'On My Way<br> <div class="subtitle">Alan Walker</div>',
        poster:"img/12.jpg"
    },
    {
        id:13,
        songName:'Sunflower-Spider Man<br> <div class="subtitle">Post Malone</div>',
        poster:"img/13.jpg"
    },
    {
        id:14,
        songName:'In The End<br> <div class="subtitle">Linkin Park</div>',
        poster:"img/14.jpg"
    },
    {
        id:15,
        songName:'Ddu-Du Ddu-Du<br> <div class="subtitle">BLACKPINK</div>',
        poster:"img/15.jpg"
    },
    {
        id:16,
        songName:'Kala Chashma <br> <div class="subtitle">Badsha </div>',
        poster:"img/16.jpg"
    },
    {
        id:17,
        songName:'Unstoppable<br> <div class="subtitle">Sia</div>',
        poster:"img/17.jpg"
    },
    {
        id:18,
        songName:'Dynamite<br> <div class="subtitle">BTS</div>',
        poster:"img/18.jpg"
    },
    {
        id:19,
        songName:'Mood <br> <div class="subtitle">Iann dior</div>',
        poster:"img/19.jpg"
    }

]





    Array.from(document.getElementsByClassName('songIte')).forEach((e, i) =>{
        e.getElementsByTagName('img')[0].src = songs[i].poster;
        e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
    });



               
                                                          
let masterPlay = document.getElementById('masterPlay');   
let waves = document.querySelectorAll('.wave1'); // Select all .wave1 elements               
                                                          
masterPlay.addEventListener('click',()=>{                 
    if(music.paused || music.currentTime <= 0){           
        music.play();                                     
        waves.forEach((wave, index) => {
             wave.style.animation = `wave 0.5s linear infinite ${index * 0.4}s`;
             masterPlay.classList.remove('bi-play-circle-fill');
             masterPlay.classList.add('bi-pause-circle-fill');
        });
} else{
    
    music.pause();
             waves.forEach(wave => {
                 wave.style.animation = 'unset';
                 masterPlay.classList.add('bi-play-circle-fill');
                 masterPlay.classList.remove('bi-pause-circle-fill');
             });
         
 
     }                                                    
});  





// for song munu side : to highlight which ever song is playing in the master play

const makeAllBackground = () =>{
    Array.from(document.getElementsByClassName('songItem')).forEach((el) =>{
        el.style.background ='rgb(105, 105, 105, 0)';
    })
}

// Doing for play Pause icons on every song 

const makeAllplay = () =>{
    Array.from(document.getElementsByClassName('playListPlay')).forEach((el) =>{
        el.classList.add('bi-play-circle-fill');
        el.classList.remove('bi-pause-circle-fill');
        
    })
}





// for eash song to play in master play with poster and title 

let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
let title = document.getElementById('title');

Array.from(document.getElementsByClassName('playListPlay')).forEach((e) => {
    e.addEventListener('click', (el) => {
        index = el.target.id;
        music.src = `audio/${index}.mp3`;
        poster_master_play.src = `img/${index}.jpg` || `img/${index}.png` || `img/${index}.gif` || `img/${index}.jpeg` || `img/${index}.avif`;
        music.play();
        masterPlay.classList.remove('bi-play-circle-fill');
        masterPlay.classList.add('bi-pause-circle-fill');

        let songTitle = songs.find((elss) => {
            return elss.id == index;
        });

        if (songTitle) {
            title.innerHTML = songTitle.songName;
            waves.forEach((wave, index) => {
                wave.style.animation = `wave 0.5s linear infinite ${index * 0.4}s`;
                masterPlay.classList.remove('bi-play-circle-fill');
                masterPlay.classList.add('bi-pause-circle-fill');
           });

        } else {
            title.innerHTML = songs; // Set a default title if no matching song is found
            music.pause();
             waves.forEach(wave => {
                 wave.style.animation = 'unset';
                 masterPlay.classList.add('bi-play-circle-fill');
                 masterPlay.classList.remove('bi-pause-circle-fill');
             });
             
        }

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index-1].style.background = 'rgb(105, 105, 105, 1)';
        makeAllplay();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        

    });
});




// music time bar 

let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate',()  =>{
    let music_curr = music.currentTime;
    let music_dur = music.duration;

    let min1 = Math.floor(music_dur / 60);
    let sec1 = Math.floor(music_dur % 60);


    if(sec1 < 10){
        sec1 =`0${sec1}`;
    }

    currentEnd.innerText = `${min1}:${sec1}`;



    let min2 = Math.floor(music_curr / 60);
    let sec2 = Math.floor(music_curr % 60);

    if(sec2 < 10){
        sec2 =`0${sec2}`;
    }

    currentStart.innerText = `${min2}:${sec2}`;


    let progressBar = parseInt((music_curr / music_dur)* 100);
    seek.value = progressBar;
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;


});


seek.addEventListener('change', () => {
    music.currentTime = seek.value*music.duration / 100;

});

// Volume bar 

let vol_icon =document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_bar =document.getElementsByClassName('vol_bar')[0];
let vol_dot =document.getElementById('vol_dot');

vol.addEventListener('change', () =>{
    if(vol.value == 0){
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-off-fill');
    }
    if(vol.value > 0){
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');

    }if(vol.value >= 50){
        vol_icon.classList.add('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');

    }
    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left =`${vol_a}%`;
    music.volume = vol_a /100;

});

// next and back buttons

let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click', () =>{
    index -= 1;
    if(index < 1){
        index = Array.from(document.getElementsByClassName('songItem')).length;
    }

    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `img/${index}.jpg` || `img/${index}.png` || `img/${index}.gif` || `img/${index}.jpeg` || `img/${index}.avif`;
    music.play();
    masterPlay.classList.remove('bi-play-circle-fill');
    masterPlay.classList.add('bi-pause-circle-fill');

    let songTitle = songs.find((elss) => {
        return elss.id == index;
    });

    if (songTitle) {
        title.innerHTML = songTitle.songName;
        waves.forEach((wave, index) => {
            wave.style.animation = `wave 0.5s linear infinite ${index * 0.4}s`;
            masterPlay.classList.remove('bi-play-circle-fill');
            masterPlay.classList.add('bi-pause-circle-fill');
       });

    } else {
        title.innerHTML = songs; // Set a default title if no matching song is found
        music.pause();
         waves.forEach(wave => {
             wave.style.animation = 'unset';
             masterPlay.classList.add('bi-play-circle-fill');
             masterPlay.classList.remove('bi-pause-circle-fill');
         });
         
    }

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index-1].style.background = 'rgb(105, 105, 105, 1)';
    makeAllplay();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    

})

next.addEventListener('click',() =>{
    index ++;
    if(index > Array.from(document.getElementsByClassName('songItem')).length){
        index = 1;
    }

    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `img/${index}.jpg` || `img/${index}.png` || `img/${index}.gif` || `img/${index}.jpeg` || `img/${index}.avif`;
    music.play();
    masterPlay.classList.remove('bi-play-circle-fill');
    masterPlay.classList.add('bi-pause-circle-fill');

    let songTitle = songs.find((elss) => {
        return elss.id == index;
    });

    if (songTitle) {
        title.innerHTML = songTitle.songName;
        waves.forEach((wave, index) => {
            wave.style.animation = `wave 0.5s linear infinite ${index * 0.4}s`;
            masterPlay.classList.remove('bi-play-circle-fill');
            masterPlay.classList.add('bi-pause-circle-fill');
       });

    } else {
        title.innerHTML = songs; // Set a default title if no matching song is found
        music.pause();
         waves.forEach(wave => {
             wave.style.animation = 'unset';
             masterPlay.classList.add('bi-play-circle-fill');
             masterPlay.classList.remove('bi-pause-circle-fill');
         });
         
    }

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index-1].style.background = 'rgb(105, 105, 105, 1)';
    makeAllplay();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');


})



//  Arrow keys************************ 


let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];

pop_song_right.addEventListener('click', () => {
    pop_song.scrollLeft +=360;
})

pop_song_left.addEventListener('click', () => {
    pop_song.scrollLeft -=360;
})


let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let item = document.getElementsByClassName('item')[0];

pop_art_left.addEventListener('click', () => {
    item.scrollLeft -=360;
})

pop_art_right.addEventListener('click', () => {
    item.scrollLeft +=360;
})





