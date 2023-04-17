function base64ToHex (str: string): string {
    const raw = atob(str)
    let result = ''
    for (let i = 0; i < raw.length; i++) {
      const hex = raw.charCodeAt(i).toString(16)
      result += (hex.length === 2 ? hex : '0' + hex)
    }
    return result.toUpperCase()
}

function HexToArray (data: string): Array<Array<number>> {
    const tempArray: number[][] = []
    let count = 0
    for (let i = 0; i < 320; i++) {
      const y: number[] = []
      for (let j = 0; j < 256; j++) {
        const hex = data.slice(count, count + 4)
        y.push(hexToTemperature(hex)) 
        count += 4
      }
      tempArray.push(y)
    }
    return tempArray
}

export function getThermicMatrix(thermicImage: string): Array<Array<number>> {
    const bufString = base64ToHex(thermicImage)
    const BufArray = HexToArray(bufString)
    return BufArray
}

export function getTemperature ({x, y, height, width, matrix, squareSize}): number {
  if((matrix.length > 0) && (x > 0 && y > 0)) {
    const percentX = (x * 100) / height
    const percentY = (y * 100) / width
    const resizeX = Math.round((percentX * 320) / 100)
    const resizeY = Math.round((percentY * 256) / 100)
    return getThermicArea(resizeX, resizeY, matrix, squareSize)
  } else {
    return 0
  }
}

function getThermicArea (x: number, y: number, matrix: number, squareSize: number): number {
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

function hexToTemperature (hex: string): number {
  const num = parseInt(hex, 16)
  const fixedNum = (num * 0.04) - 273.15
  return Math.round( fixedNum * 1e2 ) / 1e2;
}