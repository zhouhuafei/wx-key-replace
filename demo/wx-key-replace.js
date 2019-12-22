module.exports = {
  files: `./src/**/**.wxml`,
  replace: [
    {
      source: `wx:key="{{index}}"`,
      target: `wx:key="index"`
    },
    {
      source: `wx:key="{{index2}}"`,
      target: `wx:key="index2"`
    }
  ]
}
