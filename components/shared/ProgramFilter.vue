<template>
  <ui-box class="filter">
    <h3>Subject of interest</h3>

    <div class="row">
      <ui-form-field>
        <ui-input type="text" name="name" value="Input your text" />
      </ui-form-field>
    </div>

    <div class="row">
      <ui-form-field>
        <ui-input type="text" name="name" value="Location" />
      </ui-form-field>
    </div>

    <div class="row">
      <ui-form-field>
        <ui-input type="text" name="name" value="Degree type" />
      </ui-form-field>
    </div>

    <div class="row submit">
      <ui-button type="success">Submit</ui-button>
    </div>
  </ui-box>
</template>

<style lang="scss" scoped>
.filter {
  position: sticky;
  top: $g_header + $g;
}

.row {
  margin-top: 20px;
}

.submit {
  text-align: center;
}
</style>
