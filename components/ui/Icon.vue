<template>
  <span :class="iconClass" :style="iconStyle"></span>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default () {
        return 'fas';
      },
    },
    name: {
      type: String,
      default () {
        return 'question-circle';
      },
    },
    size: {
      type: Number
    },
  },

  computed: {
    iconClass () {
      return {
        [this.type]: true,
        ['fa-' + this.name]: true,
      };
    },
    iconStyle () {
      return {
        'font-size': this.size + 'px',
      };
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../styles/fa/fontawesome';
@import '../../styles/fa/fa-regular';
@import '../../styles/fa/fa-light';
@import '../../styles/fa/fa-solid';
@import '../../styles/fa/fa-brands';
</style>
