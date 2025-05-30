import { http } from "@/plugins/axios";

export interface User {
    name: string,
    age: number,
    avatar: string,
    permissions: string[]
}

interface LoginInterface {
    token: string
}

// 提交登录注册表单的类型
export interface ILoginData {
    username: string,
    password: string
}

// 将接口封装成类，用户接口类，存放一些用户相关的接口
class userApi {
    info() {
        // 为了有更好的类型声明，调用的时候传递类型声明的User类型
        return http.request<User>({
            url: "user/info",
        })
    }
    login(data: ILoginData) {
        return http.request<LoginInterface>({
            url: "login",
            method: "post",
            data
        })
    }
}

export default new userApi();
// 调用方法：userApi.info()