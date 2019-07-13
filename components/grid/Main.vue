<template>
  <div class="grid">
    <div v-if="$slots.head" class="head">
      <slot name="head"></slot>
    </div>

    <aside v-if="$slots.left" class="left">
      <slot name="left"></slot>
    </aside>

    <main>
      <slot></slot>
    </main>

    <aside v-if="$slots.right" class="right">
      <slot name="left"></slot>
    </aside>
  </div>
</template>

<style lang="scss" scoped>
.grid {
  flex: 1;
  align-self: flex-start;
  display: flex;
  flex-wrap: wrap;
}

.head {
  flex: 0 0 100%;
  margin-bottom: $g*2;
}

main {
  flex: 1;
}

.left,
.right {
  flex: 0 0 276px;
  margin-right: $g*2;
}

.left {
  margin-right: $g*2;
}

.right {
  margin-left: $g*2;
}
</style>
