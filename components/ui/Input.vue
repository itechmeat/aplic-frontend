<template>
  <div :class="mainClass" @click="focusToInput">
    <ui-icon v-if="icon" :name="icon" :type="iconType" class="icon" :style="iconStyle" />
    <span v-if="appendix" class="appendix">{{ appendix }}</span>
    <input
      ref="input"
      class="field"
      :type="type"
      :value="value"
      :placeholder="placeholder"
      :disabled="disabled"
      :name="name"
      @input="handleInput"
      @focus="handleFocus"
      @blur="handleBlur"
      @keydown.enter="handleSubmit"
    />
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default () {
        return 'text';
      },
    },
    name: String,
    value: {
      type: [Number, String]
    },
    placeholder: String,
    disabled: Boolean,
    size: {
      type: String,
      default () {
        return 'medium';
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
    appendix: String
  },

  data () {
    return {
      isFocused: false,
      isNoBlur: false,
    };
  },

  computed: {
    mainClass () {
      return {
        'input': true,
        ['input_' + this.size]: true,
        'input_focused': this.isFocused,
        'input_disabled': this.disabled,
        'input_reverse': this.iconPosition === 'right',
      }
    },

    iconStyle () {
      return {
        'margin': `0 ${this.iconPosition === 'left' ? '2px' : '8px'} 0 ${this.iconPosition === 'right' ? '2px' : '8px'}`,
        'opacity': this.iconOpacity / 100
      };
    },
  },

  methods: {
    focusToInput () {
      this.$refs.input.focus();
      this.isNoBlur = true;
      setTimeout(() => {
        this.isNoBlur = false;
      }, 20)
    },

    handleInput (e) {
      this.$emit('input', e.target.value);
    },

    handleFocus () {
      this.isFocused = true;
    },

    handleBlur () {
      setTimeout(() => {
        if (this.isNoBlur) {
          return;
        }
        this.isFocused = false;
      }, 10)
    },

    handleSubmit () {
      this.$emit('submit');
    },
  },
};
</script>

<style lang="scss" scoped>
.input {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border: 1px solid $c_border_dark;
  border-radius: 4px;
  background: $c_light;
  cursor: text;
  transition: $s;

  &_reverse {
    flex-direction: row-reverse;
  }

  &_focused {
    border-color: $c_info;
    box-shadow: 0 0 0 4px rgba($c_info, .2);
  }
}

.field {
  flex: 1;
  width: 100%;
  margin: 0;
  padding: 8px 8px;
  border: none;
  border-radius: inherit;
  background: none;
  color: $c_text;
  font-family: inherit;
  font-size: $fs_body;
  font-weight: 400;
  line-height: 1.3;
  outline: none;

  &:disabled {
    color: $c_text_secondary;
  }

  .input_small & {
    padding: 4px 8px;
  }

  .input_big & {
    padding: 14px 8px;
  }
}

.appendix {
  margin: 0 3px 0 8px;
  color: $c_text_secondary;
  font-size: inherit;
  font-weight: 500;
  line-height: 1.3;

  .input_reverse & {
    order: 10
  }
}
</style>
