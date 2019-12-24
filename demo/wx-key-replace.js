module.exports = {
  files: `./src/**/**.wxml`,
  replace: [ // 无此项或此项为空数组，则开启自动匹配模式
    {
      source: `wx:key="{{index}}"`,
      target: `wx:key="index"`
    },
    {
      source: `wx:key="{{ item.id }}"`,
      target: `wx:key="id"`
    }
  ]
}
