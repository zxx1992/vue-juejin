/*
 * @Author: zhengxiaoxiao
 * @Date: 2020-09-17 11:00:04
 * @Description: 
 */
import Vue from "vue"
// 通过Vue.observable创建一个可响应的对象,适应于
export const store = Vue.observable({
    userInfo: {},
    roleIds: []
})

export const mutations = {
    setUserInfo(userInfo) {
        store.userInfo = userInfo
    },
    setRoleIds(roleIds) {
        store.roleIds = roleIds
    }
}
