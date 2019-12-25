# 功能说明
> 批量替换wx:key的值

# 使用方式1
1. 在项目根目录新建`wx-key-replace.js`文件。
1. 填入以下配置。
```javascript
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
```

# 字段说明
* `files`：需要被替换的文件。
* `replace`：需要被替换的内容集合。
  - `source`：需要被替换的内容。
  - `target`：替换成什么内容。

# 使用方式2
```javascript
const wxKeyReplace = require('wx-key-replace')
const fileContent = `
<view wx:key="{{index}}"></view><view wx:key="{{index2}}"></view><view wx:key="{{item.id}}"></view>
<view wx:key="{{index}}"></view>
<view wx:key="{{index2}}"></view>
<view wx:key="{{item.id}}"></view>
<view wx:key="{{index}}"></view>
<view wx:key="{{index2}}"></view>
<view wx:key="{{item.id}}"></view>
<view wx:key="{{ index }}"></view>
<view wx:key="{{ index2 }}"></view>
<view wx:key="{{ item.id }}"></view>
<view wx:key="{{ index }}"></view>
<view wx:key="{{ index2 }}"></view>
<view wx:key="{{ item.id }}"></view>
<view wx:key="{{ index }}"></view><view wx:key="{{ index2 }}"></view><view wx:key="{{ item.id }}"></view>
`
const fileContentBeReplaced = `
<view wx:key="index"></view><view wx:key="index2"></view><view wx:key="id"></view>
<view wx:key="index"></view>
<view wx:key="index2"></view>
<view wx:key="id"></view>
<view wx:key="index"></view>
<view wx:key="index2"></view>
<view wx:key="id"></view>
<view wx:key="index"></view>
<view wx:key="index2"></view>
<view wx:key="id"></view>
<view wx:key="index"></view>
<view wx:key="index2"></view>
<view wx:key="id"></view>
<view wx:key="index"></view><view wx:key="index2"></view><view wx:key="id"></view>
`
console.log(wxKeyReplace({ fileContent }) === fileContentBeReplaced) // true
```
```javascript
const wxKeyReplace = require('wx-key-replace')
const fileContent = `
<view wx:key="{{index}}"></view><view wx:key="{{index2}}"></view><view wx:key="{{item.id}}"></view>
<view wx:key="{{index}}"></view>
<view wx:key="{{index2}}"></view>
<view wx:key="{{item.id}}"></view>
<view wx:key="{{index}}"></view>
<view wx:key="{{index2}}"></view>
<view wx:key="{{item.id}}"></view>
<view wx:key="{{ index }}"></view>
<view wx:key="{{ index2 }}"></view>
<view wx:key="{{ item.id }}"></view>
<view wx:key="{{ index }}"></view>
<view wx:key="{{ index2 }}"></view>
<view wx:key="{{ item.id }}"></view>
<view wx:key="{{ index }}"></view><view wx:key="{{ index2 }}"></view><view wx:key="{{ item.id }}"></view>
`
const fileContentBeReplaced = `
<view wx:key="index"></view><view wx:key="{{index2}}"></view><view wx:key="{{item.id}}"></view>
<view wx:key="index"></view>
<view wx:key="{{index2}}"></view>
<view wx:key="{{item.id}}"></view>
<view wx:key="index"></view>
<view wx:key="{{index2}}"></view>
<view wx:key="{{item.id}}"></view>
<view wx:key="{{ index }}"></view>
<view wx:key="{{ index2 }}"></view>
<view wx:key="id"></view>
<view wx:key="{{ index }}"></view>
<view wx:key="{{ index2 }}"></view>
<view wx:key="id"></view>
<view wx:key="{{ index }}"></view><view wx:key="{{ index2 }}"></view><view wx:key="id"></view>
`
const replace = [ // 无此项或此项为空数组，则开启自动匹配模式
{
  source: `wx:key="{{index}}"`,
  target: `wx:key="index"`
},
{
  source: `wx:key="{{ item.id }}"`,
  target: `wx:key="id"`
}
]
console.log(wxKeyReplace({ fileContent, replace }) === fileContentBeReplaced) // true
```
