/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { PropType } from 'vue'
import { Component, Prop, Vue } from 'vue-property-decorator'
import { Treatment } from '../../../types/resources/treatment.model'
import { getThermicData, hexToTemperature } from '../../../utils/thermic'
import moment from 'moment'

const minX = -0.12
const minY = -0.93

const coordinateOffsetX = 0.44 // 0.52 Originalmente
const coordinateOffsetY = 0.48 // 0.52 Originalmente
const percentageOffsetX = 100 / coordinateOffsetX // 192.3076923076923
const percentageOffsetY = 100 / coordinateOffsetY // 192.3076923076923

const imageHeight = 400
const imageWidth = 300
const squareSize = 15

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

  beforeMount() {
    for (const session of this.treatment.sessions) {
      this.thermicMatrix.push(getThermicData(session.image_thermic_data))
      this.thermicSensor.push(
        { 'x': 0, 'y': 0, 'temperature': 0, 'show': false }
      )
    }
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

  getThermicImg (image: string): string {
    return `data:image/png;base64,${image}`
  }

  thermicMatrix: any[] = []
  thermicSensor: any[] = []

  coordinateBoxStyles = {
    position: 'absolute',
    bottom: '0',
    left: `0`,
    right: '0',
    margin: 'auto',
    height: `${boxHeight}px`,
    width: `${boxWidth}px`,
    'z-index': '0'
  }

  canvasOverlay = {
    height: `100%`,
    width: `100%`,
    position: 'absolute',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    pointerEvent: 'none',
    'z-index': '1'
  }

  stageConfig = {
    height: `400`,
    width: `300`
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

  getSquareValue (session: number, val: string): number {
    const square = this.thermicSensor[session-1]
    return square[val]
  }

  getThermicValue ({x, y, height, width, session}): void {
    if((this.thermicMatrix.length > 0) && (x > 0 && y > 0)) {
      const percentX = (x * 100) / height
      const percentY = (y * 100) / width

      const resizeX = Math.round((percentX * 320) / 100)
      const resizeY = Math.round((percentY * 256) / 100)
      const matrix = this.thermicMatrix[session-1]
      
      this.thermicSensor[session-1].temperature = this.getThermicArea(resizeX, resizeY, matrix)
    }
  }

  getThermicArea (x: number, y: number, matrix: number): number {
    const tempArray: number[] = []

    for (let i = x; i < (x+squareSize); i++) {
      for (let j = y; j < (y+squareSize); j++) {
        const tempValue = matrix[i][j]
        if(tempValue>0) {
          tempArray.push(tempValue)
        }
      }
    }

    const total = tempArray.reduce((a, b) => a + b, 0)
    return Math.round((total / tempArray.length) * 1e2) / 1e2
  }

  draw (x: number, y: number, session: number): void {
    const square = this.thermicSensor[session-1]
    square.x = x
    square.y = y

    if (!square.show) {
      square.show = true 
    }
  }

  handleClick (event, session: number): void {
    const x = event.offsetX - squareSize / 2
    const y = event.offsetY - squareSize / 2

    //La imagen esta volteada, por lo que cambiaremos los ejes para que las coordenadas sean las correctas.
    const thermicObj = {
      x: y,
      y: x,
      height: event.currentTarget.offsetHeight,
      width: event.currentTarget.offsetWidth,
      session
    }

    this.getThermicValue(thermicObj)
    this.draw(x, y, session)
  }
}
