<template>
    <ion-modal
        ref="modal"
        :is-open="isOpen"
    >
        <ion-content class="ion-padding" size="large" @click="setState({isOpen:false})">
            <ion-icon :icon="chevronDownOutline" size="large"></ion-icon>
            <div class="nowPlaying-container">
                <div class="image-container">
                    <img :style="{height:'100%',objectFit:'cover'}" alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
                </div>
            </div>
        </ion-content>

    </ion-modal>

    <QueuedSongsModal/>

</template>

<script lang="ts" setup>
import { IonModal,IonContent,IonIcon,IonAvatar } from '@ionic/vue';
import { chevronDownOutline } from 'ionicons/icons';
import { ref } from 'vue';

// components
import QueuedSongsModal from './QueuedSongsModal.vue';

//zustand
import useMediaControlStore from '@/composable/mediaControlState'
import playerStore from '@/composable/playerStatus';

//types
import { singleSongType } from '@/types/dataTypes';

const {getState,setState,subscribe} = useMediaControlStore;
const {getState:playingState, subscribe:playingSubscribe} = playerStore

const isOpen=ref<boolean>(getState().isOpen)
const theCurrentPlaying=ref<singleSongType>(playingState().currentlyPlaying)

subscribe(()=>{
    isOpen.value= getState().isOpen
})

playingSubscribe(()=>{
    theCurrentPlaying.value= playingState().currentlyPlaying
})

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
    margin: 30px 0;
}
</style>