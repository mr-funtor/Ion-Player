import create from 'zustand/vanilla'
 
type ModalState={
    isOpen:boolean,
}

const useModalStore = create<ModalState>(() => ({
  isOpen:false
}))

export default useModalStore