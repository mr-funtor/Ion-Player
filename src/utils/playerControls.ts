import playerStore from "@/composable/playerStatus";

const {getState,setState} = playerStore


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
        setState({currentSongIndex:song.trackNumber-1}) //tracks start from number one so we have to substract
        // return console.log(songsPicked,song)
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

    

    return{
        playMe,
        pauseSong,
        playSound,
        playNextSong,
        playPreviousSong,
    }

}

export default playerControls