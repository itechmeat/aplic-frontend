<template>
  <header :class="['header', { fixed: scrollPosition > 0 }]">
    <ui-container>
      <nuxt-link to="/" class="brand">
        <Logo />
      </nuxt-link>

      <Navigation />
    </ui-container>
  </header>
</template>

<script>
import Logo from './Logo'
import Navigation from './Navigation'

export default {
  components: {
    Logo,
    Navigation,
  },

  props: {
    scrollPosition: {
      type: Number,
      default: 0
    }
  },
}
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100%;
  background: #fff;
  transition: box-shadow .2s;

  &.fixed {
    box-shadow: 0 10px 12px -8px #c1bcd9;
  }
}

.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: $g_header;
}
</style>
