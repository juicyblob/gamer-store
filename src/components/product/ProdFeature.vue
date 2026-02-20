<template>
    <div class="product-feature">
        <div class="product-feature__name">Питание</div>
        <div class="product-feature__line"></div>
        <div class="product-feature__value">2 AA батарейки(включено).</div>
    </div>
</template>

<style scoped lang="scss">
.product-feature {
    font-size: 16px;
    line-height: 16px;
    display: flex;
    align-items: flex-end;
    gap: 14px;
    margin-bottom: 24px;

    &:last-child {
        margin-bottom: 0;
    }

    @media (max-width: 599px) {
        flex-direction: column;
        align-items: flex-start;
    }

    &__name {
        color: var(--color-dark-60);
    }

    &__line {
        flex: 1 1 auto;
        border-bottom: 1px solid var(--color-line);

        @media (max-width: 599px) {
            display: none;
        }
    }
}
</style>