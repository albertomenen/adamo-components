const base64ToHex = (str) => {
    const raw = atob(str)
    let result = ''
    for (let i = 0; i < raw.length; i++) {
      const hex = raw.charCodeAt(i).toString(16)
      result += (hex.length === 2 ? hex : '0' + hex)
    }
    return result.toUpperCase()
}

const HexToArray = (data: string): Array<Array<number>> => {
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

export function getThermicData(thermicImage) {
    const bufString = base64ToHex(thermicImage)
    const BufArray = HexToArray(bufString)
    return BufArray
}

export function hexToTemperature (hex): number {
  const num = parseInt(hex, 16)
  const fixedNum = (num * 0.04) - 273.15
  return Math.round( fixedNum * 1e2 ) / 1e2;
}