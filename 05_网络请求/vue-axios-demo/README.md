# Axios网络请求
1. 参考网址：https://www.kancloud.cn/yunye/axios/234845
2. 安装Axios`npm install --save axios`
3. 常用的请求方式
    1. GET请求
        1. 参数直接拼接在url上
        2. 参数写成对象形式，单独放置
    2. POST请求
        注意：参数接受格式`user_id=iwen@qq.com&password=iwen123`,通过querystring进行格式转化
4. 全局配置
    1. 挂在Axios到Vue的原型上
5. 全局的 axios 默认值
    ```js
    axios.defaults.baseURL = 'https://api.example.com';
    axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
    axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    ```
6. 拦截器
    1. 请求拦截
    2. 响应拦截