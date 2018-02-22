<template>
  <div id="app">
    <h1>Vue.js Vue TodoList</h1>
    <hr>
    <todoInput />
    <todoList />
    <p>todoList 数量：{{todoCount}}</p>
    <pre>{{$store.state}}</pre>
  </div>
</template>

<script>
import todoInput from './components/input.vue';
import todoList from './components/list.vue';
import {mapGetters} from "vuex";

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed:{
    ...mapGetters({
      todoCount:"nCounts"
    })
  },
  components:{
    todoInput,
    todoList
  }
}
</script>
