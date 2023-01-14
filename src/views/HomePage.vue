<template>
  <ion-page>
   <ion-content>
      <div :style="{padding:'0 15px'}">
         <h4 :style="{padding:'15px 0'}">Top Songs</h4>
         <div class="cardsContainer">
            <router-link
               :to="`/singleSong/${song.id}`" 
               v-for="song in songs"
               :key="song.id"
               :style="{textDecoration:'none',color:'black'}"
            >
               <article
                  :style="{width:'160px',height:'220px'}"
               >
                  <ion-card >
                        <img :style="{height:'100%',objectFit:'cover'}" alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
                  </ion-card>
                  <footer :style="{marginTop:'11px'}">
                     <p :style="{fontWeight:'bold'}">{{ song.name }}</p>
                     <p :style="{marginTop:'3px'}">{{findArtistName(song.artist) }}</p>
                  </footer>
       
                </article>
            </router-link>
         </div>
      </div>
      

   </ion-content>
   
      
  </ion-page>
</template>
  
<script lang="ts" setup>
import { IonPage,IonContent,IonCard,} from '@ionic/vue';
import { RouterLink } from 'vue-router';
import { songs} from '@/data/data';

//utils
import { findArtistName } from '@/utils/findingResources';
  
</script>

<style scoped>
*{
   margin: 0;
   padding: 0;
}
.cardsContainer{
   display: grid;
   grid-template-columns: 1fr 1fr;
   justify-items: center;
   gap: 15px;
   width: 100%;
   /* background-color: aqua; */
}

ion-card{
   /* background-color: aqua; */
   height: 70%;
   margin: 0;
}

</style>