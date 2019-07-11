<template>
  <div :class="avatarClass" :style="avatarStyles">
    <img v-if="!!photo" :src="photo" :alt="name" class="avatar__photo">
  </div>
</template>

<script>
export default {
  props: {
    photo: String,
    name: String,
    sex: {
      type: String,
      default () {
        return 'default';
      },
    },
    size: {
      type: Number,
      default () {
        return 32;
      },
    },
    clear: Boolean,
  },

  computed: {
    avatarClass () {
      return {
        'avatar': true,
        ['avatar_' + this.sex]: !this.photo,
        'avatar_placeholder': !this.photo,
        'avatar_clear': this.clear && !this.photo,
      };
    },

    avatarStyles () {
      return {
        'width': this.size + 'px',
        'height': this.size + 'px',
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.avatar {
  display: inline-block;
  overflow: hidden;
  position: relative;
  border-radius: 50%;
  background: $c_bg;

  &_placeholder {
    &::before,
    &::after {
      content: '';
      position: absolute;
      border-radius: 50%;
      background: #b5b5b5;
    }

    &::before {
      top: 29%;
      left: 29%;
      width: 42%;
      height: 42%;
    }

    &::after {
      top: 80%;
      left: 12%;
      width: 76%;
      height: 76%;
    }
  }

  &_male {
    background: rgba($c_info, .1);

    &::before,
    &::after {
      background: $c_info;
      opacity: .25;
    }
  }

  &_female {
    background: rgba($c_primary, .1);

    &::before,
    &::after {
      background: $c_primary;
      opacity: .25;
    }
  }

  &_clear {
    box-shadow: inset 0 0 0 1px #b5b5b5;
    background: $c_light;

    &::before,
    &::after {
      opacity: 1;
    }
  }

  &_clear.avatar_male {
    box-shadow: inset 0 0 0 1px $c_info;
  }

  &_clear.avatar_female {
    box-shadow: inset 0 0 0 1px $c_primary;
  }

  &__photo {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
