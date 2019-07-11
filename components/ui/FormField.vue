<template>
  <div class="form-field">
    <label v-if="label" class="form-field__label">
      {{ label }}
    </label>
    <div class="form-field__control">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.form-field {
  position: relative;
  margin: $g/2 0;

  &:first-child {
    margin-top: 0;
  }

  &:last-child {
    margin-bottom: 0;
  }

  &__label {
    display: block;
    width: max-content;
    margin: 0 0 4px;
  }

  &__control {
    width: 100%;
  }
}
</style>
