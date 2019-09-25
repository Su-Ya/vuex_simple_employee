import Vue from "vue";
import Vuex from "vuex";
import server from "@/utils/API.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    employees: []
  },
  getters: {
    employees(state) {
      return state.employees;
    }
  },
  mutations: {
    setEmployees(state, data) {
      state.employees = data;
    },
    pushToEmployees(state, responseEmployee) {
      state.employees.push(responseEmployee);
    },
    updateEmployee(state, cachedEmployee) {
      console.log("updatedId", cachedEmployee.id);
      this.state.employees = this.state.employees.map(employee => {
        return employee.id === cachedEmployee.id ? cachedEmployee : employee;
      });
    },
    deleteEmployee(state, id) {
      state.employees = state.employees.filter(employee => employee.id !== id);
    }
  },
  actions: {
    async getEmployees({ commit }) {
      const res = await server.get("/users");
      commit("setEmployees", res);
    },
    async addNewEmployee({ commit }, postData) {
      /**********************************************  
        因練習用 API 都是固定回傳10筆資料，
        所以不能用 await dispatch('getEmployees') 更新畫面
        addNewEmployee({ commit, dispatch }, postData)
      ***********************************************/

      //post 會回傳剛新增的 employee 資料
      //不管新增幾筆，回傳的 id 都是 11，所以只能建11筆資料
      const responseEmployee = await server.post("/users", postData);
      commit("pushToEmployees", responseEmployee);
    },
    async editEmployee({ commit }, cachedEmployee) {
      /**********************************************  
        因練習的 put API 壞了，Status Code: 500
      ***********************************************/
      // await server.put(`/users/${postData.id}`, postData)

      await commit("updateEmployee", cachedEmployee);
    },
    async deleteEmployee({ commit }, id) {
      await server.delete(`/users/${id}`);
      await commit("deleteEmployee", id);
    }
  }
});
