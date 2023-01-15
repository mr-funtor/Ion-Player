<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script lang="ts" setup>
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { useRouter } from 'vue-router';
import closeAllModals from './utils/closeAllModals';

const router= useRouter()
router.beforeEach(()=>{
  closeAllModals()
})
</script>

<style>
*{
    margin: 0;
    padding: 0;
}
</style>