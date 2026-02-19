<template>
    <div class="product-details">
        <div class="product-details__tabs">
            <button class="product-details__tab active">Описание</button>
            <button class="product-details__tab">Характеристики</button>
            <button class="product-details__tab">Отзывы</button>
        </div>
        <div class="product-details__content">
            <div class="product-details__content-title">Описание</div>
            <div class="product-details__content-body">
                Ощутите модернизированный дизайн беспроводного контроллера Xbox в цвете «Pulse Red», отличающийся специально спрофилированными поверхностями и усовершенствованной геометрией для повышенного комфорта во время игры. Сохраняйте концентрацию на цели благодаря гибридной схеме навигации и текстурированным захватам на триггерах, бамперах и задней панели. Легко создавайте контент: делайте скриншоты, записи и многое другое, а затем делитесь им с помощью кнопки «Share». Подключайтесь напрямую к консоли или ПК через порт USB-C. Возможна установка элементов питания AA на задней панели. Время работы от батареи — до 40 часов. Подключайте совместимую гарнитуру к 3,5-мм аудиоразъему. Используйте приложение Xbox Accessories для переназначения кнопок и создания пользовательских профилей контроллера под любимые игры. Быстро сопрягайте, играйте и переключайтесь между устройствами, включая консоль, ПК и мобильные гаджеты.
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.product-details {
    flex: 0 1 680px;
    max-width: 680px;

    @media (max-width: 1249px) {
        flex: 0 1 auto;
        width: 100%;
        max-width: 100%;
        order: 2;
    }

    &__tabs {
        display: flex;
        gap: 26px;
        padding: 0 24px;
        height: 50px;
        background-color: var(--color-bg-gray);

        @media (max-width: 599px) {
            padding: 0 16px;
            gap: 20px;
        }
    }

    &__tab {
        font-size: 16px;
        line-height: 20px;
        font-weight: 600;
        height: 100%;
        color: var(--color-gray);

        @media (max-width: 599px) {
            font-size: 14px;
        }

        &.active {
            padding-top: 3px;
            color: var(--color-dark);
            border-bottom: 3px solid var(--color-dark);
        }
    }

    &__content {
        margin-top: 32px;

        @media (max-width: 1249px) {
            max-width: 680px;
        }

        &-title {
            font-size: 20px;
            font-weight: 600;

            @media (max-width: 599px) {
                font-size: 18px;
            }
        }

        &-body {
            margin-top: 36px;
            font-size: 15px;

            @media (max-width: 599px) {
                margin-top: 16px;
                font-size: 13px;
                line-height: 1.4;
            }
        }
    }
}
</style>