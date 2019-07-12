<template>
  <div class="board">
    <aside>
      <program-filter />
    </aside>

    <main>
      <div class="programs">
        <article v-for="program in programs" :key="program._id" class="program">
          <program-card :program="program" />
        </article>
      </div>
    </main>
  </div>
</template>

<script>
import ProgramFilter from '../components/shared/ProgramFilter'
import ProgramCard from '../components/shared/ProgramCard'

import programsList from '../data/programs.json'

export default {
  components: {
    ProgramFilter,
    ProgramCard,
  },

  beforeMount() {
    this.programs = programsList.programs;
  },

  data() {
    return {
      programs: [],
    };
  },
};
</script>

<style lang="scss" scoped>
.board {
  flex: 1;
  display: flex;
}

aside {
  flex: 0 0 276px;
  margin-right: $g*2;
}

main {
  flex: 1;
}

.program:not(:first-child) {
  margin-top: $g;
}
</style>
