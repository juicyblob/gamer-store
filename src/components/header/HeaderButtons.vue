<template>
    <div class="header__buttons">
        <button class="header__buttons-btn">
            <svg width="24" height="31" viewBox="0 0 24 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.5 7.57895H18V6.06316C18 4.45511 17.3679 2.91292 16.2426 1.77586C15.1174 0.638795 13.5913 0 12 0C10.4087 0 8.88258 0.638795 7.75736 1.77586C6.63214 2.91292 6 4.45511 6 6.06316V7.57895H1.5C1.10218 7.57895 0.720645 7.73865 0.43934 8.02291C0.158036 8.30718 0 8.69273 0 9.09474V25.7684C0 26.9745 0.474106 28.1311 1.31802 28.9839C2.16193 29.8367 3.30653 30.3158 4.5 30.3158H19.5C20.6935 30.3158 21.8381 29.8367 22.682 28.9839C23.5259 28.1311 24 26.9745 24 25.7684V9.09474C24 8.69273 23.842 8.30718 23.5607 8.02291C23.2794 7.73865 22.8978 7.57895 22.5 7.57895ZM9 6.06316C9 5.25913 9.31607 4.48804 9.87868 3.91951C10.4413 3.35098 11.2044 3.03158 12 3.03158C12.7956 3.03158 13.5587 3.35098 14.1213 3.91951C14.6839 4.48804 15 5.25913 15 6.06316V7.57895H9V6.06316ZM21 25.7684C21 26.1704 20.842 26.556 20.5607 26.8403C20.2794 27.1245 19.8978 27.2842 19.5 27.2842H4.5C4.10218 27.2842 3.72064 27.1245 3.43934 26.8403C3.15804 26.556 3 26.1704 3 25.7684V10.6105H6V12.1263C6 12.5283 6.15804 12.9139 6.43934 13.1981C6.72064 13.4824 7.10217 13.6421 7.5 13.6421C7.89782 13.6421 8.27936 13.4824 8.56066 13.1981C8.84196 12.9139 9 12.5283 9 12.1263V10.6105H15V12.1263C15 12.5283 15.158 12.9139 15.4393 13.1981C15.7206 13.4824 16.1022 13.6421 16.5 13.6421C16.8978 13.6421 17.2794 13.4824 17.5607 13.1981C17.842 12.9139 18 12.5283 18 12.1263V10.6105H21V25.7684Z" fill="#011936" />
            </svg>
            <span>Корзина</span>
            <div class="header__buttons-counter">2</div>
        </button>
        <button class="header__buttons-btn favs">
            <svg width="29" height="27" viewBox="0 0 29 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 1.5C4.4107 1.5 1.5 4.42322 1.5 8.02975C1.5 10.9411 2.6375 17.8507 13.8344 24.8356C14.0352 24.9587 14.2654 25.0238 14.5 25.0238C14.7346 25.0238 14.9648 24.9587 15.1656 24.8356C26.3638 17.8507 27.5 10.9411 27.5 8.02975C27.5 4.42322 24.5893 1.5 21 1.5C17.4107 1.5 14.5 5.45742 14.5 5.45742C14.5 5.45742 11.5893 1.5 8 1.5Z" stroke="#011936" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <span>Избранное</span>
        </button>
    </div>
</template>

<style scoped lang="scss">
.header__buttons {
    display: flex;
    align-items: center;
    gap: 40px;

    &-btn {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;

        span {
            font-weight: 600;
            font-size: 12px;
            line-height: 12px;
            color: var(--color-dark);
        }

        &.favs {
            padding-top: 5px;
        }
    }

    &-counter {
        position: absolute;
        top: 0;
        right: 2px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 18px;
        height: 18px;
        border-radius: 50%;
        background-color: var(--color-yellow);
        font-weight: 600;
        font-size: 10px;
        line-height: 10px;
        color: var(--color-dark);
    }
}
</style>