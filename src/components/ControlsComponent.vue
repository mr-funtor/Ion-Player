<template>
<div v-show="controlOut" class="container">
    <div>
        <h6>{{ presentSong.name }}</h6>
        <p :style="{color:'grey'}">{{ presentSong.artist }}</p>
    </div>
    <div class="controls">
        <ion-icon :icon="playBack"></ion-icon>
        <ion-icon :icon="pause" @click="pauseSong()" v-if="isPlaying"></ion-icon>
        <ion-icon :icon="play" @click="playSound()" v-else></ion-icon>
        <ion-icon :icon="playForward"></ion-icon>
    </div>
</div>
</template>

<script lang="ts" setup>
import { IonPage,IonFooter,IonIcon } from '@ionic/vue';
import { playBack,playForward,play,pause } from 'ionicons/icons';
import {ref} from 'vue'

//utils
import playerControls from '@/utils/playerControls';

//zustand
import playerStore from '@/composable/playerStatus';

//types
import {singleSong} from '@/types/dataTypes'


const {pauseSong,playMe,playSound}=playerControls()

const {getState,setState,subscribe}= playerStore;
const controlOut=ref<boolean>(getState().controlOut);
const isPlaying= ref<boolean>(getState().isPlaying);
const presentSong=ref<singleSong>(getState().currentlyPlaying)

subscribe(()=>{
    controlOut.value=getState().controlOut;
    isPlaying.value=getState().isPlaying;
    presentSong.value=getState().currentlyPlaying
    console.log(getState().currentlyPlaying,'controls')
})



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