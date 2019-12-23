import * as path from 'path'

import fn from '../index'

try {
  const opts = require(path.resolve('./wx-key-replace.js'))
  fn(opts)
} catch (e) {
  console.log('没找到wx-key-replace.js文件')
}
