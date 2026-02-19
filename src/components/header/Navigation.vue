<template>
    <nav class="header__nav">
        <a href="#" class="header__nav-item">Консоли</a>
        <a href="#" class="header__nav-item">Игры</a>
        <a href="#" class="header__nav-item active">Аксессуары</a>
        <a href="#" class="header__nav-item">Сувениры</a>
        <a href="#" class="header__nav-item">Распродажа</a>
    </nav>
</template>

<style scoped lang="scss">
.header__nav {
    display: flex;
    align-items: center;
    gap: 32px;

    @media (max-width: 599px) {
        display: none;
    }

    &-item {
        font-size: 16px;
        line-height: 20px;
        font-weight: 600;
        color: var(--color-dark);

        &.active {
            color: var(--color-red);
        }
    }
}
</style>