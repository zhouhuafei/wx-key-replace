const wxKeyReplace = require('../dist/index.js')

test(`wxKeyReplace`, () => {
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
