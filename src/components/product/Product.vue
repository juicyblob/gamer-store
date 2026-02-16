<script setup lang="ts">
import ProdImages from './ProdImages.vue';
import ProdInfo from './ProdInfo.vue';

</script>

<template>
    <div class="product">
        <div class="container">
            <div class="product__main">
                <ProdImages />
                <ProdInfo />
            </div>
            <div class="product__details"></div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.product {
    margin-top: 24px;
    margin-bottom: 200px;

    .container {
        padding-bottom: 60px;
        border-bottom: 1px solid var(--color-line);
    }

    &__main {
        display: flex;
        gap: 60px;
    }
}
</style>