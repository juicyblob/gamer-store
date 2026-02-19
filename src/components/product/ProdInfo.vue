<script setup lang="ts">
import ProdButton from './ProdButton.vue';
import ProdColors from './ProdColors.vue';
import Star from './Star.vue';

</script>

<template>
    <div class="product__info">
        <div class="product__info-row">
            <div class="product__info-brand">
                <div class="product__info-brand-image">
                    <img src="@/assets/images/xbox-logo.png" alt="brand">
                </div>
                <div class="product__info-brand-name">Xbox Series</div>
            </div>
            <div class="product__info-code">B0F2NCQYTX</div>
            <div class="product__info-mob-name">Xbox Wireless Controller</div>
        </div>
        <h1 class="product__info-name">Xbox Wireless Controller</h1>
        <div class="product__info-rate">
            <div class="product__info-rate-stars">
                <Star :filled="true" size="md" />
                <Star :filled="true" size="md" />
                <Star :filled="true" size="md" />
                <Star :filled="true" size="md" />
                <Star :filled="false" size="md" />
            </div>
            <span class="product__info-rate-counter">4.7</span>
            <span class="product__info-mob-price">₽4893.50</span>
        </div>
        <div class="product__info-price">₽4893.50</div>
        <ProdColors />
        <div class="product__info-buttons">
            <ProdButton color="red" text="Добавить в корзину" icon="cart" />
            <ProdButton color="dark" text="Отметить избранным" icon="heart" />
        </div>
        <div class="product__info-delivery">
            <svg width="22" height="17" viewBox="0 0 22 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.6">
                    <path d="M14.75 12.26V2.75C14.75 2.21957 14.5393 1.71086 14.1642 1.33579C13.7891 0.960714 13.2804 0.75 12.75 0.75H2.75C2.21957 0.75 1.71086 0.960714 1.33579 1.33579C0.960714 1.71086 0.75 2.21957 0.75 2.75V11.75C0.75 12.0152 0.855357 12.2696 1.04289 12.4571C1.23043 12.6446 1.48478 12.75 1.75 12.75H2.46C2.65493 12.3049 2.97534 11.9263 3.38204 11.6604C3.78874 11.3945 4.2641 11.2529 4.75 11.2529C5.2359 11.2529 5.71126 11.3945 6.11796 11.6604C6.52466 11.9263 6.84507 12.3049 7.04 12.75H14.46C14.5333 12.5733 14.63 12.41 14.75 12.26ZM14.75 12.26C15.0099 11.9075 15.3581 11.6298 15.7596 11.4548C16.1611 11.2799 16.6017 11.214 17.0368 11.2637C17.4719 11.3134 17.8862 11.4769 18.2379 11.7379C18.5896 11.9989 18.8663 12.348 19.04 12.75H20.75V9.86C20.7504 9.13434 20.5533 8.42225 20.18 7.8L18.95 5.75L18.04 4.24C17.9515 4.09072 17.8257 3.96705 17.6749 3.88114C17.5241 3.79522 17.3535 3.75003 17.18 3.75H14.75V12.26Z" stroke="#011936" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M9.75 7.75H4.75M9.75 4.75H4.75M7.25 13.75C7.25044 14.1219 7.16789 14.4892 7.00839 14.8252C6.84888 15.1611 6.61642 15.4573 6.32796 15.692C6.0395 15.9268 5.7023 16.0942 5.34094 16.1821C4.97957 16.27 4.60315 16.2762 4.23909 16.2002C3.87504 16.1242 3.53253 15.9679 3.23652 15.7428C2.94051 15.5176 2.69846 15.2293 2.52802 14.8987C2.35757 14.5682 2.26302 14.2038 2.25125 13.832C2.23948 13.4603 2.3108 13.0907 2.46 12.75C2.6902 12.2244 3.09422 11.7939 3.60423 11.531C4.11424 11.268 4.69919 11.1884 5.26091 11.3057C5.82262 11.423 6.32689 11.7299 6.68908 12.175C7.05127 12.6201 7.24932 13.1762 7.25 13.75ZM19.25 13.75C19.2504 14.1219 19.1679 14.4892 19.0084 14.8252C18.8489 15.1611 18.6164 15.4573 18.328 15.692C18.0395 15.9268 17.7023 16.0942 17.3409 16.1821C16.9796 16.27 16.6031 16.2762 16.2391 16.2002C15.875 16.1242 15.5325 15.9679 15.2365 15.7428C14.9405 15.5176 14.6985 15.2293 14.528 14.8987C14.3576 14.5682 14.263 14.2038 14.2513 13.832C14.2395 13.4603 14.3108 13.0907 14.46 12.75C14.5333 12.5733 14.63 12.41 14.75 12.26C15.0099 11.9075 15.3581 11.6298 15.7596 11.4548C16.1611 11.2799 16.6017 11.214 17.0368 11.2637C17.4719 11.3134 17.8862 11.4769 18.2379 11.7379C18.5896 11.9989 18.8663 12.348 19.04 12.75C19.18 13.065 19.252 13.406 19.25 13.75Z" stroke="#011936" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </g>
            </svg>
            <span>Бесплатная доставка при заказе от 2000Р</span>
        </div>
    </div>
