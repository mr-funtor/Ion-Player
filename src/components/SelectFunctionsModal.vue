<template>
    <ion-modal
    ref="modal"
    :is-open="isOpen"
    :initial-breakpoint="0.2"
    :backdrop-dismiss="false"
    >
        <ion-content class="ion-padding">
            <h5 @click="setQueuingState({isOpen:false})" :style="{display:'flex',justifyContent:'flex-end'}">X</h5>
            <ion-item lines="none" >
                <ion-text>Play Next</ion-text>
            </ion-item>
            <ion-item lines="none" @click="startQueue()">
                <ion-text>Add To Queue</ion-text>
            </ion-item>
            
        </ion-content>

    </ion-modal>
    
</template>

<script lang="ts" setup>
import { IonModal,IonContent,IonItem,IonText,IonBackdrop} from '@ionic/vue';
import { ref } from 'vue';

//utils
import playerControls from '@/utils/playerControls';

//zustand
import selectingFunctionState from '@/composable/selectingFunctionState'

const {QueueTracks}=playerControls()
const {getState:getQueuingState,subscribe:queueSubscribe,setState:setQueuingState} = selectingFunctionState

const isOpen= ref<boolean>(getQueuingState().isOpen)

queueSubscribe(()=>{
    isOpen.value= getQueuingState().isOpen
})

function startQueue(){
    QueueTracks();
    setQueuingState({isOpen:false})
}

</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
}

.songContainer{
    display:flex;
    justify-content:space-between;
    align-items:center;
    width: 100%;
    min-height: 60px;
    margin-bottom: 10px;
    padding-right: 5px;
}

.currentSong{
    background-color: rgba(56, 129, 232, 0.1);
}

.list-case{
    display: flex;
    align-items: center;
}

ion-backdrop {
    opacity: 0.9;
    background: red;
  }

</style>