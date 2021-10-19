/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Treatment } from '../../../types/resources/treatment.model'
import { PropType } from 'vue'
import { Component, Prop, Vue } from 'vue-property-decorator'
import moment from 'moment'

const minX = -0.11
const minY = -0.95

const coordinateOffset = 0.52
const percentageOffset = 100 / coordinateOffset // 192.3076923076923

const offsetTop = 56
const offsetLeft = 18

const imageHeight = 400
const imageWidth = 300

const boxHeight = imageHeight * 0.4
const boxWidth = imageWidth * 0.8

const getPercentage = (_y, _x) => {
  const x = (_x + Math.abs(minX)) * percentageOffset
  const y = ( _y + Math.abs(minY)) * percentageOffset

  return { x, y }
}

@Component
export default class AModalThermographicImage extends Vue {
  @Prop({
    type: Boolean,
    default: false
  }) showModal!: boolean

  @Prop({
    type: Array,
    default: () => ([])
  }) points!: any[]

  @Prop({
    type: Object as () => PropType<Treatment>,
    default: () => null
  }) treatment!: Treatment

  @Prop({
    type: Number,
    default: () => 1
  }) currentSession!: number

  get carouselSession (): number {
    return this.currentSession - 1
  }

  set carouselSession (val: number) {
    this.$emit('update:current-session', val + 1)
  }

  get getTemperature (): string {
    switch (this.treatment.temperature) {
      case 0: return 'Baja'
      case 1: return 'Media'
      case 2: return 'Alta'
    }
    return '-'
  }

  formatDate (date: string): string {
    return moment(date).format('DD / MM / YYYY')
  }

  formatHour (date: string): string {
    return moment(date).format('HH:mm')
  }

  getThermic (image: string): string {
    return `data:image/png;base64,${image}`
  }

  coordinateBoxStyles = {
    position: 'absolute',
    top: `${offsetTop + 150}px`,
    left: `${offsetLeft + 30}px`,
    height: `${boxHeight}px`,
    width: `${boxWidth}px`
  }

  getCoordinate (point: any) {
    const position = getPercentage(point.x, point.y)

    return {
      position: 'absolute',
      top: `calc(${position.y}% - 20px)`,
      left: `calc(${position.x}% - 20px)`,
      width: '20px',
      height: '20px',
      borderRadius: '100%'
    }
  }
}
