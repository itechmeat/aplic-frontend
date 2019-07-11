<template>
  <section>
    <h3 v-if="title">{{ title }}</h3>
    <slot></slot>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
section:not(:first-child) {
  margin-top: $g*1.5;
}

h3 {
  margin: 0 0 $g/2;
  padding: 0;
  color: $c_text_secondary;
  font-size: $fs_small;
  font-weight: 500;
  text-transform: uppercase;
}
</style>
