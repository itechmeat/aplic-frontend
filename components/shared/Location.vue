<template>
  <div class="location" v-if="country">
    <ui-icon name="map-marker" class="marker" />
    <nuxt-link v-if="city" :to="'/location/' + country.slug + '/' + city.slug" class="city">
      {{ city.name }}
    </nuxt-link>,
    <nuxt-link :to="'/location/' + country.slug" class="country">
      {{ country.name }}
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    country: Object,
    city: Object,
  },
};
</script>

<style lang="scss" scoped>
.location {
  grid-area: location;
  margin-top: 3px;
  color: $c_warning;
  font-size: $fs_small;

  .marker {
    margin-right: 5px;
  }

  a {
    display: inline-block;
    color: inherit;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
