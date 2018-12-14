import axios from 'axios'
import {Toast,Indicator} from 'mint-ui';


    axios.interceptors.request.use(config=>{
     
        console.log(THIS)
    
        // 显示
        
        Indicator.open('加载中...');
            
    
         return config
    },error=>{
        Indicator.close();
        console.log(22)
        return Promise.reject(error)
    })
    
    axios.interceptors.response.use(res=>{
        Indicator.close()
        if(res.data.resultCode==1000){
            console.log(res.data.message)
        }else{
                return res
        }
    },error=>{
        return Promise.reject(error)
    })
    


 