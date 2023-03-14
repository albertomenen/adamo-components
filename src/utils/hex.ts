const base64ToHex = (str) => {
    const raw = atob(str)
    let result = ''
    for (let i = 0; i < raw.length; i++) {
      const hex = raw.charCodeAt(i).toString(16)
      result += (hex.length === 2 ? hex : '0' + hex)
    }
    return result.toUpperCase()
}

const HexToArray = (data: string): Array<Array<string>> => {
    const tempArray: [string[]] = [[]]
    let count = 0
    console.log(typeof data)
    for (let i = 0; i < 320; i += 4) {
      const y: string[] = []
      for (let j = 0; j < 256; j += 4) {
        y[j] = data.slice(count, count + 3)
        count += 4
      }
      tempArray[i] = y
    }
    console.log(tempArray)

    return tempArray
}

export default function getThermicData(thermicImage): Array<Array<string>> {
    const bufString = base64ToHex(thermicImage)
    console.log(typeof bufString)
    const BufArray = HexToArray(bufString)
    return BufArray
}