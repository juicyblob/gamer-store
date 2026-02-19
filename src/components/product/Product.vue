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

    @media (max-width: 1249px) {
        margin-bottom: 170px;
    }

    @media (max-width: 599px) {
        margin-top: 16px;
        margin-bottom: 76px;
    }

    &__row {
        display: flex;
        align-items: flex-start;
        gap: 60px;

        &:first-child {
            padding-bottom: 60px;
            border-bottom: 1px solid var(--color-line);
            margin-bottom: 60px;

            @media (max-width: 1023px) {
                flex-direction: column;
                gap: 24px;
                padding-bottom: 40px;
                margin-bottom: 40px;
            }

            @media (max-width: 599px) {
                gap: 16px;
                margin-bottom: 0;
                border-bottom: none;
            }

        }

        &:last-child {
            @media (max-width: 1249px) {
                flex-direction: column;
            }

            @media (max-width: 1023px) {
                gap: 40px;
            }

            @media (max-width: 599px) {
                gap: 0;
            }
        }
    }

    &__aside {
        flex: 1 0 560px;

        @media (max-width: 1249px) {
            flex: 1 0 auto;
            width: 100%;
            max-width: 560px;
            order: 1;
        }

        @media (max-width: 1024px) {
            max-width: 100%;
        }
    }

}
</style>