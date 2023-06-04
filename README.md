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


## attrs-listeners

## vuex

## ref

## slot


