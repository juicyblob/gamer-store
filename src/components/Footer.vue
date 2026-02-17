<template>
    <footer class="footer">
        <div class="container">
            <div class="footer__row">
                <p class="footer__copyright">©2026 GGStore Все права защищены.</p>
            </div>
        </div>
    </footer>
</template>

<style scoped lang="scss">
.footer {
    height: 130px;

    &__row {
        padding: 20px 0;
        border-top: 1px solid var(--color-line);
    }

    &__copyright {
        padding: 0;
        margin: 0;
        font-size: 14px;
        font-weight: 500;
        color: var(--color-gray-50);
    }
}
</style>