const fs = require('fs')
const glob = require('glob')
const autoRegexp = new RegExp(`wx:key="{{\\s*(.*?)\\s*}}"`)

export default (opts) => {
  if (!opts || !opts.files || !opts.replace || !opts.replace.length) {
    console.log('参数有误')
    return
  }
  console.log('opts', opts)
  glob(opts.files, (err, files) => {
    if (err) console.log('err', err)
    console.log('files', files)
    files.forEach(file => {
      let fileContent = fs.readFileSync(file, { encoding: 'utf-8' })
      if (opts.replace && opts.replace.length) {
        opts.replace.forEach(v => {
          fileContent = fileContent.replace(new RegExp(v.source, 'g'), v.target)
        })
      } else {
        const arr = fileContent.match(autoRegexp)
        console.log('match arr', arr)
      }
      console.log('fileContent', fileContent)
      fs.writeFileSync(file, fileContent, { encoding: 'utf-8' })
    })
  })
}
