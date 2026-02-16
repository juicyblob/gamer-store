<template>
    <div class="container">
        <div class="breadcrumbs">
            <a href="#" class="breadcrumbs__link">Аксессуары</a>
            <a href="#" class="breadcrumbs__link">Геймпады</a>
            <a href="#" class="breadcrumbs__link">Xbox Series One</a>
        </div>
    </div>

</template>

<style scoped lang="scss">
.breadcrumbs {
    font-weight: 600;
    font-size: 12px;
    line-height: 12px;

    &__link {
        color: var(--color-gray);
    }

    &__link:not(:last-child)::after {
        content: '';
        display: inline-block;
        margin: 0 18px;
        width: 6px;
        height: 8px;
        background-image: url('@/assets/icons/crubm-arrow.svg');
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
    }
}
</style>