<template>
    <ion-header :style="{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'0px 25px',height:'55px'}">
      <h6>Streams</h6>
      <ion-avatar @click="toggleSettingModal" :style="{height:'30px',width:'30px',backgroundColor:'grey'}"></ion-avatar>
    </ion-header>

</template>

<script lang="ts" setup>
import { IonHeader } from '@ionic/vue';

//composables
import useModalStore from '@/composable/modalStatus';
import { IonAvatar } from '@ionic/vue';

const {setState}= useModalStore

function toggleSettingModal(){
  setState((state)=>({...state,isOpen:!state.isOpen}))
}

</script>