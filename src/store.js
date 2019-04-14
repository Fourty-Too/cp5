import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    days: [],
    food: [],
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setDays(state, days) {
      state.days = days;
    },
    setFood(state, food) {
      state.food = food;
    },
  },
  actions: {
    async register(context, data) {
      try {
        let response = await axios.post("/api/users", data);
        context.commit('setUser', response.data);
        return "";
      } catch (error) {
        return error.response.data.message;
      }
    },
    async login(context, data) {
      try {
        let response = await axios.post("/api/users/login", data);
        context.commit('setUser', response.data);
        return "";
      } catch (error) {
        return error.response.data.message;
      }
    },
    async logout(context) {
      try {
        await axios.delete("/api/users");
        context.commit('setUser', null);
        return "";
      } catch (error) {
        return error.response.data.message;
      }
    },
    async getUser(context) {
      try {
        let response = await axios.get("/api/users");
        context.commit('setUser', response.data);
        return "";
      } catch (error) {
        return "";
      }
    },
    async addDay(context, data) {
      try {
        await axios.post('/api/days', data);
        return "";
      } catch (error) {
        return error.response.data.message;
      }
    },
    async getMyDays(context) {
      try {
        let response = await axios.get("/api/days");
        console.log(response);
        context.commit('setDays', response.data);
        return "";
      } catch (error) {
        return "";
      }
    },
    async getDay(context, id) {
      try {
        console.log("There");
        let response = await axios.get("/api/days/" + id);
        context.commit('setDays', response.data);

        console.log(response.data);

        return "";
      } catch (error) {
        return "";
      }
    },
    async addFood(context, data) {
      try {
        await axios.post('/api/food', data);

        return "";
      } catch (error) {
        console.log(error);
      }
    },
    async updateCalories(context, data) {
      try {
        let day = await axios.get("/api/days/" +  data.dayID);

        console.log("sdfsdfdsfdsfdsfdsf");
        console.log(data);
        console.log(day.data);

        let totalCalories = parseInt(day.data.calorieActual) + parseInt(data.calories);

        console.log(totalCalories);

        day.data.calorieActual = totalCalories;

        await axios.put('/api/days/' + data.dayID, day);

        return "";
      } catch (error) {
        console.log(error);
      }
    },
    async getFood(context, id) {
      try {
        let response = await axios.get("/api/food/" + id);
        context.commit('setFood', response.data);
        return "";
      } catch (error) {
        console.log(error);
      }
    },
  }
})
