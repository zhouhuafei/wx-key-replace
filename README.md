# 功能说明
> 批量替换wx:key的值

# 使用方式
1. 在项目根目录新建`wx-key-replace.js`文件。
1. 填入以下配置。
```javascript
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
```

# 字段说明
* `files`：需要被替换的文件。
* `replace`：需要被替换的内容集合。
  - `source`：需要被替换的内容。
  - `target`：替换成什么内容。
