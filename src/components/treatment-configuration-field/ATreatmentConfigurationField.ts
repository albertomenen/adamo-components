import { Component, Vue } from 'vue-property-decorator'

@Component({
  props: {
    icon: {
      type: String,
      default: null
    },
    label: {
      type: String,
      default: null
    },
    inputWidth: {
      type: String,
      default: '125px'
    },
    round: Boolean,
    placeholder: String
  },

  components: {
    RoundIcon: () => import('../round-icon/ARoundIcon.vue')
  }
})
export default class ATreatmentConfigurationField extends Vue {}
