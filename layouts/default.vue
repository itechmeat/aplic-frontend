<template>
  <div class="layout">
    <Headline :scroll-position="scrollPosition" />

    <div class="layout__content">
      <nuxt />
    </div>
  </div>
</template>

<script>
import Headline from '../components/shared/Headline'

export default {
  components: {
    Headline,
  },
  data() {
    return {
      scrollPosition: 0
    }
  },

  mounted() {
    if (process.browser) {
      window.addEventListener('scroll', this.handleScroll);
      this.handleScroll();
    }
  },

  destroyed() {
    if (process.browser) {
      window.removeEventListener('scroll', this.handleScroll);
    }
    this.$store.commit('setScrollPosition', 0);
  },

  computed: {
    hasLeftSlot () {
      return !!this.$slots.left;
    },

    hasRightSlot () {
      return !!this.$slots.right;
    },
  },

  methods: {
    handleScroll() {
      this.scrollPosition = window.scrollY;
      this.$store.commit('setScrollPosition', this.scrollPosition);
    }
  },
};
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 1px);
  padding-top: $g_header;

  &__content {
    flex: 1 1 auto;
    display: flex;
    justify-content: space-between;
    width: $g_layout_max + $g*2;
    max-width: 100%;
    margin: 0 auto;
    padding: 40px $g;
  }
}
</style>
