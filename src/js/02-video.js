import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

    const iframe = document.querySelector('iframe');
    const player = new Player(iframe);

player.on('timeupdate', throttle(
    currentTime => 
    {localStorage.setItem("videoplayer-current-time", JSON.stringify(currentTime)); }, 1000)
    
);
const currentTime = localStorage.getItem('videoplayer-current-time');
const parsedCurrentTime = JSON.parse(currentTime);

player.setCurrentTime(parsedCurrentTime?.seconds ?? 0);