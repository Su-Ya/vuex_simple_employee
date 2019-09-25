<template>
  <div class="employees">
    <div class="spane-30">
      <div>
        <label>Employee name</label>
        <input type="text" v-model="newEmployee.name" />
      </div>
      <div>
        <label>Employee Email</label>
        <input type="text" v-model="newEmployee.email" />
      </div>
      <button @click="addNew">Add Employee</button>
    </div>
    <div>
      <div class="table-title">
        <div>Name</div>
        <div>Email</div>
        <div>Actions</div>
      </div>
      <div v-for="employee in gettersEmployees" :key="employee.id">
        <div class="table-text" v-if="editingId === employee.id">
          <div><input type="text" v-model="cachedEmployee.name" /></div>
          <div><input type="text" v-model="cachedEmployee.email" /></div>
          <div>
            <button @click="submit">送出</button>
            <button @click="cancel">取消</button>
          </div>
        </div>
        <div class="table-text" v-else>
          <div>{{ employee.name }}</div>
          <div>{{ employee.email }}</div>
          <div>
            <button @click="editMode(employee)">編輯</button>
            <button @click="deleteEm(employee.id)">刪除</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "employees",
  data() {
    return {
      editingId: null,
      newEmployee: {
        name: null,
        email: null
      },
      cachedEmployee: {}
    };
  },
  methods: {
    addNew() {
      this.$store.dispatch("addNewEmployee", this.newEmployee);
      this.newEmployee = {
        name: null,
        email: null
      };
    },
    editMode(employee) {
      this.editingId = employee.id;
      this.cachedEmployee = Object.assign({}, employee);
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
    }
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
</style>
