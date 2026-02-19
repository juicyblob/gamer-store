<template>
    <button class="header-hamb">
        <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.2 1.2002H18.8M1.2 6.65474H18.8M1.2 12.1093H18.8" stroke="#011936" stroke-width="2.4" stroke-linecap="round" />
        </svg>
    </button>
</template>

<style scoped lang="scss">
.header-hamb {
    display: none;

    @media (max-width: 599px) {
        display: block;
    }
}
</style>