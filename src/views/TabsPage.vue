<template>
    <ion-page>
        <CustomHeaderVue/>
        <ion-content>
            <CustomModalVue/>
            
            <ion-tabs>
                <ion-router-outlet></ion-router-outlet>
                <ControlsComponentVue/>
                <ion-tab-bar >
                    <ion-tab-button tab="home" href="/tabs/home">
                        <ion-icon :icon="home"></ion-icon>
                        <ion-label>Home</ion-label>
                    </ion-tab-button>
                    <ion-tab-button tab="search" href="/tabs/search">
                        <ion-icon :icon="search"></ion-icon>
                        <ion-label>Search</ion-label>
                    </ion-tab-button>
                    <ion-tab-button tab="library" href="/tabs/library">
                        <ion-icon :icon="musicalNotes"></ion-icon>
                        <ion-label>Library</ion-label>
                    </ion-tab-button>
                    <ion-tab-button tab="chats">
                        <ion-icon :icon="chatbubble"></ion-icon>
                        <ion-label>Chats</ion-label>
                    </ion-tab-button>
                </ion-tab-bar>
            </ion-tabs>
        </ion-content>
        
        
    </ion-page>
    
    
    </template>
    
    <script lang="ts" setup>
    import { IonPage,IonTabs, IonContent,IonFooter,IonToolbar,IonTabBar, IonTabButton,IonIcon,IonRouterOutlet,IonLabel } from '@ionic/vue';
    import {calendar,home,search,musicalNotes,chatbubble} from 'ionicons/icons'
    import { useRouter } from 'vue-router';

    //custom Components
    import { CustomHeaderVue,ControlsComponentVue,CustomModalVue } from '@/components';
  
    const router= useRouter()
    
    </script>