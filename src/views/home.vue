<template>
    <div class="center">
        
            <router-link to="login" v-if="!isLogin">登录</router-link>

            <h1>我是首页</h1>
       
        
        <router-link to="/management/project">我的项目</router-link>
        <router-link to="/management/document">我的文档</router-link>
    </div>
</template>

<script>
export default {
    data(){
        return{
            isLogin:false
        }
    },
    created(){
        this.isLogin=this.$local.get('user').isLogin
    }
}
</script>

<style>

</style>
