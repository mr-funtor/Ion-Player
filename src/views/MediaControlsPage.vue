<template>
    <ion-page>
        <ion-content class="ion-padding">
            <ion-icon :icon="chevronDownOutline" size="large" @click="leaveMediaControls"></ion-icon>
            <div class="nowPlaying-container">
                <div class="image-container">
                    <img :style="{height:'100%',objectFit:'cover'}" alt="Silhouette of mountains" :src="theCurrentPlaying.image" />
                </div>

                <div class="song-case">
                    <ion-text :style="{fontWeight:'bold'}">{{ theCurrentPlaying.name }}</ion-text>
                    <ion-text>{{ theCurrentPlaying.artist }}</ion-text>
                </div>

                <div class="controls-case">
                    <ion-icon :icon="playBack" size="large" @click="playPreviousSong()"></ion-icon>
                    <ion-icon 
                        :icon="pause" 
                        size="large" 
                        class="play-case" 
                        v-if="isPlaying"
                        @click="pauseSong"
                    ></ion-icon>
                    <ion-icon 
                        :icon="play"
                        size="large" 
                        class="play-case" 
                        v-else
                        @click="playSound"
                    ></ion-icon>
                    <ion-icon :icon="playForward" size="large" @click="playNextSong"></ion-icon>
                </div>
            </div>
            <QueuedSongsModal :isOpen="isOpen"/>
        </ion-content>

    </ion-page>

</template>

<script lang="ts" setup>
import { IonContent,IonIcon,IonText,IonPage} from '@ionic/vue';
import { chevronDownOutline,playBack,playForward,play,pause } from 'ionicons/icons';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

// components
import QueuedSongsModal from '@/components/QueuedSongsModal.vue';

//zustand
import useMediaControlStore from '@/composable/mediaControlState'
import playerStore from '@/composable/playerStatus';

//types
import { singleSongType } from '@/types/dataTypes';

//utils
import playerControls from '@/utils/playerControls';

const router= useRouter()

//FUNCTIONS
const {setState:setControlState} = useMediaControlStore;
const {getState:playingState, subscribe:playingSubscribe} = playerStore

// const isOpen=ref<boolean>(getState().isOpen)
const theCurrentPlaying=ref<singleSongType>(playingState().currentlyPlaying)
const isPlaying= ref<boolean>(playingState().isPlaying);

// subscribe(()=>{
//     isOpen.value= getState().isOpen
// })

playingSubscribe(()=>{
    isPlaying.value= playingState().isPlaying;
    theCurrentPlaying.value= playingState().currentlyPlaying;
})

//control the playin
const {pauseSong,playSound,playNextSong,playPreviousSong}=playerControls()

function leaveMediaControls(){
    // setControlState({isOpen:false})//closes the queued songs modal
    isOpen.value=false
    router.back()
}

//determines the queue modal is opened or close
const isOpen= ref<boolean>(true)

</script>

<style scoped>
.nowPlaying-container{
    height:85vh;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.image-container{
    height: 300px;
    width: 300px;
    margin: 40px 0;
    border-radius: 15px;
    overflow: hidden;
}

.song-case{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
}

.controls-case{
    width: 100%;
    margin: 80px 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.play-case{
    padding: 20px;
    background-color: rgba(56, 129, 232, 0.1);
    display: flex;
    justify-content: center;
    border: 2px solid rgba(56, 129, 232, 1);
    border-radius: 50%;
    text-align: center;
}
</style>