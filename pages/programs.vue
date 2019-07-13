<template>
  <grid-main>
    <program-filter slot="left" v-model="filter" @submit="filterPrograms" />

    <div class="programs">
      <div v-if="!isReady" class="loading">
        <ui-spinner />
      </div>
      <ui-box v-else-if="filteredPrograms.length === 0" class="empty">
        Nothing found :(
      </ui-box>
      <article v-else v-for="program in filteredPrograms" :key="program._id" class="program">
        <program-card :program="program" />
      </article>
    </div>
  </grid-main>
</template>

<script>
import ProgramFilter from '@/components/shared/ProgramFilter';
import ProgramCard from '@/components/shared/ProgramCard';

import programsList from '@/data/programs.json';

export default {
  components: {
    ProgramFilter,
    ProgramCard,
  },

  beforeMount() {
    this.allPrograms = programsList.programs;
    this.setFilter();
  },

  mounted() {
    setTimeout(() => {
      this.isReady = true;
    }, 300);
  },

  data() {
    return {
      allPrograms: [],
      filteredPrograms: [],
      filter: {
        text: '',
        location: '',
        degree: '',
      },
      isReady: false,
    };
  },

  methods: {
    setFilter() {
      if (this.$route.query.text) {
        this.filter.text = this.$route.query.text;
      }

      if (this.$route.query.location) {
        this.filter.location = this.$route.query.location;
      }

      if (this.$route.query.degree) {
        this.filter.degree = this.$route.query.degree;
      }

      this.$nextTick(() => {
        this.filterPrograms();
      })
    },

    filterPrograms() {
      this.setQuery();

      if (!this.filter.text && !this.filter.location && !this.filter.degree) {
        this.filteredPrograms = this.allPrograms;
        return;
      }

      let result = [];

      if (this.filter.text !== '') {
        result = this.allPrograms.map(program => {
          if (!program.title.toLowerCase().includes(this.filter.text.toLowerCase())) {
            return;
          }
          return program;
        });
      }

      this.filteredPrograms = result.filter(Boolean);
    },

    setQuery() {
      let result = {};

      Object.keys(this.filter).forEach(item => {
        if (this.filter[item] !== '') {
          result[item] = this.filter[item];
        }
      });

      this.$router.push({path: this.$route.path, query: result})
    },
  },

  head: {
    title: 'Choose your program',
    meta: [
      { hid: 'description', name: 'description', content: 'Programs page description' },
    ],
  },
};
</script>

<style lang="scss" scoped>
.loading {
  position: relative;
  height: 100px;
  opacity: .3;
}

.program:not(:first-child) {
  margin-top: $g;
}
</style>
