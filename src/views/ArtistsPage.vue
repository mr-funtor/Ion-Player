<template>
<ion-page>
    <ion-content >
        <ion-list :inset="true"  :style="{padding:'0px',backgroundColor:'pink'}">
            <ion-item v-for="artist in artists">
                <ion-label>{{artist.name}}</ion-label>
            </ion-item>
        </ion-list>
    </ion-content>
    
</ion-page>
</template>

<script lang="ts" setup>
import { IonPage,IonContent,IonList,IonLabel,IonItem } from '@ionic/vue';
import {artists} from '@/data/data'

</script>