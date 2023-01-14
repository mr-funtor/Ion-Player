//database
import { songs,artists,albums } from '@/data/data';

//types
import {singleSongType} from '@/types/dataTypes'

function findSong(id:string):singleSongType{
    const song= songs.find((song)=> song.id === id)
    return song as singleSongType
}

function findArtistName(id:string):string{
    const aritst= artists.find((item)=> item.id === id)
    return aritst?.name as string 
}

function findArtistAlbums(id:string){
    const artistAlbums= albums.filter((album)=> album.artist === id)
    return artistAlbums
}

function findAlbum(id:string){
    const album = albums.find((album)=>album.id===id)
    return album
}

function findSongsInAlbum(id:string){
    const pickedSongs = songs.filter((song)=>{
        if(song.album === id){
            return song
        }
    }).sort((a,b)=> a.trackNumber - b.trackNumber) ;
    return pickedSongs
}



export{
    findSong,
    findArtistName,
    findArtistAlbums,
    findAlbum,
    findSongsInAlbum
}