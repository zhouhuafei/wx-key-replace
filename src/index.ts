const fs = require('fs')
const glob = require('glob')

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
      const fileContent = fs.readFileSync(file, {encoding: 'utf-8'})
      console.log('fileContent', fileContent)
    })
  })
}
