<template>
    <ion-page>
        <BackHeader :name="singleSong?.name"/>
        
        <ion-content >
            <ion-list :inset="true"  :style="{padding:'0px',backgroundColor:'pink'}">
                <ion-item @click="sortFunctions" data-structure="singleSong">
                    <ion-label>{{singleSong.name}}</ion-label>
                    <ion-text @click="sortFunctions" data-structure='doQueue' :style="{padding:'0 10px'}">
                        <p :style="{fontWeight:'bold'}">&#8942;</p>
                    </ion-text>
                </ion-item>
            </ion-list>
        </ion-content>

        

    </ion-page>


</template>

<script lang="ts" setup>
import { IonPage,IonContent,IonList,IonItem,IonLabel,IonText } from '@ionic/vue';
import { useRoute,useRouter } from 'vue-router';

//types
import {singleSongType} from '@/types/dataTypes'

//utility
import {findSong} from '@/utils/findingResources'
import playerControls from '@/utils/playerControls';

//components
import BackHeader from '@/components/BackHeader.vue'

//zustand
import selectingFunctionState from '@/composable/selectingFunctionState'


const route= useRoute()
const router= useRouter()
const params= route.params

const singleSong= findSong(params.id as string)
const {playMe}= playerControls()


const {setState:setQueuingState} = selectingFunctionState

function playTheSong(event:Event,song:singleSongType){
    // console.log(event,song)
    playMe(event,song)
    router.push('/mediaControls')
}

function sortFunctions(event:Event){
    const target = event.currentTarget as HTMLDivElement

    if(target.dataset.structure === 'singleSong'){
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