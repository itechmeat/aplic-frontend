<template>
  <grid-main>
    <ui-box slot="head">
      <h1>Select your University</h1>
    </ui-box>

    <program-filter slot="left" v-model="filter" />

    <div class="programs">
      <div v-if="!isReady" class="loading">
        <ui-spinner />
      </div>
      <article v-else v-for="university in universities" :key="university.slug" class="program">
        <university-card :university="university" />
      </article>
    </div>
  </grid-main>
</template>

<script>
import ProgramFilter from '@/components/shared/ProgramFilter';
import UniversityCard from '@/components/shared/UniversityCard';

import universitiesList from '@/data/universities.json';

export default {
  components: {
    ProgramFilter,
    UniversityCard,
  },

  mounted() {
    setTimeout(() => {
      this.universities = universitiesList.universities;
      this.isReady = true;
    }, 300);
  },

  data() {
    return {
      universities: [],
      filter: {
        text: '',
        location: '',
        degree: '',
      },
      isReady: false,
    };
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
h1 {
  margin: 0;
}

.loading {
  position: relative;
  height: 100px;
  opacity: .3;
}

.program:not(:first-child) {
  margin-top: $g;
}
</style>
