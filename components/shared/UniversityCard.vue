<template>
  <ui-box>
    <div class="about">
      <div class="main">
        <header>
          <nuxt-link :to="'/universities/' + university.slug" class="logo">
            <img :src="university.logo" alt="">
          </nuxt-link>
          <h3>
            <nuxt-link :to="'/universities/' + university.slug">
              {{ university.name }}
            </nuxt-link>
          </h3>
          <Location
            class="location"
            :country="{name: university.location.country.name, slug: university.location.country.slug}"
            :city="{name: university.location.city.name, slug: university.location.city.slug}"
          />
        </header>

        <section>
          <p>{{ university.text }}</p>
        </section>
      </div>

      <div class="side">
        <div class="poster">
          <img :src="university.poster" alt="">
        </div>
        <div v-if="university.processing_time_from || university.processing_time_to" class="processing">
          <span class="view">
            <ui-icon name="calendar-alt" class="icon" />
          </span>
          <span class="label">
            <template v-if="university.processing_time_from">{{ university.processing_time_from }}</template>
            <template v-if="university.processing_time_from && university.processing_time_to">-</template>
            <template v-if="university.processing_time_to">{{ university.processing_time_to }}</template>
            Overage processing time
          </span>
        </div>
      </div>
    </div>

    <div class="cost">
      <div class="international">
        <b>{{ university.price.currency }} {{ university.price.international }}</b>
        <span>International</span>
      </div>
      <div class="domestic">
        <b>{{ university.price.currency }} {{ university.price.domestic }}</b>
        <span>Domestic</span>
      </div>
      <div class="living">
        <b>{{ university.price.currency }} {{ university.price.living }}</b>
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
            <em v-for="exam in university.exams">{{ exam }}</em>
          </span>
        </div>

        <div class="param">
          <span class="view">
            <ui-icon name="comment-alt" class="icon" />
          </span>
          <span class="label">{{ university.review }}</span>
        </div>

        <div class="param">
          <span class="view">
            <ui-icon name="file-alt" class="icon" />
          </span>
          <span class="label">{{ university.degree }}</span>
        </div>

        <div class="param">
          <span class="view">
            <ui-icon name="map-marker" class="icon" />
          </span>
          <span v-for="type in university.type" class="label">{{ type }}</span>
        </div>

        <div class="param">
          <span class="view">
            <ui-icon name="location-arrow" class="icon" />
          </span>
          <span class="label">{{ university.price.currency }} {{ university.price.application_fee }}</span>
        </div>

        <div class="param">
          <span class="view">
            <ui-icon name="clock" class="icon" />
          </span>
          <span class="label">{{ university.months }}</span>
        </div>
      </div>

      <div class="action">
        <ui-button :href="'/universities/' + university.slug" type="primary" outline wide>Read More</ui-button>
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
    university: {
      type: Object,
      default () {
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

  .btn {
    text-decoration: none;
  }
}
</style>
