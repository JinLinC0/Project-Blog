<template>
    <!--使用组件的方式进行规则的验证-->
    <div class>
    <Form class="bg-slate-400 h-screen flex justify-center md:items-center p-5" @submit="onSubmit" :validation-schema="schema">
        <div class="w-[720px] bg-slate-100 md:-translate-y-16 md:grid grid-cols-2 rounded-md shadow-2xl overflow-hidden">
            <div class="hidden md:block relative">
                <img src="/images/login.jpg" class="absolute h-full w-full object-cover" />
            </div>
            <div class="p-6">
                <h2 class="text-center text-gray-600 text-lg">用户登录</h2>
                <div class="mt-5">
                    <Field name="account" placeholder="请输入用户名" class="my-input" />
                    <ErrorMessage name="account" as="div" class="my-error" />

                    <Field name="password" placeholder="请输入密码" type="password" class="my-input" />
                    <ErrorMessage name="password" as="div" class="my-error" />
                </div>
                <button class="my-button mt-8 w-full">登录</button>
                <div class="flex gap-2 justify-center mt-5">
                    <a class="text-xs text-gray-700 hover:text-blue-300">找回密码</a>
                    <a class="text-xs text-gray-700 hover:text-blue-300">配套笔记</a>
                </div>
            </div>
        </div>
    </Form>
    </div>
</template>

<script setup lang="ts">
import v from '@/plugins/validate'
import utils from '@/utils'

// 提取出validate包中的几个组件，form表单，字段和错误消息
const { Form, Field, ErrorMessage } = v

// 通过yup进行统一的验证管理
const schema = v.yup.object({
    account: v.yup.string().required().label("账号").matches(/.+@.+|\d{11}/, "请输入正确的邮箱或手机号"),
    password: v.yup.string().required().min(3).label("密码")
})

// 表单提交
const onSubmit = async (values: any) => {
    utils.user.login(values)
}
</script>

<script lang="ts">
export default {
    // 元信息meta，表示这个页面只能是游客进行访问，如果登录了，就不能访问这个页面
    route: { name: 'login', meta: { guest: true} }   
}
</script>

<style lang="scss" scoped>
</style>