/* eslint-disable */
/* jshint esversion: 6 */
import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

const store = new Vuex.Store({
    //state定义了应用状态的数据结构，同样可以在这里设置默认的初始状态
    state:{
        massage:"",
        aTodos:[{value:"默认默认",id:0}],
    },
    //getters就是从state中派生出状态，比如获取state中todoLists的总数。类似vue中计算属性(computed)
    getters:{
        nCounts(state){
            return state.aTodos.length;
        }
    },
    //mutations是唯一允许更新应用状态的地方。类似vue中的$on事件：每个 mutation 都有一个字符串的事件类型 (type)和 一个回调函数 (handler)
    mutations:{
        //新増 TodoList item
        ONADDTODO(state,item){
            state.aTodos.push(item);
        },
        //删除 TodoList item
        ONDELTODO(state,index){
            state.aTodos.splice(index,1);
        },
        //设置 错误提示信息
        ONERROR(state,str){
            state.massage=str;
        }
    },
    //actions定义提交触发更改信息的描述，在actions中可做任意异步操作，常见的例子有从服务端获取数据，
    //在数据获取完成后会调用store.commit()(类似vue中$emit)来调用更改 Store 中的状态。可以在组件中使用dispatch来发出 Actions
    actions:{
        //提交 ONADDTODO
        onAddTodo(context,item){
            if(item.value!=""){
                context.commit("ONADDTODO",item);
                context.commit("ONERROR","");
            }else{
                context.commit("ONERROR","添加失败");
            }
        },
        //提交 ONDELTODO
        onDelTodo({commit},index){
            commit("ONDELTODO",index);
        }
    },
    modules:{}
});

export default store;
