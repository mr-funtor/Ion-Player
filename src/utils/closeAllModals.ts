//zustand
import selectingFunctionState from '@/composable/selectingFunctionState'
// import useMediaControlStore from '@/composable/mediaControlState'


const {setState:setQueuingState} = selectingFunctionState
// const {setState:setControlState} = useMediaControlStore

function closeAllModals(){
    setQueuingState({isOpen:false})
    // setControlState({isOpen:false})
}

export default closeAllModals
