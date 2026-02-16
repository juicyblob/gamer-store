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
</template>

<style scoped lang="scss">
.product__images {
    flex: 0 1 680px;
    max-width: 680px;

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
    }

    &-thumbnails {
        display: flex;
        justify-content: space-between;

        &-thumbnail {
            width: 120px;
            height: 120px;
            background-color: var(--color-bg-gray);

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
    }
}
</style>