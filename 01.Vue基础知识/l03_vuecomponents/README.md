# 组件
1. Prop(组件之间的数据交互,父传子)
    1. 单项数据流:自上而下的传递,Parent -> Child
    2. props交互数据
    3. props对象接受方法
    4. props对象接受的类型限定
    5. 默认值和必选项:对象和数组必须是工厂函数方式

2. 自定义事件(子传父)
    1. this.$emit('onCustomEvent',data)
    2. 在子元素中修改父元素中的数据，可以使用.sync形式处理