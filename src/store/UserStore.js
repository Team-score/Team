import {observable,action} from  'mobx'
//引入地址
import Axios from '../util/axios'
//引入接口
import ApiIndex from '../api/ApiIndex'



//导出类,让Storeindex来new，实例化调用
export default class UserStore{
    //观察数据变化
    @observable user = [];  //用户  创建一个被监听的对象, 没有@observable声明的视图不能检测到变化
    @observable isLogin=false;  //登录状态
    @observable token = "";   //token
    
    //动态
    @action    // 改变store的值的行为
    Login = ()=>{       //登录的方法
        return new Promise((resolve,reject)=>{
            Axios.post(ApiIndex.ApiUser.userLogin,{user:"admin",pwd:123}) 
            .then((res)=>{
                if(res.data.returnCode===200){
                    this.user = res.data.data;
                    this.token = res.data.token;
                    resolve("登录成功");
                }else{
                    reject("登录失败");
                }
                
            })
        })
    }
}