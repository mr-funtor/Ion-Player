import create from 'zustand/vanilla'
import { ref,Ref } from 'vue'
 
type ModalState={
    isOpen:boolean,
}

const useModalStore = create<ModalState>((set) => ({
  isOpen:false
}))

export default useModalStore