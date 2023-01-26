/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { PropType } from 'vue'
import { Component, Prop, Vue } from 'vue-property-decorator'
import { Treatment } from '../../../types/resources/treatment.model'
import moment from 'moment'
import Jimp from 'jimp'
import cv from '@techstark/opencv-js'
import { Image, loadImage } from 'canvas'
import { JSDOM } from 'jsdom'

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
      //const { x, y } = this.getPixelsCoordinates( event.target, event.x, event.y )
      const x = event.x
      const y = event.y

      // using node-canvas, we an image file to an object compatible with HTML DOM Image and therefore with cv.imread()
      this.installDOM()
      const image = await loadImage( this.getThermic(imagepath) )
      //const image = this.getThermic(imagepath)

      const gray16_image = cv.imread(image)
      //const pixel_gray16 = gray16_image.ushortAt(x, y)
      const pixel_gray16 = gray16_image.ushortPtr(y, x)[0]

      //calculate temperature value in ° C
      const pixel_value_gray16 = (pixel_gray16 * 0.04) - 273.15
      //const pixel_value_gray16 = (pixel_gray16 * 0.01) - 273.15

      console.log(`pixel coordinates x/y ${y}/${x}`)
      console.log('pixel value: ', pixel_gray16)
      console.log('pixel temp: ', pixel_value_gray16)

      gray16_image.delete()

      Jimp.read(image, function (err, img) {
        const hex = img.getPixelColor(x, y)
        console.log( 'pixel color hex ', hex)
      })

    } catch (err) {
      console.log(err)
    }
  }

  getPixelsCoordinates (img, x: number, y: number) {
    const ratioX = img.naturalWidth / img.offsetWidth
    const ratioY = img.naturalHeight / img.offsetHeight

    const domX = x + window.pageXOffset - img.offsetLeft
    const domY = y + window.pageYOffset - img.offsetTop

    const imgX = ( Math.floor(domX * ratioX) ) - 640
    const imgY = ( Math.floor(domY * ratioY) ) - 256

    return { x: imgX, y: imgY }
  }

  // Using jsdom and node-canvas we define some global variables to emulate HTML DOM. Although a complete emulation can be archived, here we only define those globals used by cv.imread() and cv.imshow().
  installDOM() {
    const dom = new JSDOM()
    global.document = dom.window.document
    global.HTMLImageElement = Image as HTMLImageElement
  }
}
