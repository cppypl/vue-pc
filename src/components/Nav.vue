<template>
  <div style="overflow:hidden">
    <div class="nav">
      <router-link to="/" exact>首页</router-link>
      <router-link to="/management/project" exact>我的项目</router-link>
      <router-link to="/management/work" exact>工作台</router-link>
      <router-link to="/management/document" exact>文档</router-link>

      <span style="float:right" v-if="username">
        
        <p>欢迎您：{{username}} <a href="javascript:" @click='logout'> 退出</a></p>
      </span>
    </div>
    <transition name="left" >
        <router-view style="position:absolute;width:100%;height:100%" ></router-view>
    </transition>
  </div>
</template>

<script>
export default {
    date(){
      return {
        username:''
      }
    },
    methods:{
        logout(){
            this.$local.set('user',null)
            this.$router.push('/login')
        }
    },
    created(){
      this.username=this.$local.get('user').userName
    }
};
</script>
<style>
.v-enter{ opacity: 0;}
.v-enter-to{opacity: 1;}
.v-enter-active{ transition: 0.2s}

.v-leave{ opacity: 1;}
.v-leave-to{opacity: 0;}
.v-leave-active{ transition: 0.2s}


.left-enter{  transform: translateX(100%)}
.left-enter-to{  transform: translateX(0%)}
.left-enter-active{ transition: 1s}

.left-leave{  transform: translateX(0%)}
.left-leave-to{  transform: translateX(-100%)}
.left-leave-active{ transition: 1s}
</style>



