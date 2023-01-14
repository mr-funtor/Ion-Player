import create from 'zustand/vanilla'
 
type MediaControlStateType={
    isOpen:boolean,
}

const useMediaControlStore = create<MediaControlStateType>((set) => ({
  isOpen:false
}))

export default useMediaControlStore