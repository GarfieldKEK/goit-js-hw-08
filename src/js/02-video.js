import Player from '@vimeo/player';
import throttle from "lodash.throttle";;
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const setLocalStorage = throttle(function(currentTime) {
   
    const stringSecodns =JSON.stringify(currentTime.seconds)
 localStorage.setItem("videoplayer-current-time",stringSecodns)
 }, 1000 );
player.on('timeupdate', setLocalStorage )

const memoryTime = localStorage.getItem("videoplayer-current-time")
const parsedTime = JSON.parse(memoryTime)
if (parsedTime !== null){
    player.setCurrentTime(parsedTime)
}