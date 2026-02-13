<script setup lang="ts">
import HeaderButtons from './HeaderButtons.vue';
import Logo from './Logo.vue';
import Navigation from './Navigation.vue';
import SearchInput from './SearchInput.vue';
import UserAvatar from './UserAvatar.vue';


</script>

<template>
  <header class="header">
    <div class="container">
      <div class="header__row">
        <Logo />
        <SearchInput />
        <div class="header__row-right">
          <HeaderButtons />
          <UserAvatar />
        </div>
      </div>
      <Navigation />
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  padding-top: 20px;

  .container {
    padding-bottom: 24px;
    border-bottom: 1px solid var(--color-dark);
  }

  &__row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 36px;

    &-right {
      display: flex;
      align-items: center;
      gap: 52px;
    }
  }
}
</style>
