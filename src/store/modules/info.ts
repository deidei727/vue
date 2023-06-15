// 创建小仓库
import { defineStore } from "pinia"; 
// pinia只有store ，action ，getters这三种
// defineStore的第一个参数（小仓库名称），第二个参数（小仓库的配置对象）
// defineStore会返回一个函数
let useInfo = defineStore('userInfo',{
    state: ()=>{
        return {
            count:123
        }
    },
    actions: ()=>{

    },
    getters: ()=>{

    },

})
export default useInfo