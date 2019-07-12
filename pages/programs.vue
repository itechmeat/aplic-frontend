<template>
  <grid-left-center>
    <program-filter slot="left" />

    <div class="programs">
      <div v-if="!isReady" class="loading">
        <ui-spinner />
      </div>
      <article v-else v-for="program in programs" :key="program._id" class="program">
        <program-card :program="program" />
      </article>
    </div>
  </grid-left-center>
</template>

<script>
import ProgramFilter from '@/components/shared/ProgramFilter'
import ProgramCard from '@/components/shared/ProgramCard'

import programsList from '@/data/programs.json'

export default {
  components: {
    ProgramFilter,
    ProgramCard,
  },

  mounted() {
    setTimeout(() => {
      this.programs = programsList.programs;
      this.isReady = true;
    }, 300);
  },

  data() {
    return {
      programs: [],
      isReady: false,
    };
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
