<template>
  <div class="container">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.container {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 var(--grid-space);
}
</style>
