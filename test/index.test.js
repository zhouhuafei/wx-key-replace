const wxKeyReplace = require('../dist/index.js')

test(`wxKeyReplace1`, () => {
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
  expect(wxKeyReplace({ fileContent })).toEqual(fileContentBeReplaced)
})

test(`wxKeyReplace2`, () => {
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
  expect(wxKeyReplace({ fileContent, replace })).toEqual(fileContentBeReplaced)
})
