<script setup lang="ts">
import BreadCrumbs from './components/BreadCrumbs.vue';
import Footer from './components/Footer.vue';
import Header from './components/header/Header.vue';
import Product from './components/product/Product.vue';

</script>

<template>
  <Header />
  <main>
    <BreadCrumbs />
    <Product />
  </main>
  <Footer />
</template>

<style scoped lang="scss"></style>
