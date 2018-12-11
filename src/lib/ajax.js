import axios from 'axios'

axios.interceptors.response.use(res=>{
    console.log(res)
    if(res.data.resultCode==1000){
        alert(res.data.message)
    }else{
            return res
    }
},error=>{
    return Promise.reject(error)
})
