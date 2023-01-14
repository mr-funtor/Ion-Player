<template>
    <ion-modal
        ref="modal"
        :is-open="isOpen"
        :initial-breakpoint="0.07"
        :breakpoints="[0.07, 0.75]"
        :backdrop-dismiss="false"
        :backdrop-breakpoint="0.5"
    >
        <ion-content class="ion-padding">
            <ion-text>Up Next</ion-text>
            <ion-list :inset="true" lines="none" :style="{padding:'0px'}" >
                <div v-for="(song,index) in allQueuedSongs" @click="playMe($event,song,index)" :class="['songContainer',index===currentlyPlayingIndex && 'currentSong']" :key="song.id" data-structure="queuedSingleTrack">
                    <div 
                    :class="['list-case']"
                    >
                        <ion-avatar :style="{backgroundColor:'grey',borderRadius:'4px'}"></ion-avatar>
                        <div :style="{marginLeft:'15px'}">
                            <h6>{{song.name}}</h6>
                            <ion-note>{{findArtistName(song.artist)}}</ion-note>
                        </div>
                    </div>
                    <ion-text>
                        <p>&#8942;</p>
                    </ion-text>
                </div>
            </ion-list>
        </ion-content>

    </ion-modal>
    
</template>

<script lang="ts" setup>
import { IonModal,IonContent,IonList,IonItem,IonText,IonAvatar,IonNote } from '@ionic/vue';
import { ref } from 'vue';

//utils
import playerControls from '@/utils/playerControls';

//data
import { findArtistName } from '@/utils/findingResources';


//types
import {singleSongType} from '@/types/dataTypes'

//zustand
import playerStore from '@/composable/playerStatus';
import useMediaControlStore from '@/composable/mediaControlState'

const {getState,setState,subscribe}= playerStore;
const {getState:mediaGet,subscribe:mediaSubscribe} = useMediaControlStore
const allQueuedSongs=ref<singleSongType[]>(getState().queuedSongs)
const isOpen= ref<boolean>(mediaGet().isOpen)
const currentlyPlayingIndex= ref<number>(getState().currentSongIndex)


subscribe(()=>{
    allQueuedSongs.value=getState().queuedSongs
    currentlyPlayingIndex.value= getState().currentSongIndex
})

mediaSubscribe(()=>{
    isOpen.value=mediaGet().isOpen
})

const {pauseSong,playMe,playSound}=playerControls()
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

</style>