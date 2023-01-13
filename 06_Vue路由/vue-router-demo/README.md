# Vue路由功能

## 安装路由
    1. 手动下载安装
        1. `npm install vue-router --save`
        2. Vue.use() 明确地安装路由功能
            ```js
            import Vue from 'vue'
            import VueRouter from 'vue-router'
            Vue.use(VueRouter)
            ```
    2. VueCli方式加载
        1. vue add router

## 搭建Vue路由显示效果
    1. 创建路由相关页面
    2. 配置路由
    3. 指定路由显示位置和跳转链接