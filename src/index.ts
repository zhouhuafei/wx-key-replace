const fs = require('fs')
const glob = require('glob')

function fnMain (opts, fileContent) {
  if (opts.replace && opts.replace.length) {
    opts.replace.forEach(v => {
      fileContent = fileContent.replace(new RegExp(v.source, 'g'), v.target)
    })
  } else {
    const str = fileContent
    const reg = 'wx:key="{{\\s*(.*?)\\s*}}"'
    const arr = str.match(new RegExp(reg, 'g'))
    const result = []
    arr.forEach(v => {
      v.match(new RegExp(reg))
      const newStr = v.replace(RegExp.$1, `(${RegExp.$1})`)
      str.match(new RegExp(newStr))
      const source = newStr
      const arrSplit = RegExp.$1.split('.')
      const target = `wx:key="${arrSplit[arrSplit.length - 1]}"`
      if (!result.find(v => v.source === source)) result.push({ source, target })
    })
    result.forEach(v => {
      fileContent = fileContent.replace(new RegExp(v.source, 'g'), v.target)
    })
  }
  return fileContent
}

module.exports = (opts) => {
  if (!opts || (!opts.files && !opts.fileContent)) {
    console.log('参数有误')
    return
  }
  if (opts.files) {
    glob(opts.files, (err, files) => {
      if (err) console.log('err', err)
      files.forEach(file => {
        let fileContent = fs.readFileSync(file, { encoding: 'utf-8' })
        fileContent = fnMain(opts, fileContent)
        fs.writeFileSync(file, fileContent, { encoding: 'utf-8' })
      })
    })
  } else if (opts.fileContent) {
    return fnMain(opts, opts.fileContent)
  }
}
