<template>
  <grid-left-center>
    <ui-box slot="head">
      <header>
        <img :src="university.logo" alt="">
        <h1>
          <nuxt-link :to="'/universities/' + university.slug">
            {{ university.name }}
          </nuxt-link>
        </h1>
        <Location
          v-if="university"
          class="location"
          :country="country"
          :city="city"
        />
        <div class="site">
          <ui-icon name="globe" class="icon" />
          <a href="http://google.com">http://google.com</a>
        </div>
      </header>
    </ui-box>

    <side-menu slot="left" :list="sections" />

    <div class="content">
      <div v-if="!isReady" class="loading">
        <ui-spinner />
      </div>
      <article v-else class="university">
        <section class="programs">
          <ui-box>
            <h2>Page of program</h2>
          </ui-box>
        </section>
      </article>
    </div>
  </grid-left-center>
</template>

<script>
import Location from '@/components/shared/Location';
import SideMenu from '@/components/shared/SideMenu'

import UNIVERSITY from '../../../../data/university.json'

export default {
  components: {
    Location,
    SideMenu,
  },

  mounted () {
    this.university = UNIVERSITY;
    setTimeout(() => {
      this.isReady = true;
    }, 300);
  },

  data () {
    return {
      university: UNIVERSITY,
      isReady: false,
      sections: [
        { link: '#overview', text: 'Program overview'},
        { link: '#study', text: 'Study options'},
        { link: '#campus', text: 'Campus location'},
        { link: '#programs', text: 'Similar programs'},
      ],
    };
  },

  computed: {
    country () {
      if (!this.isReady) {
        return;
      }
      return {
        name: this.university.location.country.name,
        slug: this.university.location.country.slug,
      }
    },

    city () {
      if (!this.isReady) {
        return;
      }
      return {
        name: this.university.location.city.name,
        slug: this.university.location.city.slug,
      }
    },
  },

  head: {
    title: 'Choose your university',
    meta: [
      { hid: 'description', name: 'description', content: 'Universities page description' },
    ],
  },
};
</script>

<style lang="scss" scoped>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 48px;
    margin-right: $g/2;
  }
}

h1 {
  margin: 0;
  font-size: $fs_large;

  a {
    color: inherit;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
}

.location {
  margin-left: auto;
}

.site {
  margin-left: $g;
  font-size: $fs_small;
}

.loading {
  position: relative;
  height: 100px;
  opacity: .3;
}

.university:not(:first-child) {
  margin-top: $g;
}

.programs {
  h2 {
    margin: 0 0 10px;
  }

  p {
    padding: 0 $g;
    text-align: right;
  }
}
</style>
