/*
 * @Author: zhengxiaoxiao
 * @Date: 2020-09-17 15:46:14
 * @Description: 自定义一个loading指令
 */
import Vue from 'vue'
import LoadingComponent from './loading.vue'

const LoadingConstructor = Vue.extend(LoadingComponent)
export default (Vue) => {
    Vue.directive('loading', {
        // 只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。
        bind(el, binding) {
            console.log(el, binding, "22222")
            // 通过构造函数初始化组件 相当于 new Vue()
            const instance = new LoadingConstructor({
                el: document.createElement('div'),
                data: {}
            })
            el.appendChild(instance.$el)
            el.instance = instance
            Vue.nextTick(() => {
                el.instance.visible = binding.value
            })
        },
        // 被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)。
        inserted() { },
        // 所在组件的 VNode 更新时调用，但是可能发生在其子 VNode 更新之前。指令的值可能发生了改变，也可能没有。但是你可以通过比较更新前后的值来忽略不必要的模板更新 (详细的钩子函数参数见下)。
        update(el, binding) {
            // 通过对比值的变化判断loading是否显示
            if (binding.oldValue !== binding.value) {
                el.instance.visible = binding.value
            }
        },
        componentUpdated: function () { },
        // 只调用一次，指令与元素解绑时调用。
        unbind(el) {
            const mask = el.instance.$el
            if (mask.parentNode) {
                mask.parentNode.removeChild(mask)
            }

            el.instance.$destroy()
            el.instance = undefined
        }
    })
}
// point:
// 初始化：bind
// 更新: update
// 销毁: unbind