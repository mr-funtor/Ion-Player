import {singleArtistType,singleAlbumType,singleSongType} from '@/types/dataTypes'

const artists: singleArtistType[]=[
    {
        id:'34df34',
        name:'Janelle Monae'
    },
    {
        id:'56df56',
        name:'Charles M'
    },
    {
        id:'97df97',
        name:'The Saturdays'
    },
]

const albums: singleAlbumType[]=[
    {
        id:'sd34sd',
        name:'The ArchAndroid',
        artist:'34df34',
        year:'2001',
        albumArt:''
    },
    {
        id:'fg34fg',
        name:'555',
        artist:'56df56',
        year:'2019',
        albumArt:''
    },
    {
        id:'hh34fg',
        name:'Living For The Weekend',
        artist:'97df97',
        year:'2013',
        albumArt:''
    },
    
]

import Days from '@/assets/30Days.mp3'
import Tight from '@/assets/Tightrope.mp3'
import Cold from '@/assets/Cold.mp3'

const songs: singleSongType[]=[
    {
        id:'555gg666',
        name:'Tightrope',
        artist:'34df34',
        album:'sd34sd',
        source:Tight,
        year:'2001',
        image:'',
        trackNumber:7,
        lyrics:'',
    },
    {
        id:'555gg664',
        name:'Cold War',
        artist:'34df34',
        album:'sd34sd',
        source:Cold,
        year:'2001',
        image:'',
        trackNumber:6,
        lyrics:'',
    },
    {
        id:'888gg666',
        name:'30 Days',
        artist:'97df97',
        album:'hh34fg',
        source:Days,
        year:'2013',
        image:'',
        trackNumber:6,
        lyrics:'',
    },
]

export{
    artists,
    albums,
    songs
}