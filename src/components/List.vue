<template>
    <div class="todolist">
      <ul class="list-group">
        <li class="list-group-item" v-for="(item,index) in aTodos" >
            <span>{{item.value}}</span>
            <button class="btn btn-default" @click="delItem(index)">删除</button>
        </li>
       </ul>
    </div>
</template>
<script>
    import {mapState} from "vuex";
    export default{
        data(){
            return {}
        },
        methods:{
            delItem(index){
                this.$store.dispatch('onDelTodo',index);
            }
        },
        computed:{
            ...mapState([
                'aTodos'
            ])
        }
    }
</script>
