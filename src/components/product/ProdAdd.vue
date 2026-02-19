<template>
    <div class="add-block">
        <div class="add-block__wrapper">
            <div class="add-block__content">
                <div class="add-block__content-text">Место для вашей рекламы</div>
                <div class="add-block__content-dimension">560x692</div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.add-block {
    flex: 1 0 560px;
    background-color: var(--color-bg-gray);
    height: 692px;
    padding: 36px;
    margin-top: 60px;

    @media (max-width: 1249px) {
        display: none;
    }

    &__wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        border: 1px dashed var(--color-dark-30);
    }

    &__content {
        text-align: center;

        &-text {
            font-weight: 700;
            font-size: 24px;
            color: var(--color-dark-30);
        }

        &-dimension {
            font-weight: 700;
            font-size: 48px;
            color: var(--color-dark-30);
            margin-top: 12px;
        }
    }
}
</style>