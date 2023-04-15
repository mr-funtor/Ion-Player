//zustand
import playerStore from "@/composable/playerStatus";
import selectingFunctionState from '@/composable/selectingFunctionState'

const {getState,setState} = playerStore;
const {getState:getQueuingState,subscribe:queueSubscribe,setState:setQueuingState} = selectingFunctionState


//utility
import {findArtistName,findSong,findSongsInAlbum,findAlbum} from '@/utils/findingResources'

//types
import {singleSongType} from '@/types/dataTypes'

//data
import {songs} from '@/data/data'

const player:HTMLAudioElement= new Audio()


const playerControls=():any=>{

    function playMe(event:Event,song:singleSongType,index:number){
        const target= event.currentTarget as  HTMLDivElement
        console.log(target.dataset.structure)

        switch (target.dataset.structure) {
            case "allSingleTrack":{
                playAllSongs(song.id)
            }
            break;
            case "albumTrack":{
                playAlbumSongs(song)
            }
            break;
            case "queuedSingleTrack":{
                playSongInQueuedList(song,index)
            }
            break;
            case "singleSong":{
                playSingleSong(song)
            }
            break;
        
            default:
                break;
        }

    }

    function playAllSongs(songId:string){
        setState({queuedSongs:songs})//queue all songs in state
        const clickedSongIndex= songs.findIndex((song)=> song.id === songId)
        setState({currentSongIndex:clickedSongIndex})

        setCurrentlyPlaying(songId)
    }

    function playAlbumSongs(song:singleSongType){
        const songsPicked= findSongsInAlbum(song.album as string)
        setState({queuedSongs:songsPicked}) //puts all the songs in the album into state
        const clickedSongIndex= songsPicked.findIndex((item)=> item.id === song.id)
        setState({currentSongIndex:clickedSongIndex})
       
        setCurrentlyPlaying(song.id)
    }

    function playSongInQueuedList(song:singleSongType,index:number){
        setState({currentSongIndex:index})//changes to the index of the clicked song

        setCurrentlyPlaying(song.id)
    }

    function playSingleSong(song:singleSongType){
        setState({queuedSongs:[song]})//queue the song in state
        setState({currentSongIndex:0})
        setCurrentlyPlaying(song.id)
    }

    //this places a song into current playing
    function setCurrentlyPlaying(songId:string){
        const currentSong=findSong(songId)
        const nowPlaying={...currentSong,artist:findArtistName(currentSong?.artist)}
        setState({currentlyPlaying:nowPlaying})
        player.src=getState().currentlyPlaying.source;

        playSound()
    }

    function playSound(){
        setState({controlOut:true,isPlaying:true})//this brings out the controls and makes the play button 'pause' icon
        player.play()
        
        player.addEventListener('ended',()=>{
            const presentIndex= getState().currentSongIndex
            const presentQueuedSongs= getState().queuedSongs

            if(presentIndex >= presentQueuedSongs.length-1){
                setState({isPlaying:false})//removes the controls and makes the play button 'play' icon
            }else{
                playNextSong()
            }
        })

        //NB:don't forget to make play button a spinner when loading
    }

    function pauseSong(){
        player.pause()
        setState({isPlaying:false})
    }

    function playNextSong(){
        const presentIndex= getState().currentSongIndex
        const presentQueuedSongs= getState().queuedSongs

        if((presentIndex+1) >= presentQueuedSongs.length){
            setState({currentSongIndex:0})//takes the next track to the first one
        }else{
            setState({currentSongIndex:presentIndex+1})
        }

        const nextSongId= presentQueuedSongs[getState().currentSongIndex].id  
        setCurrentlyPlaying(nextSongId)

    }

    function playPreviousSong(){
        const presentIndex= getState().currentSongIndex
        const presentQueuedSongs= getState().queuedSongs

        if((presentIndex-1) < 0){
            setState({currentSongIndex:presentQueuedSongs.length-1})//takes it the last track
        }else{
            setState({currentSongIndex:presentIndex-1})
        }

        const nextSongId= presentQueuedSongs[getState().currentSongIndex].id  
        setCurrentlyPlaying(nextSongId)
    }

    function QueueTracks(){
        const structure= getQueuingState().structure;
        const itemToBeQueued=getQueuingState().toBeQueuedItem;

        switch (structure) {
            case "allSingleTrack":{
                // playAllSongs(song.id)
            }
            break;
            case "albumTrack":{
                // playAlbumSongs(song)
            }
            break;
            case "queuedSingleTrack":{
                // playSongInQueuedList(song,0)
            }
            break;
            case "singleSong":{
                setState({queuedSongs:[...getState().queuedSongs,itemToBeQueued as singleSongType]})
                    
                
            }
            break;
        
            default:
                break;
        }
        
        //if the queue list is empty play the track
        if(getState().queuedSongs.length <= 1){
            setState({currentSongIndex:0})
            setCurrentlyPlaying(getState().queuedSongs[0].id)
        }
    }
    

    return{
        playMe,
        pauseSong,
        playSound,
        playNextSong,
        playPreviousSong,
        QueueTracks
    }

}

export default playerControls