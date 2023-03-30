/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { PropType } from 'vue'
import { Component, Prop, Vue } from 'vue-property-decorator'
import { Treatment } from '../../../types/resources/treatment.model'
import { getThermicData } from '../../../utils/thermic'
import moment from 'moment'

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

  mounted() {
    this.dataMatrix = this.treatment.sessions.map( session => {
      return getThermicData(session.image_thermic_data)
    })
    this.squares = this.treatment.sessions.map( session => {
      return {
        'x': 0,
        'y': 0,
        'show': false
      }
    })
  }

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

  currentImage: string | null = ''
  dataMatrix: any[] = []
  squares: any[] = []
  squareWidth: number = 15
  squareHeight: number = 15
  temperatureValue: number = 0

  coordinateBoxStyles = {
    position: 'absolute',
    bottom: '0',
    left: `0`,
    right: '0',
    margin: 'auto',
    height: `${boxHeight}px`,
    width: `${boxWidth}px`
  }

  canvasOverlay = {
    position: 'absolute',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    pointerEvent: 'none',
    height: `${imageHeight}px`,
    width: `${imageWidth}px`
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

  /* setTemperature (x, y, value, color) {
    this.temperatureStyles.top = `calc(${y}% - 10px)`
    this.temperatureStyles.left = `calc(${x}% - 10px)`
    this.temperatureStyles.backgroundColor = `rgb(${color.r}, ${color.g}, ${color.b})`
    this.temperatureValue = value
  } */

/*   getPixels (event, session): void {
    // la imagen esta volteada, por lo que debemos cambiar las coordenadas    
    const x = event.offsetY;
    const y = event.offsetX;

    if((this.dataMatrix.length > 0) && (x > 0 && y > 0)) {
      const height = event.currentTarget.offsetHeight
      const width = event.currentTarget.offsetWidth

      const percentX = (x * 100) / height
      const percentY = (y * 100) / width

      const resizeX = Math.round((percentX * 320) / 100)
      const resizeY = Math.round((percentY * 256) / 100)

      const matrix = this.dataMatrix[session-1]
      const pixelValue = matrix[resizeX][resizeY]

      this.temperatureValue = this.hexToTemperature(pixelValue)
    }
  } */

  draw (event, session): void {
    const x = event.evt.x - 30 / 2;
    const y = event.evt.y - 30 / 2;

    this.squares[session].x = x
    this.squares[session].y = y
    if (!this.squares[session].show) {
      this.squares[session].show = true 
    }
  }

/*   setArea (event, ref): void {
    let c = this.$refs[ref]

    if (!c) {
      throw new Error('Failed to get reference element');
    }

    const reference: HTMLCanvasElement = c[0]
    const ctx = reference.getContext('2d')
    
    if (!ctx ) {
      throw new Error('Failed to get 2D context');
    }

    const canvas: CanvasRenderingContext2D  = ctx
    const x = event.offsetX - 30 / 2
    const y = event.offsetY - 30 / 2

    canvas.beginPath()
    canvas.rect(x, y, 30, 30);
    canvas.stroke()

    if(!this.rectangle) {
      this.rectanglePath.clx = event.clientX - event.offsetLeft;
      this.rectanglePath.cly = event.clientY - event.offsetTop;
      ctx.moveTo(this.rectanglePath.clx, this.rectanglePath.cly);
      this.rectangle = 1
    } else {
      this.rectanglePath.ulx = event.clientX - event.offsetLeft;
      this.rectanglePath.uly = event.clientY - event.offsetTop;
      ctx.beginPath();
      ctx.moveTo(this.rectanglePath.ulx, this.rectanglePath.uly);
      ctx.strokeRect(this.rectanglePath.clx, this.rectanglePath.cly, this.rectanglePath.ulx - this.rectanglePath.clx, this.rectanglePath.uly - this.rectanglePath.cly);
      ctx.stroke();
      this.rectangle = 0
    } 
  } */

  hexToTemperature (hex): number {
    const num = parseInt(hex, 16)
    const fixedNum = (num * 0.04) - 273.15
    return Math.round( fixedNum * 1e2 ) / 1e2;
  }
}
