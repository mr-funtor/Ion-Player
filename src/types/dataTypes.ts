type singleArtist={
    id:string,
    name:string,
}

type singleAlbum={
    id:string,
    name:string,
    artist:string,
    year:string
}

type singleSong={
    id:string,
    name:string,
    artist:string,
    album:string|null,
    source:string,
    year: string
}


export{
    singleArtist,
    singleAlbum,
    singleSong
}