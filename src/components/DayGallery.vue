<template>
<div>
  <div class="day">
    <p class="dayDate">Date</p>
    <p class="dayGoal">Calorie Goal</p>
    <p class="dayActual">Calories Consumed</p>
  </div>
  <hr />
  <div v-for="day in days" v-bind:key="day._id">
    <div class="day">
      <p class="dayDate">{{day.date}}</p>
      <p class="dayGoal">{{day.calorieGoal}}</p>
      <p class="dayActual">{{day.calorieActual}}</p>
    </div>
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

</style>
