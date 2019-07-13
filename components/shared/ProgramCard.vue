<template>
  <ui-box>
    <div class="about">
      <div class="main">
        <header>
          <nuxt-link :to="'/universities/' + program.university.slug" class="logo">
            <img :src="program.university.logo" alt="">
          </nuxt-link>
          <h3>
            <nuxt-link :to="'/universities/' + program.university.slug + '/programs/' + program.slug">
              {{ program.title }}
            </nuxt-link>
          </h3>
          <div class="university">
            <nuxt-link :to="'/universities/' + program.university.slug">
              {{ program.university.name }}
            </nuxt-link>
          </div>
          <Location
            class="location"
            :country="{name: program.university.location.country.name, slug: program.university.location.country.slug}"
            :city="{name: program.university.location.city.name, slug: program.university.location.city.slug}"
          />
          <div class="location">
            <ui-icon name="map-marker" class="marker" />
            <nuxt-link :to="'/location/' + program.university.location.country.slug + '/' + program.university.location.city.slug" class="city">
              {{ program.university.location.city.name }}
            </nuxt-link>,
            <nuxt-link :to="'/location/' + program.university.location.country.slug" class="country">
              {{ program.university.location.country.name }}
            </nuxt-link>
          </div>
        </header>

        <section>
          <p>{{ program.text }}</p>
        </section>
      </div>

      <div class="side">
        <div class="poster">
          <img :src="program.university.poster" alt="">
        </div>
        <div v-if="program.university.processing_time_from || program.university.processing_time_to" class="processing">
          <span class="view">
            <ui-icon name="calendar-alt" class="icon" />
          </span>
          <span class="label">
            <template v-if="program.university.processing_time_from">{{ program.university.processing_time_from }}</template>
            <template v-if="program.university.processing_time_from && program.university.processing_time_to">-</template>
            <template v-if="program.university.processing_time_to">{{ program.university.processing_time_to }}</template>
            Overage processing time
          </span>
        </div>
      </div>
    </div>

    <div class="cost">
      <div class="international">
        <b>{{ program.price.currency }} {{ program.price.international }}</b>
        <span>International</span>
      </div>
      <div class="domestic">
        <b>{{ program.price.currency }} {{ program.price.domestic }}</b>
        <span>Domestic</span>
      </div>
      <div class="living">
        <b>{{ program.price.currency }} {{ program.price.living }}</b>
        <span>Living cost</span>
      </div>
    </div>

    <footer>
      <div class="info">
        <div class="param">
          <span class="view">
            <ui-icon name="briefcase" class="icon" />
          </span>
          <span class="label">
            <em v-for="exam in program.exams">{{ exam }}</em>
          </span>
        </div>

        <div class="param">
          <span class="view">
            <ui-icon name="comment-alt" class="icon" />
          </span>
          <span class="label">{{ program.review }}</span>
        </div>

        <div class="param">
          <span class="view">
            <ui-icon name="file-alt" class="icon" />
          </span>
          <span class="label">{{ program.degree }}</span>
        </div>

        <div class="param">
          <span class="view">
            <ui-icon name="map-marker" class="icon" />
          </span>
          <span v-for="type in program.type" class="label">{{ type }}</span>
        </div>

        <div class="param">
          <span class="view">
            <ui-icon name="location-arrow" class="icon" />
          </span>
          <span class="label">{{ program.price.currency }} {{ program.price.application_fee }}</span>
        </div>

        <div class="param">
          <span class="view">
            <ui-icon name="clock" class="icon" />
          </span>
          <span class="label">{{ program.months }}</span>
        </div>
      </div>

      <div class="action">
        <ui-button type="primary" outline wide>Apply</ui-button>
      </div>
    </footer>
  </ui-box>
</template>

<script>
import Location from '../../components/shared/Location';

export default {
  components: {
    Location,
  },

  props: {
    program: {
      type: Object,
      default() {
        return null;
      },
    },
  },
};
</script>

<style lang="scss" scoped>
$side_width: 224px;

.card {
  display: flex;
}

.about {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

header {
  display: grid;
  grid-template-columns: 64px 1fr;
  grid-template-areas:
    "logo title"
    "logo university"
    "logo location";
}

.logo {
  grid-area: logo;
  display: inline-block;
  margin-right: $g;

  img {
    width: 100%;
    vertical-align: bottom;
  }
}

h3 {
  grid-area: title;
  margin: -6px 0 0;
  line-height: 1.5;

  a {
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
}

.university {
  grid-area: university;
  font-size: $fs_small;

  a {
    color: inherit;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
}

.location {
  grid-area: location;
  margin-top: 3px;
  color: $c_danger;
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

section {
  margin-top: $g;
}

.side {
  flex: 0 0 $side_width;
  margin-left: $g;

  img {
    width: 100%;
    border-radius: 5px;
    vertical-align: bottom;
  }
}

.processing {
  display: flex;
  margin: $g/2 $g/2 0;
  font-size: $fs_small;

  .label {
    color: $c_primary;
  }
}

.cost {
  display: flex;
  justify-content: space-between;
  margin: $g 0 0;
  padding: $g 0;
  border: solid $c_border;
  border-width: 1px 0;
  color: $c_text_secondary;
  font-size: $fs_small;

  div {
    flex: 1 1 33%;
  }

  b {
    color: $c_primary;
  }

  span {
    margin-left: 10px;
  }
}

footer {
  display: flex;
  justify-content: center;
  align-items: center;
}

.info {
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: $g/2 0 0;
}

.param {
  flex: 0 0 30%;
  display: flex;
  align-items: center;
  margin: $g/2 3% 0 0;
  color: $c_text_secondary;
  font-size: $fs_small;
}

.label {
  margin-left: 10px;

  em {
    display: inline-block;
    font-style: normal;

    &:not(:last-child) {
      margin-right: 3px;

      &::after {
        content: ',';
      }
    }
  }
}

.action {
  flex: 0 0 $side_width;
  margin: $g 0 0 $g;
  padding: 0 $g;
  text-align: center;
}
</style>
