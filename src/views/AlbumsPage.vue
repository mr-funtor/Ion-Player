<template>
    <ion-page>
        <ion-content >
            <ion-list :inset="true" lines="none" :style="{padding:'0px'}">
                <router-link
                    :to="`/singleAlbum/${album.id}`" 
                    v-for="album in albums" 
                    :key="album.id" 
                    :style="{textDecoration:'none',color:'black'}"
                >
                    <div :style="{display:'flex', justifyContent:'space-between',alignItems:'center'}">
                        <ion-item :style="{padding:'5px 0'}">
                            <ion-avatar :style="{backgroundColor:'grey',borderRadius:'4px'}"></ion-avatar>
                            <div :style="{marginLeft:'15px'}">
                                <h6>{{album.name}}</h6>
                                <ion-note>{{findArtistName(album.artist)}}</ion-note>
                            </div>
                        </ion-item>
                        <ion-text>
                            <p>&#8942;</p>
                        </ion-text>
                    </div>
                </router-link>

                
        
            </ion-list>
        </ion-content>
        
    </ion-page>
</template>
    
<script lang="ts" setup>
import { IonPage,IonContent,IonList,IonItem,IonAvatar,IonText,IonNote } from '@ionic/vue';
import {albums} from '@/data/data';
import {RouterLink } from 'vue-router';

//utils
import {findArtistName} from '@/utils/findingResources'


</script>

<style scoped>
div,h6,p{
    margin: 0;
    padding: 0;
}

</style>