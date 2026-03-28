<template>
  <div id = "app">
    <BasicLayout />
  </div>
</template>

<script setup lang="ts">
import BasicLayout from "@/layouts/BasicLayout.vue";
import {healthUsingGet} from "@/api/mainController.ts";
import {useLoginUserStore} from "@/stores/useLoginUserStore.ts";

const LoginUserStore = useLoginUserStore();
LoginUserStore.fetchLoginUser();

healthUsingGet().then(res => {
  console.log(res);
})
</script>
<style>
</style>