</template>

<style scoped lang="scss">
.product__info {
    flex: 1 0 560px;

    @media (max-width: 1359px) {
        flex: 1 1 560px;
    }

    @media (max-width: 1024px) {
        flex: 1 1 auto;
        width: 100%;
    }

    &-row {
        display: flex;
        align-items: center;
        justify-content: space-between;

        @media (max-width: 1024px) {
            justify-content: flex-start;
            gap: 20px;
        }

        @media (max-width: 599px) {
            gap: 12px;
        }
    }

    &-brand {
        display: flex;
        align-items: center;
        gap: 12px;

        &-image {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            overflow: hidden;

            @media (max-width: 599px) {
                width: 32px;
                height: 32px;
            }

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }

        &-name {
            font-weight: 600;
            font-size: 16px;
            line-height: 20px;

            @media (max-width: 1023px) {
                display: none;
            }
        }
    }

    &-code {
        font-weight: 500;
        font-size: 16px;
        line-height: 20px;
        color: var(--color-gray-60);

        @media (max-width: 1023px) {
            display: none;
        }
    }

    &-name {
        font-size: 36px;
        font-weight: 600;
        margin: 26px 0 16px 0;

        @media (max-width: 1249px) {
            font-size: 32px;
        }

        @media (max-width: 1024px) {
            display: none;
        }
    }

    &-mob-name {
        display: none;
        font-size: 24px;
        font-weight: 600;

        @media (max-width: 1023px) {
            display: block;
        }

        @media (max-width: 599px) {
            font-size: 18px;
        }
    }

    &-rate {
        display: flex;
        align-items: center;
        gap: 16px;
        cursor: pointer;

        @media (max-width: 1024px) {
            margin-top: 24px;
        }

        @media (max-width: 599px) {
            margin-top: 8px;
        }

        &-stars {
            display: flex;
            gap: 8px;
        }

        &-counter {
            font-size: 16px;
            line-height: 16px;
            font-weight: 600;
            padding-top: 2px;
        }
    }

    &-price {
        font-size: 48px;
        line-height: 48px;
        font-weight: 600;
        margin-top: 54px;

        @media (max-width: 1249px) {
            font-size: 40px;
            line-height: 40px;
        }

        @media (max-width: 1024px) {
            display: none;
        }
    }

    &-mob-price {
        display: none;
        font-size: 40px;
        line-height: 40px;
        font-weight: 600;

        @media (max-width: 1024px) {
            display: block;
            margin-left: auto;
        }

        @media (max-width: 599px) {
            font-size: 22px;
        }
    }

    &-buttons {
        margin-top: 60px;
        display: flex;
        flex-direction: column;
        gap: 16px;

        @media (max-width: 1024px) {
            margin-top: 40px;
        }

        @media (max-width: 599px) {
            gap: 12px;
            margin-top: 32px;
        }
    }

    &-delivery {
        font-weight: 500;
        font-size: 16px;
        color: var(--color-dark-60);
        display: flex;
        align-items: center;
        gap: 12px;
        margin-top: 16px;

        @media (max-width: 599px) {
            display: none;
        }
    }
}
</style>