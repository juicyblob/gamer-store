<script setup lang="ts">
import Star from './Star.vue';
</script>

<template>
    <div class="raiting-block">
        <div class="raiting-block__head">
            <div class="raiting-block__stars">
                <Star :filled="true" size="lg" />
                <Star :filled="true" size="lg" />
                <Star :filled="true" size="lg" />
                <Star :filled="true" size="lg" />
                <Star :filled="true" size="lg" />
            </div>
            <div class="raiting-block__counter">4.7</div>
        </div>
        <div class="raiting-block__body">
            <div class="raiting-block__rate">
                <div class="raiting-block__rate-value">5</div>
                <div class="raiting-block__rate-bar">
                    <div class="raiting-block__rate-bar-fill"></div>
                </div>
                <div class="raiting-block__rate-count">12</div>
            </div>
            <div class="raiting-block__rate">
                <div class="raiting-block__rate-value">4</div>
                <div class="raiting-block__rate-bar">
                    <div class="raiting-block__rate-bar-fill"></div>
                </div>
                <div class="raiting-block__rate-count">4</div>
            </div>
            <div class="raiting-block__rate">
                <div class="raiting-block__rate-value">3</div>
                <div class="raiting-block__rate-bar">
                    <div class="raiting-block__rate-bar-fill"></div>
                </div>
                <div class="raiting-block__rate-count">2</div>
            </div>
            <div class="raiting-block__rate">
                <div class="raiting-block__rate-value">2</div>
                <div class="raiting-block__rate-bar">
                    <div class="raiting-block__rate-bar-fill"></div>
                </div>
                <div class="raiting-block__rate-count">1</div>
            </div>
            <div class="raiting-block__rate">
                <div class="raiting-block__rate-value">1</div>
                <div class="raiting-block__rate-bar">
                    <div class="raiting-block__rate-bar-fill"></div>
                </div>
                <div class="raiting-block__rate-count">1</div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.raiting-block {
    flex: 0 0 560px;
    border: 1px solid var(--color-line);

    &__head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 20px 24px;
        border-bottom: 1px solid var(--color-line);
    }

    &__stars {
        display: flex;
        gap: 16px;
    }

    &__counter {
        font-size: 28px;
        line-height: 28px;
        font-weight: 700;
    }

    &__body {
        padding: 24px;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    &__rate {
        display: flex;
        align-items: center;
        gap: 7px;

        &-value {
            width: 25px;
            display: flex;
            justify-content: flex-start;
            font-size: 18px;
            line-height: 18px;
            font-weight: 500;
            color: var(--color-gray-50);
        }

        &-bar {
            position: relative;
            flex: 1 1 auto;
            height: 16px;
            background-color: var(--color-gray-20);

            &-fill {
                position: absolute;
                top: 0;
                left: 0;
                bottom: 0;
                width: 40%;
                background-color: var(--color-yellow);
            }
        }

        &-count {
            width: 25px;
            display: flex;
            justify-content: flex-end;
            font-size: 18px;
            line-height: 18px;
            font-weight: 700;
        }
    }
}
</style>