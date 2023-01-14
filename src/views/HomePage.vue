<template>
  <ion-page>
   <!-- <CustomHeaderVue/> -->
   <ion-content >
      <div class="cardsContainer">
         <article :style="{width:'160px',height:'220px'}">
            <ion-card >
                  <img :style="{height:'100%',objectFit:'cover'}" alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
   
            </ion-card>
            <footer :style="{marginTop:'11px'}">
               <p :style="{fontWeight:'bold'}">God In Me</p>
               <p :style="{marginTop:'3px'}">God In Me</p>
            </footer>

         </article>
         <article :style="{width:'160px',height:'220px'}">
            <ion-card >
                  <img :style="{height:'100%',objectFit:'cover'}" alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
   
            </ion-card>
            <footer :style="{marginTop:'11px'}">
               <p :style="{fontWeight:'bold'}">God In Me</p>
               <p :style="{marginTop:'3px'}">God In Me</p>
            </footer>

         </article>
         <article :style="{width:'160px',height:'220px'}">
            <ion-card >
                  <img :style="{height:'100%',objectFit:'cover'}" alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
   
            </ion-card>
            <footer :style="{marginTop:'11px'}">
               <p :style="{fontWeight:'bold'}">God In Me</p>
               <p :style="{marginTop:'3px'}">God In Me</p>
            </footer>

         </article>
      </div>
      

   </ion-content>
   
      
  </ion-page>
</template>
  
<script lang="ts" setup>
import { IonPage,IonContent,IonCard,} from '@ionic/vue';
import { useRouter } from 'vue-router';

//custom component
import CustomHeaderVue from '@/components/CustomHeader.vue';

const router= useRouter()
  
</script>

<style scoped>
.cardsContainer{
   display: grid;
   grid-template-columns: 1fr 1fr;
   justify-items: center;
   gap: 15px;
   padding: 15px;
   width: 100%;
   /* background-color: aqua; */
}

ion-card{
   /* background-color: aqua; */
   height: 70%;
   margin: 0;
}

</style>