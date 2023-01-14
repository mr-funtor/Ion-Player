type singleArtistType={
    id:string,
    name:string,
}

type singleAlbumType={
    id:string,
    name:string,
    artist:string,
    year:string,
    albumArt:string
}

type singleSongType={
    id:string,
    name:string,
    artist:string,
    album:string|null,
    source:string,
    year: string,
    image:string,
    trackNumber:number
}


export{
    singleArtistType,
    singleAlbumType,
    singleSongType
}