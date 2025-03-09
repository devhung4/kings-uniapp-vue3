// // utils/uni-helper.ts
// export function getEventValue(e: InputEvent): string {
//   if (process.env.UNI_PLATFORM === 'h5') {
//     return (e.target as HTMLInputElement).value
//   }
//   // 支付宝小程序特殊处理
//   if (process.env.UNI_PLATFORM === 'alipay') {
//     return (e as any).detail.value[0] || ''
//   }
//   return (e as CustomEvent<{ value: string }>).detail.value
// }