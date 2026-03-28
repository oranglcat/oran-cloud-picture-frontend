import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

/*
 * 存储登录用户信息的状态
 * */
export const useLoginUserStore = defineStore('loginUser', () => {
  //定义变量的初始值
  const loginUser = ref<any>({
    userName: '未登录',
  })


  /*
  * 获取登录用户
  * */
  async function fetchLoginUser() {
    //todo 后端接口还未开发，暂时为空
    setTimeout(() => {
      loginUser.value = {
        userName: '测试用户',
        id: 1
      }
    },3000)
  }

  /*
   * 设置登录用户
   * */
  function setLoginUser(user: any): void {
    loginUser.value = user
  }
  //返回存储的状态和计算逻辑
  return {loginUser, fetchLoginUser, setLoginUser}
})
