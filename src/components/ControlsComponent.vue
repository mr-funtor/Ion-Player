<template>
<div class="container">
    <div>
        <h6>Waves</h6>
        <p :style="{color:'grey'}">Normani</p>
    </div>
    <div class="controls">
        <ion-icon :icon="playBack"></ion-icon>
        <ion-icon :icon="play"></ion-icon>
        <ion-icon :icon="playForward"></ion-icon>
    </div>
</div>
</template>

<script lang="ts" setup>
import { IonPage,IonFooter,IonIcon } from '@ionic/vue';
import { playBack,playForward,play } from 'ionicons/icons';

</script>

<style scoped>
h6,p{
    margin: 0;
    padding: 0;
}

.container{
    height:60px;
    padding: 10px 20px;
    border-top:1px solid lightgrey;
    display:flex;
    justify-content: space-between;
}
.controls{
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-around;
}

</style>