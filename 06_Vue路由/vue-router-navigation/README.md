# 导航守卫
1. 全局前置导航守卫`beforeEach`


## 业务
用户未登陆，可以进入首页，但是无法进入关于页面
用户登陆了，可以进入任何页面
如果用户为登陆，点击进入关于页面，我们要导向登陆页面

## 路由高亮
router-link-exact-active
    /
    /about
    精准匹配，/ 匹配 /   /about 匹配 /about
router-link-active
    /
    /about
    两者都会匹配