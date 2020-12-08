<template>
    <div>
        <ul>
            <li v-for="item in list" @click="onClickUl(item)">{{item.name}}</li>
        </ul>
    </div>
</template>
<script>
export default {
    name: "weituo",
    data() {
        return {
            list: [
                {
                    name: "name1",
                    id: "1"
                },
                {
                    name: "name1",
                    id: "2"
                },
                {
                    name: "name1",
                    id: "3"
                },
            ]
        }
    },
    methods: {
        onClickUl(item) {
            console.log(item,"item")
        }
    }
}
</script>
//point:
// 事件委托其实是事件冒泡的原理，将子元素上需要绑定的事件，直接绑定在父元素上面，委托给父元素执行
// 这样就不需要绑定多个事件，减少性能消耗
