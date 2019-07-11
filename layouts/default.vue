<template>
  <div class="layout">
    <Headline :scroll-position="scrollPosition" />

    <slot name="promo"></slot>

    <div class="layout__content">
      <aside v-if="hasLeftSlot" class="layout__left">
        <slot name="left">Left</slot>
      </aside>

      <main>
        <nuxt />
      </main>

      <aside v-if="hasRightSlot" class="layout__right">
        <slot name="right">Right</slot>
      </aside>
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

<style lang="scss">
*,
*:before,
*:after {
  box-sizing: border-box;
}

html {
  height: 100%;
}

body {
  overflow: hidden;
  overflow-y: auto;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  font-family: $ff;
  font-size: $fs_body;
  font-weight: 400;
  line-height: 1.5;
  background-color: $c_bg;
  color: $c_text;
}

a {
  color: $c_primary;
  text-decoration: underline;

  &:hover {
    text-decoration: none;
  }
}

p {
  margin: $g 0;

  &:first-child {
    margin-top: 0;
  }

  &:last-child {
    margin-bottom: 0;
  }
}

.text {
  &-secondary {
    color: $c_text_secondary;
  }

  &-hint {
    color: $c_text_hint;
  }
}

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

  &__left,
  &__right {
    flex: 0 0 168px;
  }

  &__left {
    margin-right: $g;
  }

  &__right {
    flex-basis: 224px;
    margin-left: $g;
  }

  main {
    flex: 1 1 auto;
  }
}
</style>
