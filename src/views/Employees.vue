<template>
  <div class="employees">
    <div class="spane-30">
      <div>
        <label>Employee name</label>
        <input
          type="text"
          :value="newEmployee.name"
          @input="updateNewEmployeeName"
        />
      </div>
      <div>
        <label>Employee Email</label>
        <input
          type="text"
          :value="newEmployee.email"
          @input="updateNewEmployeeEmail"
        />
      </div>
      <button @click="addNew">Add Employee</button>
    </div>
    <section>
      <div class="table-title">
        <div>Name</div>
        <div>Email</div>
        <div>Actions</div>
      </div>
      <div v-for="employee in gettersEmployees" :key="employee.id">
        <div class="table-text">
          <div>
            <input
              type="text"
              :class="{ inputBorderNone: !(editingId === employee.id) }"
              :value="employee.name"
              :disabled="!(editingId === employee.id)"
              @input="updateCachedEmployee('name', $event)"
            />
          </div>
          <div>
            <input
              type="text"
              :class="{ inputBorderNone: !(editingId === employee.id) }"
              :value="employee.email"
              :disabled="!(editingId === employee.id)"
              @input="updateCachedEmployee('email', $event)"
            />
          </div>
          <div v-if="editingId === employee.id">
            <button @click="submit">送出</button>
            <button @click="cancel">取消</button>
          </div>
          <div v-else>
            <button @click="editMode(employee)">編輯</button>
            <button @click="deleteEm(employee.id)">刪除</button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "employees",
  data() {
    return {
      editingId: null,
      cachedEmployee: {}
    };
  },
  methods: {
    updateNewEmployeeName(event) {
      this.$store.commit("updateNewEmployeeName", event.target.value);
    },
    updateNewEmployeeEmail(event) {
      this.$store.commit("updateNewEmployeeEmail", event.target.value);
    },
    addNew() {
      this.$store.dispatch("addNewEmployee");
    },
    editMode(employee) {
      this.editingId = employee.id;
      this.cachedEmployee = Object.assign({}, employee);
    },
    updateCachedEmployee(key, event) {
      this.cachedEmployee[key] = event.target.value;
    },
    submit() {
      this.$store.dispatch("editEmployee", this.cachedEmployee);
      this.editingId = null;
    },
    cancel() {
      this.editingId = null;
    },
    deleteEm(id) {
      this.$store.dispatch("deleteEmployee", id);
    }
  },
  computed: {
    gettersEmployees() {
      return this.$store.getters.employees;
    },
    ...mapState({ newEmployee: state => state.newEmployee })
  }
};
</script>

<style lang="scss">
.table-title {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  border-bottom: 1px solid;
}
.table-text {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  border-bottom: 1px solid;
  padding: 8px 0;
}
.spane-30 {
  margin-bottom: 30px;
}
.inputBorderNone {
  border: 0;
}
</style>
