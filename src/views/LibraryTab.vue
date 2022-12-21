<template>
<ion-page>
    <!-- <CustomHeaderVue/> -->
    <ion-content>
        <ion-tabs>
            <ion-router-outlet></ion-router-outlet>
            <ion-tab-bar slot="top">
                <ion-tab-button tab="artist" href="/tabs/library/artist">
                    <ion-label>Artist</ion-label>
                </ion-tab-button>
                <ion-tab-button tab="albums" href="/tabs/library/albums">
                    <ion-label>Albums</ion-label>
                </ion-tab-button>
                <ion-tab-button tab="songs" href="/tabs/library/songs">
                    <ion-label>Songs</ion-label>
                </ion-tab-button>
            </ion-tab-bar>
    
        </ion-tabs>
    </ion-content>
    
</ion-page>

</template>

<script lang="ts" setup>
import { 
    IonPage, 
    IonTabBar, 
    IonTabs, IonTabButton,IonRouterOutlet,IonLabel,
    IonContent,IonFooter,IonToolbar } from '@ionic/vue';
import CustomHeaderVue from '@/components/CustomHeader.vue';


</script>