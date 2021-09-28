/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import _Vue from 'vue'

// Plugins
import NotificationPlugin from './src/plugins/notification'
import ModalPlugin from './src/plugins/modal'

// Components
import AInput from './src/components/input/AInput.vue'
import ADropdownItem from './src/components/dropdown-item/ADropdownItem.vue'
import ATableMenu from './src/components/table-menu/ATableMenu.vue'
import AStepper from './src/components/stepper/AStepper.vue'
import ACalendar from './src/components/calendar/ACalendar.vue'
import ALottie from './src/components/lottie/ALottie.vue'
import ATreatmentConfigurationField from './src/components/treatment-configuration-field/ATreatmentConfigurationField.vue'
import ARoundIcon from './src/components/round-icon/ARoundIcon.vue'

// Modals
import AModalSchedule from './src/components/modals/schedule-modal/AModalSchedule.vue'
import AModalObservations from './src/components/modals/observations-modal/AModalObservations.vue'
import AModalThermographicImage from './src/components/modals/thermographic-image-modal/AModalThermographicImage.vue'
import AModalRecoverPass from './src/components/modals/recover-pass-modal/AModalRecoverPass.vue'
import AModalConfirmation from './src/components/modals/confirmation-modal/AModalConfirmation.vue'
import AModalPatientForm from './src/components/modals/patient-form-modal/AModalPatientForm.vue'

// Forms
import AFormUserSteps from './src/components/forms/user-steps-form/AFormUserSteps.vue'
import AFormPatientSteps from './src/components/forms/patient-steps-form/AFormPatientSteps.vue'
import AformUserProfile from './src/components/forms/user-profile-form/AformUserProfile.vue'

// Breadcrumb
import ABreadcrumb from './src/components/breadcrumb/ABreadcrumb.vue'

// Menu
import AMenuUser from './src/components/user-menu/AMenuUser.vue'

// Tables
import ATablePatients from './src/components/tables/table-patients/ATablePatients.vue'
import ATableEmpty from './src/components/tables/empty-table/ATableEmpty.vue'
import ATableTreatments from './src/components/tables/table-treatments/ATableTreatments.vue'

// Pagination
import APagination from './src/components/pagination/APagination.vue'

// Plugins
import PortalVue from 'portal-vue'

// Export default plugin install function
export default {
  install (Vue: typeof _Vue) {
    // Register plugins
    NotificationPlugin(Vue)
    ModalPlugin(Vue)

    // Register components
    Vue.component('AInput', AInput)
    Vue.component('ADropdownItem', ADropdownItem)
    Vue.component('ATableMenu', ATableMenu)
    Vue.component('AStepper', AStepper)
    Vue.component('ACalendar', ACalendar)
    Vue.component('ALottie', ALottie)
    Vue.component('ATreatmentConfigurationField', ATreatmentConfigurationField)
    Vue.component('ARoundIcon', ARoundIcon)

    // Register modals
    Vue.component('AModalSchedule', AModalSchedule)
    Vue.component('AModalObservations', AModalObservations)
    Vue.component('AModalThermographicImage', AModalThermographicImage)
    Vue.component('AModalRecoverPass', AModalRecoverPass)
    Vue.component('AModalConfirmation', AModalConfirmation)
    Vue.component('AModalPatientForm', AModalPatientForm)

    // Register forms
    Vue.component('AFormUserSteps', AFormUserSteps)
    Vue.component('AFormPatientSteps', AFormPatientSteps)
    Vue.component('AformUserProfile', AformUserProfile)

    // Breadcrumb
    Vue.component('ABreadcrumb', ABreadcrumb)

    // Menu
    Vue.component('AMenuUser', AMenuUser)

    // Tables
    Vue.component('ATablePatients', ATablePatients)
    Vue.component('ATableEmpty', ATableEmpty)
    Vue.component('ATableTreatments', ATableTreatments)

    // Pagination
    Vue.component('APagination', APagination)

    // Register third party plugins
    Vue.use(PortalVue)
  }
}

// Export types
export * from './src/types/resources/device.model'
export * from './src/types/resources/group.model'
export * from './src/types/resources/location.model'
export * from './src/types/resources/patient.model'
export * from './src/types/resources/role.model'
export * from './src/types/resources/session.model'
export * from './src/types/resources/station.model'
export * from './src/types/resources/system.model'
export * from './src/types/resources/treatment.model'
export * from './src/types/resources/user.model'
export * from './src/types/point.model'
export * from './src/types/resources/api.model'
