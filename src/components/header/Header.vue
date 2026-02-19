<script setup lang="ts">
import Hamburger from './Hamburger.vue';
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
          <Hamburger />
        </div>
      </div>
      <Navigation />
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  padding-top: 20px;
  margin-bottom: 60px;

  @media (max-width: 1023px) {
    padding-top: 40px;
    margin-bottom: 40px;
  }

  @media (max-width: 599px) {
    padding-top: 22px;
    margin-bottom: 24px;
  }

  .container {
    padding-bottom: 24px;
    border-bottom: 1px solid var(--color-dark);

    @media (max-width: 599px) {
      padding-bottom: 22px;
    }
  }

  &__row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 36px;

    @media (max-width: 599px) {
      margin-bottom: 0;
    }

    &-right {
      display: flex;
      align-items: center;
      gap: 52px;

      @media (max-width: 1023px) {
        gap: 32px;
      }

      @media (max-width: 599px) {
        gap: 26px;
      }
    }
  }
}
</style>
