<template>
<div>
  <div class="day2">
    <p class="dayDate">Date</p>
    <p class="dayGoal">Calorie Goal</p>
    <p class="dayActual">Calories Consumed</p>
  </div>
  <hr />
  <div v-for="day in days" v-bind:key="day._id">
    <router-link :to="{ path: '/day', query: { id: day._id }}"><a href="#"><div class="day">
      <p class="dayDate" style="color: #000;">{{day.date}}</p>
      <p class="dayGoal" style="color: #000;"><b>{{day.calorieGoal}}</b></p>
      <p v-if="day.calorieActual < day.calorieGoal" class="dayActual" style="color: #00FF00;"><b>{{day.calorieActual}}</b></p>
      <p v-else-if="day.calorieActual > day.calorieGoal" class="dayActual" style="color: #FF0000;"><b>{{day.calorieActual}}</b></p>
      <p v-else class="dayActual" style="color: #000;"><b>{{day.calorieActual}}</b></p>
    </div></a></router-link>
    <hr />
  </div>
</div>
</template>

<script>

export default {
  name: 'DayGallery',
  props: {
    days: Array
  },
}
</script>

<style scoped>
.day {
  display: flex;
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
}

.day2 {
  margin: 0 0 1.5em;
  display: flex;
  width: 100%;
}

.dayDate {
  margin: 0px;
  font-size: 1.2em;
  flex: 5;
}

.dayGoal {
  margin: 0px;
  font-size: 0.9em;
  font-weight: normal;
  flex: 2;
}

.dayActual {
  margin: 0px;
  font-size: 0.9em;
  font-weight: normal;
  flex: 2;
}

p {
  margin: 0px;
}

a {
  text-decoration: none;
  text-color: none;
}

hr {
  margin: 0px;
  padding: 0px;
}

.day:hover {
  background-color: #D3D3D3;
}
</style>
