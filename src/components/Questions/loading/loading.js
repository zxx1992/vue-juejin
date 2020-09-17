/*
 * @Author: zhengxiaoxiao
 * @Date: 2020-09-17 14:36:52
 * @Description: 
 */
import Vue from 'vue'
import LoadingComponent from './loading.vue'

// 通过Vue.extend将组件包装成一个子类
const LoadingConstructor = Vue.extend(LoadingComponent)
let loading = undefined;

// loading组件原型上添加close方法
LoadingConstructor.prototype.close = function () {
    if (loading) {
        loading = undefined
    }

    this.visible = false
    setTimeout(() => {
        if (this.$el && this.$el.parentNode) {
            this.$el.parentNode.removeChild(this.$el)
        }
        this.$destroy()
    }, 300)
}

const Loading = (options = {}) => {
     // 如果组件已渲染，则返回即可
    if (loading) {
         return loading 
    }
    console.log(options,"options")
    // 拿到要挂载的元素，
    const parent = document.body;
     // 组件属性
    const opts = {
        text: '',
        ...options
    }
    // 通过构造函数初始化组件 相当于 new Vue()
    const instance = new LoadingConstructor({
        el: document.createElement('div'),
        data: opts
    })

    parent.appendChild(instance.$el)

    Vue.nextTick(() => {
        instance.visible = true 
    })
    loading = instance
    return instance
}

// 可以直接将组件挂载到vue.prototype上面
// Vue.prototype.$loading = Loading
console.log(Loading,"loading")
export default Loading;