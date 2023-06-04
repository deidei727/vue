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

## props 
props **（只读，单向的）** 不能修改，否则会出现下面的报错 
```
[Vue warn] Set operation on key "fatherLove" failed: target is readonly. Proxy(Object) {fatherLove: '无穷大'}
```
如果想修改（在接收组件中定义一个变量接收props传递过来的数据）
可以通过props实现父子组件间通信,在vue3中通过defineProps来获取传递的props，并且不需要去引入，可以直接使用

### 父组件=>子组件传递参数git
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


## 自定义事件


## 全局事件总线$bus


## pubsub

## vuex

## ref

## slot


