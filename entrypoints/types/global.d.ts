// 扩展 Vue 的 ComponentCustomProperties 接口
declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
      __: (key:any) => string
    }
  }
  
  export {}
  