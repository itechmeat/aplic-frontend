import Vue from 'vue'
import Container from '../components/ui/Container.vue'
import Section from '../components/ui/Section.vue'
import Box from '../components/ui/Box.vue'
import Spinner from '../components/ui/Spinner.vue'
import Icon from '../components/ui/Icon.vue'
import Button from '../components/ui/Button.vue'
import Input from '../components/ui/Input.vue'
import FormField from '../components/ui/FormField.vue'
import Avatar from '../components/ui/Avatar.vue'

import LeftCenter from '../components/grid/LeftCenter.vue'

Vue.component('ui-container', Container);
Vue.component('ui-section', Section);
Vue.component('ui-box', Box);
Vue.component('ui-spinner', Spinner);
Vue.component('ui-icon', Icon);
Vue.component('ui-button', Button);
Vue.component('ui-input', Input);
Vue.component('ui-form-field', FormField);
Vue.component('ui-avatar', Avatar);

Vue.component('grid-left-center', LeftCenter);
