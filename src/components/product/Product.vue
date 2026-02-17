<script setup lang="ts">
import ProdAdd from './ProdAdd.vue';
import ProdDetails from './ProdDetails.vue';
import ProdImages from './ProdImages.vue';
import ProdInfo from './ProdInfo.vue';
import ProdRaiting from './ProdRaiting.vue';

</script>

<template>
    <div class="product">
        <div class="product__main">
            <div class="container">
                <div class="product__row">
                    <ProdImages />
                    <ProdInfo />
                </div>
                <div class="product__row">
                    <ProdDetails />
                    <div class="product__aside">
                        <ProdRaiting />
                        <ProdAdd />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.product {
    margin-top: 24px;
    margin-bottom: 200px;

    &__row {
        display: flex;
        align-items: flex-start;
        gap: 60px;

        &:first-child {
            padding-bottom: 60px;
            border-bottom: 1px solid var(--color-line);
            margin-bottom: 60px;
        }
    }

    &__aside {
        flex: 1 1 auto;
    }

}
</style>