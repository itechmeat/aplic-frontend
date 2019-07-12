<template>
  <div class="grid">
    <div v-if="$slots.head" class="head">
      <slot name="head"></slot>
    </div>

    <aside v-if="$slots.left">
      <slot name="left"></slot>
    </aside>

    <main>
      <slot></slot>
    </main>
  </div>
</template>

<style lang="scss" scoped>
.grid {
  flex: 1;
  align-self: flex-start;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
}

.head {
  flex: 0 0 100%;
  margin-bottom: $g*2;
}

aside {
  flex: 0 0 276px;
  margin-right: $g*2;
}

main {
  flex: 1;
}
</style>
