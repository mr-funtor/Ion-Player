<template>
    <ion-page>
        <ion-content >
            <ion-list :inset="true" lines="none" :style="{padding:'0px'}">
                <div v-for="song in songs" @click="playMe(song.id)" :style="{display:'flex', justifyContent:'space-between',alignItems:'center'}">
                    <ion-item>
                        <ion-avatar :style="{backgroundColor:'grey',borderRadius:'4px'}"></ion-avatar>
                        <div :style="{marginLeft:'15px'}">
                            <h6>{{song.name}}</h6>
                            <ion-note>{{findArtist(song.artist)}}</ion-note>
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
import { IonPage,IonContent,IonList,IonLabel,IonItem,IonText } from '@ionic/vue';
import playerControls from '@/utils/playerControls';
import { songs,artists } from '@/data/data';

const {playMe}= playerControls()

function findArtist(id:string):string{
   const aritst= artists.find((item)=>item.id===id)
   return aritst?.name as string 
}


</script>

<style scoped>
div,h6,p{
    margin: 0;
    padding: 0;
}

</style>