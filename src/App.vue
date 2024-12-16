<script setup>

import {RouterView } from 'vue-router';

import NavComponent from '@/components/NavComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';



</script>

<template>

  <div>
    <NavComponent />
  </div>
  <div>
    <RouterView />
  </div>
  <div>
    <FooterComponent />
  </div>
</template>






