import create from 'zustand/vanilla';
import { singleSongType } from '@/types/dataTypes';


type playerState={
    controlOut:boolean,
    isPlaying:boolean,
    isLooping:boolean,
    currentSongIndex:number,
    currentlyPlaying:singleSongType,
    queuedSongs:singleSongType[]
}

const playerStore=create<playerState>(()=>({
    controlOut:false,
    isPlaying:false,
    isLooping:false,
    currentSongIndex:0,
    currentlyPlaying:{
        id:"",
        name:"",
        artist:"",
        album:"",
        source:"",
        year: "",
        image:"",
        trackNumber:0
    },
    queuedSongs:[]
}))

export default playerStore