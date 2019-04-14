<template>
<div>
  <div v-if="day">
    <b><p class="dayTitle">{{day.date}}</p></b>
    <br/>
    <b><p>Calorie Goal: {{day.calorieGoal}}</p></b>
    <p v-if="day.calorieActual < day.calorieGoal" class="dayActual" style="color: #00FF00;"><b>Calories Consumed: {{day.calorieActual}}</b></p>
    <p v-else-if="day.calorieActual > day.calorieGoal" class="dayActual" style="color: #FF0000;"><b>Calories Consumed: {{day.calorieActual}}</b></p>
    <p v-else class="dayActual" style="color: #000;"><b>Calories Consumed: {{day.calorieActual}}</b></p>
    <br/>

    <p v-if="errorMsg" class="error">{{errorMsg}}</p>
    <form @submit.prevent="addFood" class="pure-form pure-form-aligned">
        <p>Add a food</p>
        <div style="display: flex;">
          <input v-model="foodTitle" style="width: 55%; margin-right: 20px;" placeholder="Title of Food">
          <input v-model="calories" style="width: 55%; margin-right: 20px;" placeholder="Calories" oninput="this.value=this.value.replace(/(?![0-9])./gmi,'')">
          <button type="submit" class="pure-button pure-button-primary">Add Food</button>
        </div>
      <div class="pure-controls">
      </div>
    </form>
    <h3>Food Eaten Today</h3>
    <div v-if="food">
      <div style="display: flex">
        <p style="flex: 4">Food Item</p>
        <p style="flex: 1">Calories</p>
      </div>
      <div v-for="foodItem in food" v-bind:key="foodItem._id">
        <hr>
        <div style="display: flex">
          <p style="flex: 4">{{foodItem.foodTitle}}</p>
          <p>{{foodItem.name}}</p>
          <p style="flex: 1">{{foodItem.calories}}</p>
        </div>
      </div>
        <hr>
    </div>
  </div>
</div>
</template>

<script>

