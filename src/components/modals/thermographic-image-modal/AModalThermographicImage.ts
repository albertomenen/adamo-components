/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { PropType } from 'vue'
import { Component, Prop, Vue } from 'vue-property-decorator'
import { Treatment } from '../../../types/resources/treatment.model'
import moment from 'moment'
import Jimp from 'jimp'
import cv from '@techstark/opencv-js'

const minX = -0.12
const minY = -0.93

const coordinateOffsetX = 0.44 // 0.52 Originalmente
const coordinateOffsetY = 0.48 // 0.52 Originalmente
const percentageOffsetX = 100 / coordinateOffsetX // 192.3076923076923
const percentageOffsetY = 100 / coordinateOffsetY // 192.3076923076923

const imageHeight = 400
const imageWidth = 300

const boxHeight = imageHeight * 0.7
const boxWidth = imageWidth * 0.8

const getPercentage = (_y, _x) => {
  const x = 100 - ((_x + Math.abs(minX)) * percentageOffsetX)
  const y = 100 - (( _y + Math.abs(minY)) * percentageOffsetY)

  return { x, y }
}

@Component
export default class AModalThermographicImage extends Vue {
  @Prop({
    type: Boolean,
    default: false
  }) showModal!: boolean

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
    bottom: '0',
    left: `0`,
    right: '0',
    margin: 'auto',
    height: `${boxHeight}px`,
    width: `${boxWidth}px`
  }

  temperatureStyles = {
    position: 'absolute',
    top: `0`,
    left: `0`,
    width: '100px',
    height: '100px',
    borderRadius: '100%',
    backgroundColor: '',
    color: 'white'
  }

  temperatureValue = 0

  setTemperature (x, y, value, color) {
    this.temperatureStyles.top = `calc(${y}% - 10px)`
    this.temperatureStyles.left = `calc(${x}% - 10px)`
    this.temperatureStyles.backgroundColor = `rgb(${color.r}, ${color.g}, ${color.b})`
    this.temperatureValue = value
  }

  getCoordinate (point: any) {
    const position = getPercentage(point.x, point.y)

    return {
      position: 'absolute',
      top: `calc(${position.y}% - 10px)`,
      left: `calc(${position.x}% - 10px)`,
      width: '20px',
      height: '20px',
      borderRadius: '100%'
    }
  }

  async getPixels (event, imagepath: string): Promise<void> {
    try {
      const x = event.x
      const y = event.y
      const image = this.getThermic(imagepath)

      const gray16_image = cv.imread(event.target)
      const pixel_gray16 = gray16_image.ushortPtr(y, x)[0]

      //calculate temperature value in ° C
      const pixel_value_gray16 = (pixel_gray16 * 0.04) - 273.15
      gray16_image.delete()

      const hex = await Jimp.read(image, function (err, img) { return img.getPixelColor(x, y) })
      const rgb = await Jimp.intToRGBA(hex) 

      this.setTemperature(x, y, pixel_value_gray16, rgb)
    } catch (err) {
      console.log(err)
    }
  }
}
