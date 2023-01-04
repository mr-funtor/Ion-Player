<template>
    <ion-page>
        <ion-content >
            <ion-list :inset="true" lines="none" :style="{padding:'0px'}">

                <div v-for="album in albums" :style="{display:'flex', justifyContent:'space-between',alignItems:'center'}">
                    <ion-item>
                        <ion-avatar :style="{backgroundColor:'grey',borderRadius:'4px'}"></ion-avatar>
                        <div :style="{marginLeft:'15px'}">
                            <h6>{{album.name}}</h6>
                            <ion-note>{{findArtist(album.artist)}}</ion-note>
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
import { IonPage,IonContent,IonList,IonLabel,IonItem,IonAvatar,IonText,IonNote } from '@ionic/vue';
import {albums,artists} from '@/data/data'

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