export const formatValue = (value) => {
  // DBC2SBC
  if (value) {
    var result = ''
    var len = value.length
    for (var i = 0; i < len; i++) {
      var cCode = value.charCodeAt(i)
      cCode = (cCode >= 0xFF01 && cCode <= 0xFF5E) ? (cCode - 65248) : cCode
      cCode = (cCode === 0x03000) ? 0x0020 : cCode
      result += String.fromCharCode(cCode)
    }
    if (value === 1) {
      console.log(value.length)
      // result = Number(1).toString()
    }
    return result.trim()
  }
}

export const formatAmountValue = (value) => {
  let formattedValue = formatValue(value)
  let result = ''
  while (formattedValue.length > 3) {
    result = ',' + formattedValue.slice(-3) + result
    formattedValue = formattedValue.slice(0, formattedValue.length - 3)
  }
  if (formattedValue) {
    result = formattedValue + result
  }
  return result
}

export const getAge = (birth) => {
  if (birth) {
    let age = 0
    let birthStr = birth.split('/')
    let birthYear = birthStr[0]
    let birthMonth = birthStr[1]
    let birthDay = birthStr[2]
    let now = new Date()
    let nowYear = now.getFullYear()
    let nowMonth = now.getMonth() + 1
    let nowDay = now.getDate()
    if (nowMonth < 10) {
      nowMonth = '0' + nowMonth
    }
    if (nowYear === birthYear) {
      age = 0
    } else {
      let ageDiff = nowYear - birthYear
      if (ageDiff > 0) {
        if (nowMonth === birthMonth) {
          let dayDiff = nowDay - birthDay
          if (dayDiff < 0) {
            age = ageDiff - 1
          } else {
            age = ageDiff
          }
        } else {
          let monthDiff = nowMonth - birthMonth
          if (monthDiff < 0) {
            age = ageDiff - 1
          } else {
            age = ageDiff
          }
        }
      }
    }
    return age
  }
}
export const arrList = (arr) => {
  let queryParams = {}
  arr.forEach(function (i) {
    let key = Object.keys(i)[0]
    let value = i[key]
    if (value || i['status'] === 0) {
      queryParams[key] = value
    }
  })
  return queryParams
}
