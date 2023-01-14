<template>
    <ion-page>
        <ion-content >
            <ion-list :inset="true" lines="none" :style="{padding:'0px'}">
                <div v-for="song in songs" @click="playMe($event,song)" class="songContainer" :key="song.id" data-structure="allSingleTrack">
                    <ion-item :style="{padding:'5px 0'}">
                        <ion-avatar :style="{backgroundColor:'grey',borderRadius:'4px'}"></ion-avatar>
                        <div :style="{marginLeft:'15px'}">
                            <h6 >{{song.name}}</h6>
                            <ion-note >{{findArtist(song.artist)}}</ion-note>
                        </div>
                    </ion-item>
                    <ion-text>
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

const {playMe}= playerControls()

function findArtist(id:string):string{
   const aritst= artists.find((item)=>item.id===id)
   return aritst?.name as string 
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