<template lang="html">
  <div class="">
    <Navbar></Navbar>
      <form >
        <label>weight: </label><input type="text" v-model="bmiData.weight">
        <label>height: </label><input type="text" v-model="bmiData.height">
        <label>sex: </label><input type="text" v-model="bmiData.sex">
        <label>age: </label><input type="text" v-model="bmiData.age">
        <button @click="bmi">get bmi</button>
      </form>
      <div class="">
        {{bmiList.bmi}}
        <ul>
          <li>bmiList.bmi</li>
        </ul>
      </div>
      <div class="">
        <form class="">
          <input type="text" v-model="food">
          <button @click="getFood">Get Food</button>
        </form>
      </div>
      <ul v-for="recipe in foodList.hits">
        <li>{{recipe.recipe.label}}</li>
        <img v-bind:src="recipe.recipe.image" alt="">
      </ul>
  </div>
</template>

<script>
import Navbar from './Navbar'
export default {
  data (){
    return {
      bmiData: {
        weight: '',
        height: '',
        sex: '',
        age: ''
      },
      bmiList: {},
      bmiValue: '',
      food: '',
      foodList: {},
      recipes: []
    }
  },
  components: {
    Navbar
  },
  methods: {
    bmi: function() {
      const self = this
      this.axios.post('http://localhost:3000/bmi', {
        weight: self.bmiData.weight,
        height: self.bmiData.height,
        sex: self.bmiData.sex,
        age: self.bmiData.age
      })
      .then((response)=>{
        console.log(response.data);
        this.bmiList = response.data
        this.bmiValue = bmiList.bmi.value
        // console.log(bmiList.bmi.value);
      })
      .catch((err)=>{
        console.log(err);
      })
    },
    getFood: function(){
      console.log(this.food);
      console.log(this.bmiValue);
      const self = this
      this.axios.post('http://localhost:3000/foods', {
        value: self.bmiValue,
        recipe: self.food
      })
      .then((response)=>{
        console.log(response.data);
        this.foodList = response.data
        this.recipes = this.foodList.hits
      })
      .catch((err)=>{
        console.log(err);
      })
    }
  }
}
</script>

<style lang="css">
</style>
