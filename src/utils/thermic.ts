const imgSize = {
  'A50': {
    'width': 464,
    'height': 348
  },
  'A35': {
    'width': 320,
    'height': 256
  }
}

function base64ToHex (str: string): string {
    const raw = atob(str)
    let result = ''
    for (let i = 0; i < raw.length; i++) {
      const hex = raw.charCodeAt(i).toString(16)
      result += (hex.length === 2 ? hex : '0' + hex)
    }
    return result.toUpperCase()
}

function HexToArray (data: string, imgConfig): Array<Array<number>> {
    const tempArray: number[][] = []
    let count = 0
    for (let i = 0; i < imgSize[imgConfig].width; i++) {
      tempArray[i] = []
    }
    for (let i = 0; i < imgSize[imgConfig].height; i++) {
      for (let j = 0; j < imgSize[imgConfig].width; j++) {
        const hex = data.slice(count, count + 4)
        tempArray[j][i] = hexToTemperature(hex, imgConfig)
        count += 4
      }
    }
    return tempArray
}

export function getThermicMatrix(thermicImage: string, imgConfig: string): Array<Array<number>> {
    const bufString = base64ToHex(thermicImage)
    return HexToArray(bufString, imgConfig)
}

function getThermicArea (x: number, y: number, squareSize: number, matrix: Array<Array<number>>): number {
  const tempArray: number[] = []
  for (let i = x; i < (x+squareSize); i++) {
    for (let j = y; j > (y-squareSize); j--) {
      const tempValue = matrix[i][j]
      if(tempValue>0) {
        tempArray.push(tempValue)
      }
    }
  }
  const total = tempArray.reduce((a, b) => a + b, 0)
  return Math.round((total / tempArray.length) * 1e2) / 1e2
}

export function getTemperature (x: number, y: number, height: number, width: number, imgConfig: string = '', squareSize: number, matrix: Array<Array<number>>): number {
  if ((matrix.length > 0) && (x > 0 && y > 0)) {
    const percentX = (x * 100) / height
    const percentY = (y * 100) / width
    const resizeX = Math.round((percentX * imgSize[imgConfig].width) / 100)
    const resizeY = Math.round((percentY * imgSize[imgConfig].height) / 100)
    return getThermicArea(resizeX, resizeY, squareSize, matrix)
  } else {
    return 0
  }
}

function hexToTemperature (hex: string, imgConfig): number {
  const num = parseInt(hex, 16)
  const factor = imgConfig == 'A50' ?  0.01 : 0.04
  const fixedNum = (num * factor) - 273.15
  return Math.round( fixedNum * 1e2 ) / 1e2;
}