<template>
    <ion-header >
        <ion-toolbar>
            <div :style="{display:'flex',alignItems:'center'}">
                <ion-icon @click="router.back" :icon="chevronBackOutline" size="large"></ion-icon>
                <div :style="{flex:1,display:'flex',justifyContent:'center'}">
                    <div>
                        <ion-title>{{name}}</ion-title>
                    </div>
                </div>
            </div>
        </ion-toolbar>
    </ion-header>
</template>

<script lang="ts" setup>
import { IonHeader,IonTitle,IonToolbar,IonIcon } from '@ionic/vue';
import {chevronBackOutline} from 'ionicons/icons'
import { useRouter } from 'vue-router';
import { defineProps } from 'vue';

const props= defineProps(['name'])
const router=useRouter()

</script>
