import { defineStore } from "pinia";
import { ref } from "vue";
let todosPinia=defineStore('todos',()=>{
    let todos=ref([{id:1,title:"吃饭"},{id:2,title:"睡觉"},{id:3,title:"上厕所"}])
    let count=ref(199)
    // 必须返回一个对象：属性和方法供组件进行使用
    return {
        todos,count

    }

})
export default todosPinia;