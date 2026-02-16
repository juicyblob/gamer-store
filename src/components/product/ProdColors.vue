<template>
    <div class="product__info-colors">
        <div class="product__info-colors-name">Robot White</div>
        <div class="product__info-colors-items">
            <button class="product__info-colors-items-item" style="background-color: var(--color-white);"></button>
            <button class="product__info-colors-items-item" style="background-color: var(--color-dark);"></button>
            <button class="product__info-colors-items-item" style="background-color: var(--color-blue);"></button>
            <button class="product__info-colors-items-item" style="background-color: var(--color-green);"></button>
            <button class="product__info-colors-items-item" style="background-color: var(--color-red);"></button>
        </div>
    </div>
</template>

<style scoped lang="scss">
.product__info-colors {
    margin-top: 120px;

    &-name {
        font-size: 16px;
        font-weight: 600;
    }

    &-items {
        display: flex;
        gap: 12px;
        margin-top: 18px;

        &-item {
            width: 32px;
            height: 32px;
            border-radius: 50%;
            box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.15);
        }
    }
}
</style>