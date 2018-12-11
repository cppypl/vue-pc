import Vue from 'vue'
import Router from 'vue-router'
import Nav from '@/components/Nav'
import home from '@/views/home'
// import project from '@/views/project'
// import work from '@/views/work'
import document from '@/views/document'
import login from '@/views/login'

let project=(resolve)=>{  //按需加载
    return require.ensure([],()=>{
      resolve(require('@/views/project'))
    })
}
let work=resolve=>import('@/views/work')//按需加载import方法，但不支持chunk合并

Vue.use(Router)

const router=new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/management',
      
      component: Nav,
      children:[
        {
          path: '/management/project',
          name: 'project',
          component: project,
          meta:{
            login:true
          }
        },
        {
          path: '/management/work',
          name: 'work',
          component: work,
          meta:{
            login:true
          }
          
        },
        {
          path: '/management/document',
          name: 'document',
          component: document
          
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    
  ]
})
export default router

router.beforeEach((to,from,next)=>{
    
   
    if(to.meta.login){
      if(router.app.$local.get('user').isLogin){
        next()
      }else{
        router.push({
          path:'/login',
          query:{
            redirect:to.name
          }
          
        })
      }
      
    }else{
      next()
    }
    
})
