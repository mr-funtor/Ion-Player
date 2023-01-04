import create from 'zustand/vanilla';
import { singleSong } from '@/types/dataTypes';


import lala from '@/assets/one.mp3'
import lala2 from '@/assets/slow.mp3'


type currentlyPlayingType={
    id:string,
    title:string,
    artist:string,
    year:string,
    source:string
}

type playerState={
    controlOut:boolean,
    isPlaying:boolean,
    isLooping:boolean,
    currentlyPlaying:singleSong,
    queuedSong:singleSong[]
}

const playerStore=create<playerState>((set)=>({
    controlOut:false,
    isPlaying:false,
    isLooping:false,
    currentlyPlaying:{
        id:"",
        name:"",
        artist:"",
        album:"",
        source:"",
        year: ""
    },
    queuedSong:[]
}))

export default playerStore