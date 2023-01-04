import playerStore from "@/composable/playerStatus";

const {getState,setState,subscribe} = playerStore

//database
import { songs,artists } from '@/data/data';

const player:HTMLAudioElement= new Audio()

import lala from '@/assets/one.mp3'
import lala2 from '@/assets/slow.mp3'

const dummyData=[
    {
        id:"903847jhg",
        title:"Jupiter Arising",
        artist:"Jon Ape",
        year:"2019",
        source:lala
    },
    {
        id:"lalu",
        title:"Jupiter Arising",
        artist:"Jon Ape",
        year:"2019",
        source:lala2
    }
]

const playerControls=():any=>{

    function playMe(songId:string){
        // return console.log(songId)
        // if(songId !== undefined){
        //     const songIndex:number=dummyData.findIndex((song)=>song.id===songId)
        //     console.log(dummyData[songIndex])
        //     setState({currentlyPlaying:dummyData[songIndex]})
        //     player.src=getState().currentlyPlaying.source;

        // }

        type singleSong={
            id:string,
            name:string,
            artist:string,
            album:string|null,
            source:string,
            year: string
        }

        const currentSong=findSong(songId)
        const nowPlaying={...currentSong,artist:findArtist(currentSong?.artist!!)}
        // const nowPlaying={
        //     id:currentSong?.id,
        //     name:currentSong?.name,
        //     artist:findArtist(currentSong?.artist!!),
        //     album:currentSong?.album,
        //     source:currentSong?.source,
        //     year: currentSong?.year
        // }
        // const currentArtist=findArtist(currentSong?.artist)

        setState({currentlyPlaying:nowPlaying as singleSong})
        player.src=getState().currentlyPlaying.source;
        
        // console.log(currentSong,getState().currentlyPlaying)
        playSound()
    }

    function playSound(){
        setState({controlOut:true,isPlaying:true})//this brings out the controls and makes the play button pause
        player.play()
    }

    function pauseSong(){
        player.pause()
        setState({isPlaying:false})
    }

    function findSong(id:string){
        const song= songs.find((song)=>song.id===id)
        return song
    }

    function findArtist(id:string):string{
        const aritst= artists.find((item)=>item.id===id)
        return aritst?.name as string 
     }

    return{
        playMe,
        pauseSong,
        playSound
    }

}

export default playerControls