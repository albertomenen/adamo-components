/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

// Plugins
import NotificationPlugin from './src/plugins/notification'
import ModalPlugin from './src/plugins/modal'

// Components
import AInput from './src/components/input/AInput.vue'
import ADropdownItem from './src/components/dropdown-item/ADropdownItem.vue'
import ATableMenu from './src/components/table-menu/ATableMenu.vue'
import AStepper from './src/components/stepper/AStepper.vue'
import ACalendar from './src/components/calendar/ACalendar.vue'

// Modals
import AModalSchedule from './src/components/modals/schedule-modal/AModalSchedule.vue'
import AModalObservations from './src/components/modals/observations-modal/AModalObservations.vue'
import AModalThermographicImage from './src/components/modals/thermographic-image-modal/AModalThermographicImage.vue'

// Forms
import AFormUserSteps from './src/components/forms/user-steps-form/AFormUserSteps.vue'
import AFormPatientSteps from './src/components/forms/patient-steps-form/AFormPatientSteps.vue'

// Plugins
import PortalVue from 'portal-vue'
import ALottie from './src/components/lottie/ALottie.vue'


export default {
  install (Vue) {
    // Register plugins
    NotificationPlugin(Vue)
    ModalPlugin(Vue)

    // Register components
    Vue.component('AInput', AInput)
    Vue.component('ADropdownItem', ADropdownItem)
    Vue.component('ATableMenu', ATableMenu)
    Vue.component('AStepper', AStepper)
    Vue.component('ACalendar', ACalendar)

    // Register modals
    Vue.component('AModalSchedule', AModalSchedule)
    Vue.component('AModalObservations', AModalObservations)
    Vue.component('AModalThermographicImage', AModalThermographicImage)

    // Register forms
    Vue.component('AFormUserSteps', AFormUserSteps);
    Vue.component('AFormPatientSteps', AFormPatientSteps);

    // Register plugins
    Vue.use(PortalVue)
    Vue.component('ALottie', ALottie)
  }
}