export default {
  name: 'Day',
  data() {
    return {
      foodTitle: '',
      calories: '',
      errorMsg: '',
    }
  },
  props: {
    id: String
  },
  async created() {
    await this.$store.dispatch("getUser");
    await this.$store.dispatch("getDay", this.$route.query.id);
    await this.$store.dispatch("getFood", this.$route.query.id);
  },
  computed: {
    day() {
      return this.$store.state.days;
    },
    user() {
      return this.$store.state.user;
    },
    food() {
      return this.$store.state.food;
    }
  },
  methods: {
    async addFood() {
      try {
        console.log(this.foodTitle);
        if (this.foodTitle == "" || this.calories == "") {
          this.errorMsg = "Both fields required";
        }
        else {
        this.errorMsg = "";
          this.error = await this.$store.dispatch("addFood", {
            name: this.user.name,
            dayID: this.$route.query.id,
            foodTitle: this.foodTitle,
            foodCalories: this.calories,
          });

          this.error = this.$store.dispatch("updateCalories", {
            calories: this.calories,
            dayID: this.$route.query.id,
          })

          this.foodTitle = '';
          this.calories = '';

          await this.$store.dispatch("getDay", this.$route.query.id);
          await this.$store.dispatch("getFood", this.$route.query.id);
          await this.$store.dispatch("getDay", this.$route.query.id);
          await this.$store.dispatch("getFood", this.$route.query.id);
          await this.$store.dispatch("getDay", this.$route.query.id);
          await this.$store.dispatch("getFood", this.$route.query.id);
          await this.$store.dispatch("getDay", this.$route.query.id);
          await this.$store.dispatch("getFood", this.$route.query.id);
          await this.$store.dispatch("getDay", this.$route.query.id);
          await this.$store.dispatch("getFood", this.$route.query.id);
          await this.$store.dispatch("getDay", this.$route.query.id);
          await this.$store.dispatch("getFood", this.$route.query.id);
          await this.$store.dispatch("getDay", this.$route.query.id);
          await this.$store.dispatch("getFood", this.$route.query.id);
          await this.$store.dispatch("getDay", this.$route.query.id);
          await this.$store.dispatch("getFood", this.$route.query.id);
          await this.$store.dispatch("getDay", this.$route.query.id);
          await this.$store.dispatch("getFood", this.$route.query.id);
          await this.$store.dispatch("getDay", this.$route.query.id);
          await this.$store.dispatch("getFood", this.$route.query.id);
          await this.$store.dispatch("getDay", this.$route.query.id);
          await this.$store.dispatch("getFood", this.$route.query.id);
          await this.$store.dispatch("getDay", this.$route.query.id);
          await this.$store.dispatch("getFood", this.$route.query.id);
          await this.$store.dispatch("getDay", this.$route.query.id);
          await this.$store.dispatch("getFood", this.$route.query.id);
          await this.$store.dispatch("getDay", this.$route.query.id);
          await this.$store.dispatch("getFood", this.$route.query.id);
          await this.$store.dispatch("getDay", this.$route.query.id);
          await this.$store.dispatch("getFood", this.$route.query.id);
          await this.$store.dispatch("getDay", this.$route.query.id);
          await this.$store.dispatch("getFood", this.$route.query.id);
          await this.$store.dispatch("getDay", this.$route.query.id);
          await this.$store.dispatch("getFood", this.$route.query.id);
          await this.$store.dispatch("getDay", this.$route.query.id);
          await this.$store.dispatch("getFood", this.$route.query.id);
          await this.$store.dispatch("getDay", this.$route.query.id);
          await this.$store.dispatch("getFood", this.$route.query.id);
          await this.$store.dispatch("getDay", this.$route.query.id);
          await this.$store.dispatch("getFood", this.$route.query.id);
          await this.$store.dispatch("getDay", this.$route.query.id);
          await this.$store.dispatch("getFood", this.$route.query.id);
          await this.$store.dispatch("getDay", this.$route.query.id);
          await this.$store.dispatch("getFood", this.$route.query.id);
          await this.$store.dispatch("getDay", this.$route.query.id);
          await this.$store.dispatch("getFood", this.$route.query.id);
          await this.$store.dispatch("getDay", this.$route.query.id);
          await this.$store.dispatch("getFood", this.$route.query.id);
          await this.$store.dispatch("getDay", this.$route.query.id);
          await this.$store.dispatch("getFood", this.$route.query.id);
          await this.$store.dispatch("getDay", this.$route.query.id);
          await this.$store.dispatch("getFood", this.$route.query.id);
          await this.$store.dispatch("getDay", this.$route.query.id);
          await this.$store.dispatch("getFood", this.$route.query.id);
          await this.$store.dispatch("getDay", this.$route.query.id);
          await this.$store.dispatch("getFood", this.$route.query.id);
          await this.$store.dispatch("getDay", this.$route.query.id);
          await this.$store.dispatch("getFood", this.$route.query.id);
          await this.$store.dispatch("getDay", this.$route.query.id);
          await this.$store.dispatch("getFood", this.$route.query.id);
          await this.$store.dispatch("getDay", this.$route.query.id);
          await this.$store.dispatch("getFood", this.$route.query.id);
          await this.$store.dispatch("getDay", this.$route.query.id);
          await this.$store.dispatch("getFood", this.$route.query.id);
          await this.$store.dispatch("getDay", this.$route.query.id);
          await this.$store.dispatch("getFood", this.$route.query.id);
          await this.$store.dispatch("getDay", this.$route.query.id);
          await this.$store.dispatch("getFood", this.$route.query.id);
          await this.$store.dispatch("getDay", this.$route.query.id);
          await this.$store.dispatch("getFood", this.$route.query.id);
          await this.$store.dispatch("getDay", this.$route.query.id);
          await this.$store.dispatch("getFood", this.$route.query.id);
          await this.$store.dispatch("getDay", this.$route.query.id);
          await this.$store.dispatch("getFood", this.$route.query.id);
          await this.$store.dispatch("getDay", this.$route.query.id);
          await this.$store.dispatch("getFood", this.$route.query.id);
          await this.$store.dispatch("getDay", this.$route.query.id);
          await this.$store.dispatch("getFood", this.$route.query.id);
          await this.$store.dispatch("getDay", this.$route.query.id);
          await this.$store.dispatch("getFood", this.$route.query.id);
          await this.$store.dispatch("getDay", this.$route.query.id);
          await this.$store.dispatch("getFood", this.$route.query.id);
          await this.$store.dispatch("getDay", this.$route.query.id);
          await this.$store.dispatch("getFood", this.$route.query.id);
          await this.$store.dispatch("getDay", this.$route.query.id);
          await this.$store.dispatch("getFood", this.$route.query.id);
          await this.$store.dispatch("getDay", this.$route.query.id);
          await this.$store.dispatch("getFood", this.$route.query.id);
          await this.$store.dispatch("getDay", this.$route.query.id);
          await this.$store.dispatch("getFood", this.$route.query.id);
          await this.$store.dispatch("getDay", this.$route.query.id);
          await this.$store.dispatch("getFood", this.$route.query.id);
          await this.$store.dispatch("getDay", this.$route.query.id);
          await this.$store.dispatch("getFood", this.$route.query.id);
          await this.$store.dispatch("getDay", this.$route.query.id);
          await this.$store.dispatch("getFood", this.$route.query.id);
          await this.$store.dispatch("getDay", this.$route.query.id);
          await this.$store.dispatch("getFood", this.$route.query.id);
          await this.$store.dispatch("getDay", this.$route.query.id);
          await this.$store.dispatch("getFood", this.$route.query.id);
          await this.$store.dispatch("getDay", this.$route.query.id);
          await this.$store.dispatch("getFood", this.$route.query.id);
          await this.$store.dispatch("getDay", this.$route.query.id);
          await this.$store.dispatch("getFood", this.$route.query.id);
          await this.$store.dispatch("getDay", this.$route.query.id);
          await this.$store.dispatch("getFood", this.$route.query.id);
          await this.$store.dispatch("getDay", this.$route.query.id);
          await this.$store.dispatch("getFood", this.$route.query.id);
          await this.$store.dispatch("getDay", this.$route.query.id);
          await this.$store.dispatch("getFood", this.$route.query.id);
          await this.$store.dispatch("getDay", this.$route.query.id);
          await this.$store.dispatch("getFood", this.$route.query.id);
          await this.$store.dispatch("getDay", this.$route.query.id);
          await this.$store.dispatch("getFood", this.$route.query.id);
          await this.$store.dispatch("getDay", this.$route.query.id);
          await this.$store.dispatch("getFood", this.$route.query.id);
          await this.$store.dispatch("getDay", this.$route.query.id);
          await this.$store.dispatch("getFood", this.$route.query.id);
          await this.$store.dispatch("getDay", this.$route.query.id);
          await this.$store.dispatch("getFood", this.$route.query.id);
          await this.$store.dispatch("getDay", this.$route.query.id);
          await this.$store.dispatch("getFood", this.$route.query.id);
          await this.$store.dispatch("getDay", this.$route.query.id);
          await this.$store.dispatch("getFood", this.$route.query.id);
          await this.$store.dispatch("getDay", this.$route.query.id);
          await this.$store.dispatch("getFood", this.$route.query.id);
          await this.$store.dispatch("getDay", this.$route.query.id);
          await this.$store.dispatch("getFood", this.$route.query.id);
          await this.$store.dispatch("getDay", this.$route.query.id);
          await this.$store.dispatch("getFood", this.$route.query.id);
          await this.$store.dispatch("getDay", this.$route.query.id);
          await this.$store.dispatch("getFood", this.$route.query.id);
          await this.$store.dispatch("getDay", this.$route.query.id);
          await this.$store.dispatch("getFood", this.$route.query.id);
          await this.$store.dispatch("getDay", this.$route.query.id);
          await this.$store.dispatch("getFood", this.$route.query.id);
          await this.$store.dispatch("getDay", this.$route.query.id);
          await this.$store.dispatch("getFood", this.$route.query.id);
          await this.$store.dispatch("getDay", this.$route.query.id);
          await this.$store.dispatch("getFood", this.$route.query.id);
          await this.$store.dispatch("getDay", this.$route.query.id);
          await this.$store.dispatch("getFood", this.$route.query.id);
          await this.$store.dispatch("getDay", this.$route.query.id);
          await this.$store.dispatch("getFood", this.$route.query.id);
        }

      } catch (error) {
        console.log(error);
      }
    }
  },
}
</script>

<style scoped>
.dayTitle {
  margin: 0px;
  font-size: 40px;
}

p {
  margin: 0px;
}

</style>
