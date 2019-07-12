<template>
  <div class="page-ui">

    <ui-section title="Buttons">
      <ui-box>
        <h2>Styles</h2>
        <ul>
          <li>
            <ui-button>Default</ui-button>
          </li>
          <li>
            <ui-button type="primary">Primary</ui-button>
          </li>
          <li>
            <ui-button type="accent">Accent</ui-button>
          </li>
          <li>
            <ui-button type="success">Success</ui-button>
          </li>
          <li>
            <ui-button type="info">Info</ui-button>
          </li>
          <li>
            <ui-button type="light">Light</ui-button>
          </li>
        </ul>

        <hr>

        <h2>Outline</h2>
        <ul>
          <li>
            <ui-button outline>Default</ui-button>
          </li>
          <li>
            <ui-button outline type="primary">Primary</ui-button>
          </li>
          <li>
            <ui-button outline type="accent">Accent</ui-button>
          </li>
          <li>
            <ui-button outline type="success">Success</ui-button>
          </li>
          <li>
            <ui-button outline type="info">Info</ui-button>
          </li>
          <li>
            <ui-button outline type="light">Light</ui-button>
          </li>
        </ul>

        <hr>

        <h2>Sizes</h2>
        <ul>
          <li>
            <ui-button size="tiny" type="info">Tiny</ui-button>
          </li>
          <li>
            <ui-button size="small" type="info">Small</ui-button>
          </li>
          <li>
            <ui-button size="medium" type="info">Medium</ui-button>
          </li>
          <li>
            <ui-button size="big" type="info">Big button</ui-button>
          </li>
        </ul>

        <hr>

        <h2>Wide button</h2>
        <ul>
          <li style="width: 500px;">
            <ui-button wide type="info">100% width of container</ui-button>
          </li>
        </ul>

        <hr>

        <h2>Button-Link</h2>
        <ul>
          <li>
            <ui-button type="info" href="/">Link to Homepage</ui-button>
          </li>
        </ul>

        <hr>

        <h2>Buttons with icons</h2>
        <ul>
          <li>
            <ui-button icon="search" type="info">Info</ui-button>
          </li>
          <li>
            <ui-button icon="search" type="light">Light</ui-button>
          </li>
          <li>
            <ui-button icon="search">Default</ui-button>
          </li>
          <li>
            <ui-button icon="search" :icon-opacity="30">Icon Opacity</ui-button>
          </li>
          <li>
            <ui-button icon="search" icon-position="right" type="info">Right icon</ui-button>
          </li>
          <li>
            <ui-button icon="search" icon-position="center" type="info"></ui-button> - without text
          </li>
        </ul>

        <ul>
          <li>
            <ui-button icon="search" type="default" outline>Button</ui-button>
          </li>
          <li>
            <ui-button icon="search" type="primary" outline>Button</ui-button>
          </li>
          <li>
            <ui-button icon="search" type="accent" outline>Button</ui-button>
          </li>
          <li>
            <ui-button icon="search" type="success" outline>Button</ui-button>
          </li>
          <li>
            <ui-button icon="search" type="info" outline>Button</ui-button>
          </li>
          <li>
            <ui-button icon="search" type="light" outline>Button</ui-button>
          </li>
        </ul>

        <ul>
          <li>
            <ui-button icon="search" icon-position="center" type="default" outline></ui-button>
          </li>
          <li>
            <ui-button icon="search" icon-position="center" type="primary" outline></ui-button>
          </li>
          <li>
            <ui-button icon="search" icon-position="center" type="accent" outline></ui-button>
          </li>
          <li>
            <ui-button icon="search" icon-position="center" type="success" outline></ui-button>
          </li>
          <li>
            <ui-button icon="search" icon-position="center" type="info" outline></ui-button>
          </li>
          <li>
            <ui-button icon="search" icon-position="center" type="light" outline></ui-button>
          </li>
        </ul>

        <hr>

        <h2>Brand buttons</h2>
        <ul>
          <li>
            <ui-button type="facebook" icon="facebook-f" icon-type="fab" iconFixed>Facebook</ui-button>
          </li>
          <li>
            <ui-button type="twitter" icon="twitter" icon-type="fab" iconFixed>Twitter</ui-button>
          </li>
          <li>
            <ui-button type="google" icon="google" icon-type="fab" iconFixed>Google</ui-button>
          </li>
        </ul>

        <hr>

        <h2>States</h2>
        <ul>
          <li>
            <ui-button disabled>Disabled</ui-button>
          </li>
          <li>
            <ui-button type="primary" disabled>Disabled</ui-button>
          </li>
          <li>
            <ui-button type="accent" disabled>Disabled</ui-button>
          </li>
          <li>
            <ui-button type="success" disabled>Disabled</ui-button>
          </li>
          <li>
            <ui-button type="info" disabled href="/">Disabled</ui-button>
          </li>
          <li>
            <ui-button type="light" disabled>Disabled</ui-button>
          </li>
        </ul>
        <ul>
          <li>
            <ui-button outline disabled>Disabled</ui-button>
          </li>
          <li>
            <ui-button outline type="primary" disabled>Disabled</ui-button>
          </li>
          <li>
            <ui-button outline type="accent" disabled>Disabled</ui-button>
          </li>
          <li>
            <ui-button outline type="success" disabled>Disabled</ui-button>
          </li>
          <li>
            <ui-button outline type="info" disabled href="/">Disabled</ui-button>
          </li>
          <li>
            <ui-button outline type="light" disabled>Disabled</ui-button>
          </li>
        </ul>

        <ul>
          <li>
            <ui-button type="info" :is-loading="loadingButton1" @click="handleLoader1">Click for loading</ui-button>
          </li>
          <li>
            <ui-button type="info" :is-loading="loadingButton2" outline @click="handleLoader2">Click for loading</ui-button>
          </li>
          <li>
            <ui-button type="info" :is-loading="loadingButton3" icon="search" @click="handleLoader3">Click for loading</ui-button>
          </li>
          <li>
            <ui-button type="info" :is-loading="loadingButton4" icon="search" icon-position="center" @click="handleLoader4"></ui-button>
          </li>
        </ul>
      </ui-box>
    </ui-section>

    <ui-section title="Form controls">
      <ui-box>
        <h2>Inputs</h2>
        <ul>
          <li style="width: 240px;">
            <ui-form-field label="Simple input">
              <ui-input type="text" name="name" value="Text in input" />
            </ui-form-field>
          </li>
          <li style="width: 240px;">
            <ui-form-field label="Disabled input">
              <ui-input type="text" name="name" disabled value="Text in input" />
            </ui-form-field>
          </li>
        </ul>
        <ul>
          <li style="width: 240px;">
            <ui-form-field label="Big simple input">
              <ui-input type="text" name="name" size="big" placeholder="Input some text" />
            </ui-form-field>
          </li>
        </ul>
        <ul>
          <li style="width: 240px;">
            <ui-form-field label="Small simple input">
              <ui-input type="text" name="name" size="small" placeholder="Input some text" />
            </ui-form-field>
          </li>
        </ul>
        <ul>
          <li style="width: 240px;">
            <ui-form-field label="Input with icon">
              <ui-input type="text" name="name" icon="search" value="Text in input" />
            </ui-form-field>
          </li>
          <li style="width: 240px;">
            <ui-form-field label="Input with right icon">
              <ui-input type="text" name="name" icon="search" icon-position="right" value="Text in input" />
            </ui-form-field>
          </li>
        </ul>
        <ul>
          <li style="width: 240px;">
            <ui-form-field label="Input with icon">
              <ui-input type="text" name="name" value="Text in input" appendix="aplic.io/" />
            </ui-form-field>
          </li>
          <li style="width: 240px;">
            <ui-form-field label="Input with right icon">
              <ui-input type="text" name="name" icon="search" :icon-opacity="50" value="Text in input" appendix="aplic.io/" />
            </ui-form-field>
          </li>
          <li style="width: 240px;">
            <ui-form-field label="Input with right icon">
              <ui-input type="text" name="name" icon="search" :icon-opacity="50" icon-position="right" value="Text in input" appendix="aplic.io/" />
            </ui-form-field>
          </li>
        </ul>
      </ui-box>
    </ui-section>

    <ui-section title="Avatars">
      <ui-box>
        <ul>
          <li>
            <ui-avatar />
          </li>
          <li>
            <ui-avatar sex="male"/>
          </li>
          <li>
            <ui-avatar sex="female"/>
          </li>
          <li>
            <ui-avatar clear />
          </li>
          <li>
            <ui-avatar clear sex="male"/>
          </li>
          <li>
            <ui-avatar clear sex="female"/>
          </li>
          <li>
            <ui-avatar photo="/images/avatar_male.jpg" name="Avatar" />
          </li>
          <li>
            <ui-avatar photo="/images/avatar_female.jpg" name="Avatar" />
          </li>
        </ul>
        <ul>
          <li>
            <ui-avatar :size="48" />
          </li>
          <li>
            <ui-avatar :size="72" sex="male"/>
          </li>
          <li>
            <ui-avatar :size="116" sex="female"/>
          </li>
          <li>
            <ui-avatar :size="116" clear sex="male"/>
          </li>
          <li>
            <ui-avatar :size="116" photo="/images/avatar_male.jpg" name="Avatar" />
          </li>
          <li>
            <ui-avatar :size="116" photo="/images/avatar_female.jpg" name="Avatar" clear />
          </li>
        </ul>
      </ui-box>
    </ui-section>

  </div>
</template>

<script>
export default {
  data () {
    return {
      loadingButton1: false,
      loadingButton2: false,
      loadingButton3: false,
      loadingButton4: false,
    };
  },

  methods: {
    handleLoader1 () {
      this.loadingButton1 = true;
      setTimeout(() => {
        this.loadingButton1 = false;
      }, 5000)
    },

    handleLoader2 () {
      this.loadingButton2 = true;
      setTimeout(() => {
        this.loadingButton2 = false;
      }, 5000)
    },

    handleLoader3 () {
      this.loadingButton3 = true;
      setTimeout(() => {
        this.loadingButton3 = false;
      }, 5000)
    },

    handleLoader4 () {
      this.loadingButton4 = true;
      setTimeout(() => {
        this.loadingButton4 = false;
      }, 5000)
    },
  },

  head: {
    title: 'UI Kit',
    meta: [
      { hid: 'description', name: 'description', content: 'description' },
    ],
  },
};
</script>

<style lang="scss" scoped>
.page-ui {
  flex: 1 1 auto;
}

ul {
  @extend %resetList;
  display: flex;
  flex-wrap: wrap;
}

li {
  margin: 4px;
}
</style>
