var Toast = {};
Toast.install = function (Vue, options) {
    // Vue.prototype.$msg = 'Hello World';
    let opt = {
        defaultType: 'bottom', // 默认显示位置
        duration: '2500' // 持续时间
    }
    Vue.prototype.$toast = (tips, type) => {
        if (type.defaultType) {
            opt.defaultType = type.defaultType;
        }
        if(type.duration){
            opt.duration = type.duration;
        }

        let toastTpl = new Vue({
            render(){
                return(
                    <div class={['vue-toast','toast-'+opt.defaultType]}>{ tips }</div>
                )
            }
        })
        let tpl = toastTpl.$mount().$el; // 2、创建实例，挂载到文档以后的地方
        document.body.appendChild(tpl); // 3、把创建的实例添加到body中
        setTimeout(function () { // 4、延迟2.5秒后移除该提示
            document.body.removeChild(tpl);
        }, opt.duration)
    }
    // 定义不同位置
    ['bottom', 'center', 'top'].forEach(type => {
        Vue.prototype.$toast[type] = (tips) => {
            return Vue.prototype.$toast(tips, type)
        }
    })
}
module.exports = Toast;