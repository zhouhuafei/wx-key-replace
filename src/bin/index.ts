#!/usr/bin/env node

import * as path from 'path'

import fn from '../index'

try {
  const opts = require(path.resolve('./wx-key-replace.js'))
  fn(opts)
} catch (err) {
  console.log('err', err)
}
