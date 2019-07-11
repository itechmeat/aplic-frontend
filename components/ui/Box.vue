<template>
  <div class="box">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.box {
  padding: $g;
  border-radius: 5px;
  background: $c_light;
  box-shadow: 0 10px 12px -8px #c1bcd9;
}
</style>
