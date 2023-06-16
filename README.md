# 安装运行

## 安装依赖
```
pnpm install
```

## 运行
```
pnpm run dev
```

# vue3组件间的通信方式（共9种方式）

## props （父=>子）
props **（只读，单向的）** 不能修改，否则会出现下面的报错 
```
[Vue warn] Set operation on key "fatherLove" failed: target is readonly. Proxy(Object) {fatherLove: '无穷大'}
```
如果想修改（在接收组件中定义一个变量接收props传递过来的数据）
可以通过props实现 **父子组件间通信** ,在vue3中通过defineProps来获取传递的props，并且不需要去引入，可以直接使用

### 父组件=>子组件传递参数
```
  <Son :fatherLove="fatherLove"/>
```
### 子组件接收数据 
方法一（推荐）
```
const props=defineProps({
    fatherLove:{
        type: String,
        default:''
    },
})
```

方法二:传入数组或者是对象
```
const props=defineProps(["fatherLove"]);

```
#### 子组件使用传递的props
```

 <h2>这是父组件传递过来的数据：{{ props.fatherLove }}</h2>
 也可以
  <h2>这是父组件传递过来的数据：{{ fatherLove }}</h2>
```

```
// 必须要写成props.fatherLove这个形式
const change=()=>{
    console.log(props.fatherLove)
}
```


## 自定义事件（子=>父）
**在vue2中，下面这个代码就是自定义事件，需要使用.native修饰符才能将其变成原生dom事件，而在vue3中是原生dom事件**
```
  <Event1 @click="handle1"></Event1>
```

## 子组件给父组件传递数据
```
let count =ref(0)
let emits = defineEmits(["sendData"])
const send=()=>{
    emits("sendData",count.value,"传递数据2");
}
```

### 父组件接收数据
```
  <Event2 @sendData="handle2"></Event2>

  const handle2=(p1,p2)=>{
    console.log(p1,p2) // 0 传递数据2
 }
```

**注意**
当我们在defineEmits（）中写click时，此时，在使用@click就不是原生dom事件，而是自定义事件
```
let emits = defineEmits(["sendData","click"])
```

## 全局事件总线$bus （兄弟组件间通信）
在vue2中可以通过vm和vc之间的关系，推出全局事件总线，实现任意组件间的通信。但是在vue3中没有vue构造函数，导致没有vm
没有vue原型对象，同时vue3是组合式api, 没有this的写法。所以如果直接在vue3中使用全局事件总线有点不现实，可以通过mitt插件进行实现
### 引入mitt
$bus 上有on ，emit，off方法
on：绑定事件，用来接收数据 在组件挂在完毕的时候就要给组件绑定事件来接收数据
emit：发送时间，用于传递数据

```
import mitt from 'mitt';
type Events = {
    foo: string;
    bar?: number;
  };
const $bus = mitt<Events>();
 export default $bus
 ```
### 使用
子组件1

```
 <button @click.once="present">我要送个妹妹一个礼物</button>

 import $bus from '../../bus';
 const present=()=>{
   // 第一个参数：事件类型 第二个参数：发送数据
    $bus.emit("bike",'自行车')
 }
```

子组件2

```
<p>姐姐送给我的礼物：{{ bikeForMeimei }}</p>
import { onMounted ,ref} from 'vue';
import $bus from '../../bus';
const bikeForMeimei=ref('');
onMounted(()=>{
    // 第一个参数：事件类型 第二个参数：事件回调
    $bus.on('bike', function(bike:string) {
        bikeForMeimei.value=bike
        console.log(bike)
    })
})
```

## v-model
v-model 可以同步表单数据 默认的是**v-model:value** 简写成v-model
同时v-model还可以实现父子组件的数据同步 默认的是**v-model:modelValue** 简写成v-model
还可以自定义数据 **eg:v-model:currentPage=currentPage** 

父组件
```
<Child1 v-model="money"/>

import {ref} from'vue'
let money=ref(100)
```


子组件
```
<div>
    <p>我有{{ modelValue }}元</p>
    <button @click="handler">点击和父亲同步</button>
</div>

const $emit =defineEmits(['update:modelValue'])
const props = defineProps({
    modelValue:{
        type:Number,
        default:0
    }
})
const handler = ()=>{
    $emit('update:modelValue', props.modelValue+10);
}

```

传递多个v-model

父组件
```
 <Child2 v-model:prePageNO="prePageNO" v-model:nextPageNO="nextPageNO"/>

 let prePageNO=ref(12)
let nextPageNO=ref(14)
```

子组件
```
<button @click="pre">上一页{{ prePageNO }}</button>
<button @click="next">下一页{{ nextPageNO }}</button>


let $emit = defineEmits(['update:prePageNO', 'update:nextPageNO'])
let props = defineProps(['prePageNO', 'nextPageNO'])
const pre = () => {
  $emit('update:prePageNO', props.prePageNO - 1)
}
const next = () => {
  $emit('update:nextPageNO', props.nextPageNO + 1)
}
```


## attrs-listeners（不仅可以传递属性，还可以传递方法）：包含父作用域里除 class 和 style 除外的非 props 属性集合
**注意：**useAttrs和props都可以接受属性，但是useAttrs的优先级低于props的优先级，当二者同时使用的时候，通过props获取到的属性，useAttrs将不会获取到
在vue3中使用**useAttrs**获取父元素给子元素传递的数据

