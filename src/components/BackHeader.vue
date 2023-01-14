<template>
    <ion-header >
        <ion-toolbar>
            <div :style="{display:'flex',alignItems:'center',position:'relative'}">
                <ion-icon @click="router.back" :icon="chevronBackOutline" size="large"></ion-icon>
                <div class="title">
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

<style scoped>
.title{
    position:absolute;
    width:100%;
    flex:1;
    display:flex;
    justify-content:center;
    z-index:-1
}

</style>
