<template>
<ion-page>
    <ion-content >
        <ion-list :inset="true"  :style="{padding:'0px',backgroundColor:'pink'}">
            <ion-item>
                <ion-label>James Blunt</ion-label>
            </ion-item>
            <ion-item>
                <ion-label>Charles M</ion-label>
            </ion-item>
            <ion-item>
                <ion-label>The Saturdays</ion-label>
            </ion-item>
            <ion-item>
                <ion-label>Britney Spears</ion-label>
            </ion-item>
            <ion-item>
                <ion-label>Tony Bennett</ion-label>
            </ion-item>
            <ion-item>
                <ion-label>Frank Sinatra</ion-label>
            </ion-item>
        </ion-list>
    </ion-content>
    
</ion-page>
</template>

<script lang="ts" setup>
import { IonPage,IonContent,IonList,IonLabel,IonItem } from '@ionic/vue';

</script>