<template>

    <div class="center">
        
<mt-swipe :auto="4000" style="height:300px;">
  <mt-swipe-item style="background:red">1</mt-swipe-item>
  <mt-swipe-item style="background:blue">2</mt-swipe-item>
  <mt-swipe-item style="background:yellow">3</mt-swipe-item>
</mt-swipe>


        <div>
            <router-link to="/" exact>回首页</router-link>
            {{aaa}}
        </div>

            <input type="text" placeholder="用户名"  ref="user"><br>
            <input type="password" placeholder="密码" ref="pass"><br>
            <button @click="login">登录</button>
            
    </div>
</template>

<script> 
// import { Toast } from 'mint-ui';
export default {
    data(){
        return {
            aaa:''
        }
    },

    created(){
//         this.$toast({
//   message: 'Upload Complete',
//   position: 'bottom',
//   duration: 5000
// })
     
        // this.$indicator.open('222222')
        this.$http.get('https://www.easy-mock.com/mock/5bf75e875cfdd6564a60da5d/example/getcity#!method=get')
        .then(res=>{
            console.log(res);
            
            this.aaa=res.data.message
        })
        .catch(error=>{
            console.log(error)
        })

        


    },
    
    methods:{
        login(){
            
            this.$local.set('user',{
                userName:this.$refs.user.value,
                isLogin:true
            })
            
            // this.$store.commit('login',this.userinfo)

            // console.log(this.$route.query);
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
