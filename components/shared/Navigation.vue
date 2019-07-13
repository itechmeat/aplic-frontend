<template>
  <nav>
    <ui-button to="/" outline>
      Log In
    </ui-button>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isVisible: false
    }
  },

  mounted() {
    this.isVisible = true
  },
}
</script>

<style lang="scss" scoped>
nav {
  display: flex;
}
</style>
