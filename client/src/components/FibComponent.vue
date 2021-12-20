<template>
  <div class="container">
    <div class="row justify-content-center">
      <!--<input class="form-outline" type="number" v-model="newFib" placeholder="Enter a number...">-->
      <div class="form-outline col-4">
        <input type="number" id="form12" class="form-control" v-model="newFib" placeholder="Enter a number..."/>
      </div>
      <button class="btn btn-sm btn-outline-primary col-2" @click="addFib">+ Fibonacci</button>
      <button class="btn btn-sm btn-danger col-1" @click="clearFibs">Clear</button>
    </div>
    <br>
    <div v-for="fib in fibs" v-bind:key="fib.number">
    <div class="container p-2 my-2">
        <h2>{{ fib.number }}</h2>
        <h4>{{ `Fibonacci = ${fib.fib_value}` }}</h4>
        <small> {{ `Generated on: ${fib.date}` }} </small>
      </div>
      <hr>
    </div>
  </div>
</template>

<script>
import FibService from '../FibService.js'

export default {
  name: 'Fibonacci',
  data(){
    return {
      fibs: [],
      error: '',
      newFib: '',
    }
  },
  async created(){
    try{
      this.fibs = await FibService.getFibs();
    }catch(err){
      this.error = err.message;
    }
  },
  methods: {
    async addFib(){
      try{
        await FibService.createFib(this.newFib);
        this.fibs = await FibService.getFibs();
        this.newFib = '';
      }catch(err){
        this.error = err.message;
      }
    },
    async clearFibs(){
      try{
        await FibService.deleteFibs();
        this.fibs = [];
      }catch(err){
        this.error = err.message;
      }
    }
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}


input + button {
  margin-left: 7px;
}

button + button {
  margin-left: 7px;
}
</style>
