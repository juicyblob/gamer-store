<template>
    <div class="product__images">
        <div class="product__images-main">
            <img src="https://juicyblob.ru/ggstore/images/goods/B0F2NCQYTX/white/front.png" alt="Preview">
        </div>
        <div class="product__images-thumbnails">
            <div class="product__images-thumbnails-thumbnail">
                <img src="https://juicyblob.ru/ggstore/images/goods/B0F2NCQYTX/white/front.png" alt="Preview">
            </div>
            <div class="product__images-thumbnails-thumbnail">
                <img src="https://juicyblob.ru/ggstore/images/goods/B0F2NCQYTX/white/front.png" alt="Preview">
            </div>
            <div class="product__images-thumbnails-thumbnail">
                <img src="https://juicyblob.ru/ggstore/images/goods/B0F2NCQYTX/white/front.png" alt="Preview">
            </div>
            <div class="product__images-thumbnails-thumbnail">
                <img src="https://juicyblob.ru/ggstore/images/goods/B0F2NCQYTX/white/front.png" alt="Preview">
            </div>
            <div class="product__images-thumbnails-thumbnail">
                <img src="https://juicyblob.ru/ggstore/images/goods/B0F2NCQYTX/white/front.png" alt="Preview">
            </div>
        </div>
    </div>
    <div class="product__slider">
        <div class="product__slider-wrapper">
            <div class="product__slider-slide">
                <img src="https://juicyblob.ru/ggstore/images/goods/B0F2NCQYTX/white/front.png" alt="Preview">
            </div>
        </div>
        <div class="product__slider-pagination">
            <button class="product__slider-pagination-btn active"></button>
            <button class="product__slider-pagination-btn"></button>
            <button class="product__slider-pagination-btn"></button>
            <button class="product__slider-pagination-btn"></button>
            <button class="product__slider-pagination-btn"></button>
        </div>
    </div>
</template>

<style scoped lang="scss">
.product__images {
    flex: 0 1 680px;
    max-width: 680px;

    @media (max-width: 1359px) {
        flex: 0 0 560px;
        max-width: 560px;
    }

    @media (max-width: 1249px) {
        flex: 0 0 480px;
        max-width: 480px;
    }

    @media (max-width: 1023px) {
        display: none;
    }


    &-main {
        width: 100%;
        height: 595px;
        background-color: var(--color-bg-gray);
        margin-bottom: 20px;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        @media (max-width: 1249px) {
            height: 420px;
            margin-bottom: 15px;
        }

        @media (max-width: 1023px) {
            height: 100%;
            margin-bottom: 0;
        }
    }

    &-thumbnails {
        display: flex;
        gap: 20px;

        @media (max-width: 1249px) {
            gap: 15px;
        }

        @media (max-width: 1023px) {
            display: none;
        }

        &-thumbnail {
            width: 120px;
            height: 120px;
            background-color: var(--color-bg-gray);

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }

            @media (max-width: 1359px) {
                width: 100px;
                height: 100px;
            }

            @media (max-width: 1249px) {
                width: 84px;
                height: 84px;
            }
        }
    }
}

.product__slider {
    display: none;
    position: relative;
    flex: 1 1 auto;
    width: 100%;
    height: 100%;
    max-width: 100%;
    aspect-ratio: 664 / 581;
    background-color: var(--color-bg-gray);

    @media (max-width: 1023px) {
        display: block;
    }

    &-wrapper {
        height: 100%;
    }

    &-slide {
        width: 100%;
        height: 100%;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    &-pagination {
        position: absolute;
        bottom: 36px;
        left: 50%;
        transform: translateX(-50%);
        font-size: 0;
        display: flex;
        gap: 6px;

        @media (max-width: 599px) {
            gap: 4px;
            bottom: 24px;
        }

        &-btn {
            width: 34px;
            height: 4px;
            border-radius: 2px;
            background-color: var(--color-gray-20);

            @media (max-width: 599px) {
                width: 22px;
            }

            &.active {
                background-color: var(--color-gray-60);
            }
        }
    }
}
</style>