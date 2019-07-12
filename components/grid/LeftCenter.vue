<template>
  <div class="grid">
    <aside>
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
  display: flex;
}

aside {
  flex: 0 0 276px;
  margin-right: $g*2;
}

main {
  flex: 1;
}
</style>
