<template>
    <ion-page>
        <BackHeader :name="singleAlbum?.name"/>
        
        <ion-content >
            <ion-list :inset="true"  :style="{padding:'0px',backgroundColor:'pink'}">
                <ion-item v-for="song in foundSongs" :key="song.id" @click="playTheSong($event,song)" data-structure="albumTrack">
                    <ion-label>{{song.name}}</ion-label>
                </ion-item>
            </ion-list>
        </ion-content>

        <MediaControlsModal/>

    </ion-page>


</template>

<script lang="ts" setup>
import { IonPage,IonContent,IonList,IonItem,IonLabel } from '@ionic/vue';
import { useRoute } from 'vue-router';
// import {ref} from 'vue'

//utility
import {findAlbum,findSongsInAlbum} from '@/utils/findingResources'
import playerControls from '@/utils/playerControls';
import {singleSongType} from '@/types/dataTypes'

//components
import BackHeader from '@/components/BackHeader.vue'
import {MediaControlsModal} from '@/components' 

//zustand
import mediaControlModalState from '@/composable/mediaControlState'


const route= useRoute()
const params= route.params


const singleAlbum= findAlbum(params.id as string)
const foundSongs= findSongsInAlbum(params.id as string)
const {playMe}= playerControls()

console.log(foundSongs)
const {setState:modalSetState}= mediaControlModalState

function playTheSong(event:Event,song:singleSongType){
    // console.log(event,song)
    playMe(event,song)

    modalSetState({isOpen:true})//opens the modal that shows media controls
}




</script>
 
<style scoped>

.cardsContainer{
   display: grid;
   grid-template-columns: 1fr 1fr;
   justify-items: space-between;
   gap: 15px;
   padding-top: 0.5rem;
   width: 100%;
   height: 100%;
   /* background-color: aqua; */
}
</style>