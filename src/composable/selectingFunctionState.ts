import create from 'zustand/vanilla'
import {singleSongType,singleAlbumType} from '@/types/dataTypes'

type SelctingFuntionStateType={
    isOpen:boolean,
    toBeQueuedItem: singleSongType | singleAlbumType | null,
    structure:string
}

const selectingFunctionState = create<SelctingFuntionStateType>((set) => ({
  isOpen:false,
  toBeQueuedItem:null,
  structure:''
}))

export default selectingFunctionState