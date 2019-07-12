<template>
  <ui-box class="filter">
    <h3>Subject of interest</h3>

    <div v-if="value.text !== null" class="row">
      <ui-form-field label="Search">
        <ui-input v-model="value.text" type="text" name="text" placeholder="Input your text" />
      </ui-form-field>
    </div>

    <div v-if="value.location !== null" class="row">
      <ui-form-field label="location">
        <ui-input v-model="value.location" type="text" name="location" placeholder="Choose location" />
      </ui-form-field>
    </div>

    <div v-if="value.degree !== null" class="row">
      <ui-form-field label="Degree type">
        <ui-input v-model="value.degree" type="text" name="degree" placeholder="Choose degree" />
      </ui-form-field>
    </div>

    <div class="row submit">
      <ui-button type="success">Submit</ui-button>
    </div>
  </ui-box>
</template>

<script>
export default {
  props: {
    value: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.filter {
  position: sticky;
  top: $g_header + $g;
}

h3 {
  margin: 0 0 10px;
  font-weight: 400;
}

.row {
  margin-top: $g/2;
}

.submit {
  margin-top: $g;
  text-align: center;
}
</style>
