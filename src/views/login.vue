<template>
    <div class="center">
        

        <div>
            <router-link to="/" exact>回首页</router-link>
            登录
        </div>


            <input type="text" placeholder="用户名"  ref="user"><br>
            <input type="password" placeholder="密码" ref="pass"><br>
            <button @click="login">登录</button>
            
    </div>
</template>

<script>
export default {
    
    
    methods:{
        login(){
            
            this.$local.set('user',{
                userName:this.$refs.user.value,
                isLogin:true
            })
            
            // this.$store.commit('login',this.userinfo)

            console.log(this.$route.query);
            let redirect=this.$route.query.redirect || 'project'
            this.$router.push({
                path:'/management/'+redirect
            })
        }
    }
}
</script>

<style>

</style>
