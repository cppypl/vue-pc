
let local={
    set(key,value){
        localStorage.setItem(key,JSON.stringify(value))
    },
    get(key){
        return JSON.parse(localStorage.getItem(key)) || {}
    }
}


export default{
    install(vm){
        vm.prototype.$local=local
    }
}