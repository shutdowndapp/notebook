import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions.js'
Vue.use(Vuex)

const noteTime = () => {
    const current = new Date();
    return current.getFullYear()+'-'+(current.getMonth()+1)+'-'+current.getDate();
}
/*
通过构造函数模式，创建自定义的构造函数，定义处理数据对象
 */
const allFunc = function( item ) {
    this.get = function () {
        return JSON.parse( localStorage.getItem(item) )
    }
    this.set = function (obj) {
        localStorage.setItem(item, JSON.stringify(obj))
    }
    this.clear = function () {
        localStorage.removeItem(item)
    }
}
/*
实例化数据对象 
 */
const result = new allFunc('notepad');

// 初始化读取localStorage
const state = result.get() || {
    content: [],
    count: 0
}

const mutations = {
  /*
  处理获取input输入框值 并设置,默认都为未完成
  @param setCon: string content
  */  
    addSetEvent(state,setCon) {
        //索引值+1
        state.count ++
        state.content.unshift( {
            id: state.count,
            type: setCon.type,
            content:setCon.content,
            time: noteTime()
        });
        //设置loaclStorage存储
        result.set(state)
    },
    /*
    修改 type
    Object setIdType  {id: ,type:  }
    */
    editType(state,setIdType) {
        state.content.filter(function(d){
            if (d.id == setIdType.id ) {
                d.type = setIdType.type
            }
        })
         //设置loaclStorage存储
        result.set(state)
    },
    // 删除item {id: }
    deleteItem(state,deleteId) {
        state.content.filter(function(d,index,arr){
            if (d.id == deleteId.id ) {
                arr.splice(index,1)
            }           
        })
        //设置loaclStorage存储
        result.set(state)
    }
}

export default  new Vuex.Store ({
    state,
    mutations,
    actions
})
