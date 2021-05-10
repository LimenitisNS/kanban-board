<template>
  <div class="task-form">
    <form @submit.prevent="submit">
      <div class="flex-element">
        <input placeholder="Задача" v-model="title" />
      </div>
      <div class="flex-element">
        <input placeholder="Описание" v-model="description" />
      </div>
      <div class="flex-element">
        <button type="submit">Добавить</button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "FormAddingTask",
  data() {
    return {
      title: "",
      description: "",
    };
  },
  methods: {
    ...mapMutations(["addTask"]),
    submit() {
      this.addTask({
        id: Math.random().toString(36).substr(2),
        title: this.title,
        description: this.description,
      });
      this.title = this.description = "";
    },
  },
};
</script>

<style scoped>
.task-form {
  display: flex;
  flex-wrap: wrap;
}

.flex-element {
  float: left;
}

input {
  margin-right: 10px;
  width: 300px;
  margin-bottom: 10px;
}
</style>
