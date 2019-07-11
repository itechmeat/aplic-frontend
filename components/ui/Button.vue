<template>
  <button
    v-if="!href"
    :class="buttonClass"
    :disabled="disabled"
    @click="handleClick"
    @keyup.enter="handleClick"
  >
    <ui-icon
      v-if="icon"
      class="button__icon"
      :name="icon"
      :type="iconType"
      :size="iconSize"
      :style="{'opacity': iconOpacity / 100 }"
    />
    <span class="button__text">
      <slot></slot>
    </span>
    <span v-if="isLoading" class="button__loader">
      <ui-spinner :size="24" />
    </span>
  </button>

  <router-link
    v-else
    :to="!disabled ? href : ''"
    :class="buttonClass"
    role="button"
    @click="handleClick"
    @keyup.enter="handleClick"
  >
    <ui-icon
      v-if="icon"
      class="button__icon"
      :name="icon"
      :type="iconType"
      :size="iconSize"
      :style="{'opacity': iconOpacity / 100 }"
    />
    <span class="button__text">
      <slot></slot>
    </span>
    <div v-if="isLoading" class="button__loader">
      <ui-spinner :size="24" />
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    href: String,
    type: {
      type: String,
      default () {
        return 'default';
      },
    },
    size: {
      type: String,
      default () {
        return 'medium';
      },
    },
    outline: Boolean,
    wide: {
      type: Boolean,
      default () {
        return false;
      },
    },
    disabled: {
      type: Boolean,
      default () {
        return false;
      },
    },
    isLoading: {
      type: Boolean,
      default () {
        return false;
      },
    },
    icon: String,
    iconType: String,
    iconPosition: {
      type: String,
      default () {
        return 'left';
      },
    },
    iconOpacity: {
      type: Number,
      default () {
        return 100;
      },
    },
    iconFixed: {
      type: Boolean,
      default () {
        return false;
      },
    }
  },

  computed: {
    buttonClass () {
      return {
        'button': true,
        ['button_' + this.type]: true,
        ['button_' + this.size]: true,
        'button_outline': this.outline,
        'button_wide': this.wide,
        'button_icon': this.iconPosition === 'center',
        'button_icon-fixed': this.iconFixed,
        'button_reverse': this.iconPosition === 'right',
        'button_disabled': this.disabled || this.isLoading,
      };
    },
    iconSize () {
      switch (this.size) {
        case 'small':
          return 14;
        case 'big':
          return 18;
      }
      return 16;
    },
  },

  methods: {
    handleClick () {
      if (!this.disabled) {
        this.$emit('click');
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@mixin buttonStyle($type, $bgc, $text, $shadow: $bgc) {
  background: $bgc;
  color: $text;

  &:hover {
    background: $bgc - #050505;
  }

  &:active,
  &.active {
    background: $bgc - #070707;
  }

  &:focus {
    background: $bgc - #111;
    box-shadow: 0 0 12px rgba($shadow, 1);
  }

  &.button_disabled {
    background: rgba($bgc, .5);
    color: rgba($text, .7);
    cursor: default;

    &:focus {
      box-shadow: none;
    }
  }

  &.button_outline {
    @if $type == 'default' {border: 1px solid $c_text_secondary; color: $c_text_secondary;}
    @else {border: 1px solid $bgc; color: $bgc;}
    @if $type == 'light' {color: $c_text_secondary;}
    background: none;
    line-height: calc(100% - 2px);

    &:hover,
    &:active,
    &:focus {
      @if $type == 'light' {border: 1px solid $c_text_secondary; color: $c_text_secondary;}
      background: rgba($bgc, .1);
    }
  }

  &.button_outline.button_disabled {
    @if $type == 'default' {border: 1px solid rgba($c_text_secondary, .5); color: rgba($c_text_secondary, .5);}
    @else {border: 1px solid rgba($bgc, .3); color: rgba($bgc, .7);}
    @if $type == 'light' {color: rgba($c_text_secondary, .7);}

    &:hover,
    &:active,
    &:focus {
      background: none;
    }
  }
}

@mixin buttonSize($size) {
  min-width: $size;
  min-height: $size;
  line-height: $size;
  border-radius: $size/2;
}

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
  margin: 0;
  padding: 0 $g;
  border: none;
  background: none;
  color: inherit;
  font-family: inherit;
  font-size: inherit;
  font-weight: 500;
  text-decoration: none;
  outline: none;
  cursor: pointer;
  transition: $s;

  &:focus {
    box-shadow: 0 0 8px rgba($c_info, .5);
  }

  // color

  &_default {
    @include buttonStyle('default', #f4f4f4, $c_text, $c_info);
  }

  &_light {
    @include buttonStyle('light', $c_light, $c_text, $c_info);
  }

  &_primary {
    @include buttonStyle('primary', $c_primary, $c_light);
  }

  &_accent {
    @include buttonStyle('accent', $c_accent, $c_light);
  }

  &_success {
    @include buttonStyle('success', $c_success, $c_light);
  }

  &_info {
    @include buttonStyle('info', $c_info, $c_light);
  }

  &_facebook {
    @include buttonStyle('brand', $c_brand_facebook, $c_light);
    font-weight: 300;
  }

  &_twitter {
    @include buttonStyle('brand', $c_brand_twitter, $c_light);
    font-weight: 300;
  }

  &_google {
    @include buttonStyle('brand', $c_brand_google, $c_light);
    font-weight: 300;
  }

  // size

  &_medium {
    @include buttonSize(36px);
  }

  &_small {
    @include buttonSize(28px);
    font-size: $fs_small;
  }

  &_tiny {
    @include buttonSize(24px);
    padding: 0 $g/2;
    font-size: $fs_small;
  }

  &_big {
    @include buttonSize(48px);
    font-size: $fs_big;
  }

  // other

  &_wide {
    display: flex;
    width: 100%;
  }

  &_icon {
    padding: 0;
  }

  &_reverse {
    flex-direction: row-reverse;
  }

  &_icon-fixed {
    padding: 0 $g*3;
  }

  // elements

  &__text {
    flex: 0 0 auto;
  }

  &__icon {
    margin: 0 4px 0 0;
    transition: opacity $s;
    fill: $c_light;

    .button_default &,
    .button_light & {
      fill: $c_text;
    }

    .button_reverse & {
      margin: 0 0 0 4px;
    }

    .button_icon & {
      margin: 0;
    }

    .button_icon-fixed & {
      position: absolute;
      left: $g;
    }

    .button:hover & {
      opacity: 1 !important;
    }

    .button_outline.button_default &,
    .button_outline.button_light & {
      fill: $c_text_secondary;
    }

    .button_outline.button_primary & {
      fill: $c_primary;
    }

    .button_outline.button_accent & {
      fill: $c_accent;
    }

    .button_outline.button_success & {
      fill: $c_success;
    }

    .button_outline.button_info & {
      fill: $c_info;
    }
  }

  &__loader {
    @extend %fill;
    border-radius: inherit;
  }
}
</style>
