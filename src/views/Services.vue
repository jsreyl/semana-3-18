<template>
  <div class="about">
    <router-link to="/asesoria">Asesories</router-link>
    <h1>SERVICES</h1>
    <p>Here you have access to all kind of technologic services</p>
    <ServicesC></ServicesC>
    <HelloWorld></HelloWorld>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
import ServicesC from "@/components/ServicesC.vue";

export default {
  components: {
    HelloWorld,
    ServicesC,
  },
};
</script>

<style scoped>
</style>