import Axios from 'axios'
Axios.defaults.baseURL="http://localhost:1001";   //配置地址端口

//请求拦截
Axios.interceptors.request.use(
    config=>{
        return config
    },
    error=>{
        return Promise.reject(error)
    }
);

//相应拦截
Axios.interceptors.response.use((config)=>{
    //返回的token数据存储
    return config
})

//导出Axios
export default Axios;  