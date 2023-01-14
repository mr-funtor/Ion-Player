<template>
    <ion-page>
        <BackHeader :name="singleArtistName"/>
        
        <ion-content >
            <div :style="{padding:'0 20px'}">
                <h2>Albums</h2>

                <div class="cardsContainer">
                    <router-link 
                        :to="`/singleAlbum/${album.id}`" 
                        v-for="album in singleArtistAlbums" 
                        :key="album.id" 
                        :style="{textDecoration:'none',color:'black'}"
                    >
                        <article  :router-link="`/singleAlbum/${album.id}`" :style="{width:'160px',height:'200px'}">
                            <ion-card :style="{height:'70%',margin:0}">
                                <img :style="{height:'100%',objectFit:'cover'}" alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
                
                            </ion-card>
                            <footer :style="{marginTop:'11px'}">
                                <p :style="{fontWeight:'bold'}">{{singleArtistName}}</p>
                                <p :style="{marginTop:'3px'}">{{album.name}}</p>
                            </footer>
        
                        </article>
                    </router-link>
                </div>

            </div>
        </ion-content>

    </ion-page>


</template>

<script lang="ts" setup>
import { IonPage,IonContent,IonCard } from '@ionic/vue';
import BackHeader from '@/components/BackHeader.vue'
import { useRoute,useRouter,RouterLink } from 'vue-router';

//utility
import {findArtistName,findArtistAlbums} from '@/utils/findingResources'

const route= useRoute()
const params= route.params

const singleArtistName= findArtistName(params.id as string)
const singleArtistAlbums= findArtistAlbums(params.id as string)

console.log(singleArtistAlbums)

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