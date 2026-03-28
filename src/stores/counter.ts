import { ref, computed } from 'vue'
import { defineStore } from 'pinia'


//一个状态就存储一类要共享的数据
export const useCounterStore = defineStore('counter', () => {
  //定义变量的初始值
  const count = ref(0)
  //定义变量的计算逻辑 getter
  const doubleCount = computed(() => count.value * 2)

  //定义怎么更改状态的方法
  function increment() {
    count.value++
  }
  //返回存储的状态和计算逻辑
  return { count, doubleCount, increment }
})