### 父组件
父组件中使用子组件
```
import dataTest from './DataTest.vue'

 <dataTest type="success" :icon="Search"> </dataTest>
 ```

### 子组件

```
//:="$attrs"这种方式会将所有的父组件传递过来的属性拿过来
   <el-button :="$attrs"></el-button>

   import {useAttrs } from 'vue'
   let $attrs = useAttrs()
```
```
   console.log($attrs)

   结果：Proxy(Object) {type: 'success', icon: {…}, __vInternal: 1}

```

## ref进行 子=>父 ,$parent 父=>子 传递信息（获取子组件信息后，可对其进行更改）
**在子组件上定义ref，并且声明变量的时候，二者要保持一致**
### 父组件
```
 <Child1 ref="son"></Child1>

 let son=ref()
```

此时我们可以通过son.value访问子组件，但是由于子组件中内部的数据不会对外暴露，我们目前是无法访问到子组件的数据的
可以通过在子组件中进行暴露属性或者方法

```
defineExpose({
    childMoney
})
```
这样我们就可以在父组件中访问到子组件的属性或者方法，同时注意，我们访问到的属性，可以在父组件中对其进行更改

### $parent 通信(父给子信息)
在子组件想要获取父组件的时候,可以使用$parent获取当前组件的父组件，同时我们可以在父组件中暴露属性和方法
```
 <button @click="get($parent)"> 爸爸给我钱</button>
let get= ($parent)=>{
    console.log($parent)
    dauMoney.value+=100

    $parent.money-=100
    console.log($parent.childMoney)
}
```

## provide-inject（父=>子，可以修改数据，并且可以跨组件：爷爷可以给孙子传递数据）
通过provide进行发送数据（只可父给子传递数据）
```
provide发送数据的格式：键值对的形式 （key，value）
provide('name',things)
这里的name是key，你自己定义的，things是value，我们要传递的数据
```

inject接收数据
```
inject('name')
使用inject()传递数据，里面放key值，就可以获得对应的value值
```

## pinia（可以实现任意组件间通信）:集中式管理，state action getters
### 选项式api的写法，会对pinia中的数据进行更改
定义大仓库并将其导出 （大仓库管理小仓库）
```
import {createPinia} from 'pinia';
let store = createPinia()
export default store;
```

定义小仓库 并将小仓库导出，defineStore（）方法第一个参数是小仓库的名称，第二个参数是小仓库的配置对象（state，actions，getters）
```
import { defineStore } from "pinia"; 

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
```


defineStore方法返回的是一个函数，当我们在使用的时候，首先要获取小仓库的对象，我们所有的属性全在小仓库的对象中，要使用的时候，直接获取即可
```
import useInfo from '../../store/modules/info'
let useInfoDate= useInfo()

//使用
 <span>这是数据:{{ useInfoDate.count }}</span> <br>
```


### 组合式api的写法（也可以更改属性值，双向的）
defineStore的第二个参数是一个函数，必须返回一个对象（这个返回的对象，就是组件中想要使用的属性或者方法）
```
import { defineStore } from "pinia";
import { ref } from "vue";
let todosPinia=defineStore('todos',()=>{
    let todos=ref([{id:1,title:"吃饭"},{id:2,title:"睡觉"},{id:3,title:"上厕所"}])
    // 必须返回一个对象：属性和方法供组件进行使用
    return {
        todos

    }

})
export default todosPinia;
```
使用方法（和选项式api相同）
```
import todosPinia from '../../store/modules/todos';
let todosStore =todosPinia()

const add=()=>{
    todosStore.count++
}
```
## slot
插槽分：默认插槽、具名插槽、作用域插槽

### 默认插槽


父组件
```
 <Child1>
    <div>
       <pre>我是默认插槽的内容</pre>
    </div>
</Child1>
```
子组件
```
  <div class="child">
    <h3>我是子组件儿子</h3>
    <hr>
    <slot></slot>
    <h3>结束</h3>
  </div>
```

### 具名插槽

具名插槽 给插槽附上name属性
```
 <slot name="a"></slot>
```
使用的时候，使用v-slot:<名称> 的方式，进行使用，
也可以简写成 #<名称>
```
 <template v-slot:a>
    <div>
       <pre> 我是具名插槽填充内容
        a</pre>
    </div>
 </template>
 <template #b>
    <div>
       <pre> 我是具名插槽填充内容b</pre>
    </div>
 </template>
```

### 作用域插槽
作用域插槽：可以传递数据的插槽，子组件可以将数据传递给父组件，并且父组件可以决定数组在子组件中以何种方式展示
父组件获取到子组件传递的数据，并且可以决定展示的形式eg：这里是使用p标签,并且根据是否完成更改样式
```
 <Child2 :todos="todos">
    <template v-slot="{$todosRow,$todosIndex}"> 
        <p :style="{color:$todosRow?.done?'red':'green'}">
            {{$todosIndex}}-{{$todosRow?.title}}
        </p>
    </template>
 </Child2>
```

子组件
```
 <ul>
    <li v-for="(item,index) in todos" :key="index">
    //子组件通过slot标签进行给父组件传递数据，返回的结果是对象的形式，$todosRow是key的形式，item是value的形式。
      <slot :$todosRow="item"  :$todosIndex="index"></slot>
    </li>
 </ul>
```

```
```



