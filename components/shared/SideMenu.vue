<template>
  <ui-box class="filter">
    <nuxt-link v-for="item in list" :to="item.link" class="link">
      {{ item.text }}
    </nuxt-link>
  </ui-box>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default () {
        return [];
      },
    },
  }
};
</script>

<style lang="scss" scoped>
.link {
  display: block;
  padding: 5px $g;
}
</style>
