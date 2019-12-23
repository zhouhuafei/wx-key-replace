module.exports = {
  files: `./src/**/**.wxml`,
  autoRegexp: `wx:key="{{\\s*(.*)\\s*}}"`,
  replace: [
    {
      source: `wx:key="{{\\s*(.*)\\s*}}"`,
      target: `wx:key="index"`
    }
  ]
}
