<template>
<transition v-if="show" name="modal">
  <div class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-container">
        <div class="modal-header">
          <h1 class="modal-title">Upload</h1>
        </div>
        <div class="modal-body">
          <p v-if="errorMsg" class="error">{{errorMsg}}</p>
          <form @submit.prevent="addDay">
            <h2>Add a new day to the food tracker</h2>
            <input v-model="date" placeholder="Date">
            <p></p>
            <input oninput="this.value=this.value.replace(/(?![0-9])./gmi,'')" v-model="calorieGoal" placeholder="Today's Calorie Goal">
            <p></p>
            <button type="button" @click="close" class="pure-button">Close</button>
            <button type="submit" class="pure-button pure-button-secondary">Upload</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</transition>
</template>

<script>
export default {
  name: 'Uploader',
  props: {
    show: Boolean,
  },
  data() {
    return {
      date: '',
      calorieGoal: '',
      calorieActual: '',
      errorMsg: '',
    }
  },
  methods: {
    close() {
      this.$emit('escape');
    },
    async addDay() {
      try {
        if (this.date == "" || this.calorieGoal == "") {
          this.errorMsg = "Both fields required";
          return
        }
        else {
          this.errorMsg = "";
        }
        const formData = new FormData();
        formData.append('date', this.date);
        formData.append('calorieGoal', this.calorieGoal);
        formData.append('calorieActual', this.calorieActual);
        this.error = await this.$store.dispatch("addDay", formData);
        if (!this.error) {
          this.date = '';
          this.calorieGoal = '';
          this.$emit('uploadFinished');
        }
      } catch (error) {
        console.log(error);
      }
    },
  }
}
</script>

<style scoped>
input {
  width: 100%;
}

textarea {
  width: 100%;
  height: 100px
}

.pure-button-secondary {
  float: right;
}
</style>
