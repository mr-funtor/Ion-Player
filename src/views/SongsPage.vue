<template>
    <ion-page>
        <ion-content >
            <ion-list :inset="true" lines="none" :style="{padding:'0px'}">
                <div v-for="song in songs" @click="sortFunctions($event,song)" class="songContainer" :key="song.id" data-structure="allSingleTrack">
                    <ion-item :style="{padding:'5px 0'}">
                        <ion-avatar :style="{backgroundColor:'grey',borderRadius:'4px'}"></ion-avatar>
                        <div :style="{marginLeft:'15px'}">
                            <h6 >{{song.name}}</h6>
                            <ion-note >{{findArtistName(song.artist)}}</ion-note>
                        </div>
                    </ion-item>
                    <ion-text @click="sortFunctions($event,song)" data-structure='doQueue'>
                        <p>&#8942;</p>
                    </ion-text>
                </div>
                
            </ion-list>
        </ion-content>
        
    </ion-page>
</template>
    
<script lang="ts" setup>
import { IonPage,IonContent,IonList,IonItem,IonText,IonAvatar,IonNote } from '@ionic/vue';
import playerControls from '@/utils/playerControls';
import { songs,artists } from '@/data/data';
import { useRoute,useRouter } from 'vue-router';

//types
import {singleSongType} from '@/types/dataTypes'

//utils
import { findArtistName } from '@/utils/findingResources';

//zustand
import mediaControlModalState from '@/composable/mediaControlState'
import selectingFunctionState from '@/composable/selectingFunctionState'

const {playMe}= playerControls()

const route= useRoute()
const router= useRouter()

const {setState:modalSetState}= mediaControlModalState
const {setState:setQueuingState} = selectingFunctionState

function playTheSong(event:Event,song:singleSongType){
    // console.log(event,song)
    playMe(event,song)
    router.push('/mediaControls')
}

function sortFunctions(event:Event, singleSong:singleSongType){
    const target = event.currentTarget as HTMLDivElement

    if(target.dataset.structure === 'allSingleTrack'){
        playTheSong(event, singleSong)
    }else if(target.dataset.structure === 'doQueue'){
        event.stopPropagation() //this prevents the 'playTheSong' function from running

        //adds the song to be queue into the state
        //if the user clicks add to queue the items will then be added
        setQueuingState({toBeQueuedItem:singleSong,isOpen:true,structure:'singleSong'}) 
    }

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
}

</style>