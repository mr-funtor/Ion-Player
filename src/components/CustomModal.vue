<template>
    <ion-page>
        <ion-modal :is-open="isOpen">
            <ion-header >
                <ion-title @click="setState((state)=>({isOpen:false}))">Account</ion-title>
            </ion-header>
            
        </ion-modal>

    </ion-page>
    

</template>

<script lang="ts" setup>
import { IonModal,IonHeader,IonTitle,IonPage } from '@ionic/vue';
import { ref,watch } from 'vue';


//composables
import useModalStore from '@/composable/modalStatus';
import { State } from 'ionicons/dist/types/stencil-public-runtime';

const isOpen=ref(false)
const {getState,subscribe,setState}= useModalStore
subscribe(()=>isOpen.value=getState().isOpen)
// console.log(lala())

</script>