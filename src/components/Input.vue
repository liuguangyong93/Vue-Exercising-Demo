<template>
    <div class="form-group ">
      <input type="text" class="form-control"  placeholder="" v-model="value"  />
      <button type="buttom" class="btn btn-default" @click="addItem">Add Item</button>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                value:"",
                id:0
            }
        },
        methods:{
            addItem(){
                let item = {
                    value: this.value,
                    id: ++this.id
                    };
                this.value="";
                this.$store.dispatch("onAddTodo",item);
            }
        }

    }
</script>