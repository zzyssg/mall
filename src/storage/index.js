const STORAGE_KEY = 'mall'
export default {
    // 设值
    setItem(key,value,module_name){
        if(module_name){
            let val = this.getItem(module_name);
            val[key] = value;
            this.setItem(module_name,val);
        }else{
            let val = this.getStorage() || {};
            val[key] = value;
            window.sessionStorage.setItem(STORAGE_KEY,JSON.stringify(val));
        }
    },

    // 仅查询
    getItem(key,module_name){
        //如果没有module_name对应的成员，则可以避免取空值 —— storage()[module_name][key]
        if(module_name){
            let val = this.getItem(module_name);
            return val[key];
        }
        return this.getStorage()[key];
    },

    getStorage(){
        return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY))
    },

    // 删除 —— 重新设置
    clear(key,module_name){
        let val = this.getStorage();
        if(module_name){ 
            delete val[module_name][key];
        }else{
            delete val[key];
        }
        window.sessionStorage.setItem(STORAGE_KEY,JSON.stringify(val));
    }
}