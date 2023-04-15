<template>
<div v-show="controlOut" class="container" @click="OpenMediaControlModal($event)">
    <div>
        <h6>{{ presentSong.name }}</h6>
        <p :style="{color:'grey'}">{{ presentSong.artist }}</p>
    </div>
    <div class="controls">
        <ion-icon :icon="playBack" @click="playPreviousSong()"></ion-icon>
        <ion-icon :icon="pause" @click="pauseSong()" v-if="isPlaying"></ion-icon>
        <ion-icon :icon="play" @click="playSound()" v-else></ion-icon>
        <ion-icon :icon="playForward" @click="playNextSong()" ></ion-icon>
    </div>
</div>
</template>

<script lang="ts" setup>
import { IonPage,IonFooter,IonIcon } from '@ionic/vue';
import { playBack,playForward,play,pause } from 'ionicons/icons';
import {ref} from 'vue'
import { useRouter } from 'vue-router';

//utils
import playerControls from '@/utils/playerControls';

//zustand
import playerStore from '@/composable/playerStatus';
import mediaControlModalState from '@/composable/mediaControlState'

//types
import {singleSongType} from '@/types/dataTypes'


const router= useRouter()
const {pauseSong,playSound,playNextSong,playPreviousSong}=playerControls()

const {getState,subscribe}= playerStore;
const {setState:modalSetState}= mediaControlModalState


const controlOut=ref<boolean>(getState().controlOut);
const isPlaying= ref<boolean>(getState().isPlaying);
const presentSong=ref<singleSongType>(getState().currentlyPlaying)

subscribe(()=>{
    controlOut.value=getState().controlOut;
    isPlaying.value=getState().isPlaying;
    presentSong.value=getState().currentlyPlaying
    // console.log(getState().currentlyPlaying,'controls')
})

function OpenMediaControlModal(e:Event){
    const target= e.target as HTMLDivElement

    if(target.classList.contains('container')){
        modalSetState({isOpen:true})
        router.push('/mediaControls')
    }
}



</script>

<style scoped>
h6,p{
    margin: 0;
    padding: 0;
}

.container{
    height:60px;
    padding: 10px 20px;
    border-top:1px solid lightgrey;
    display:flex;
    justify-content: space-between;
}
.controls{
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-around;
}

</style>