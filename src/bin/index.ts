#!/usr/bin/env node

const path = require('path')

const fn = require('../index')

try {
  const opts = require(path.resolve('./wx-key-replace.config.js'))
  fn(opts)
} catch (err) {
  console.log('err', err)
}
