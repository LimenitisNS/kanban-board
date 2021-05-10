<template>
  <div>
    <form-adding-task></form-adding-task>
  </div>
  <div class="kanban">
    <div class="flexbox">
      <div class="group-task" v-for="column in allColumn" :key="column.title">
        <div class="group-header">
          <div>
            <span>{{ column.title }}</span>
          </div>
          <div class="number">
            <span>{{ numberTask(column.title) }}</span>
          </div>
        </div>
        <draggable
          v-model="column.tasks"
          group="tasks"
          ghost-class="ghost-task"
          item-key="id"
        >
          <template #item="{ element }">
            <TaskCard :task="element" :key="element.id"></TaskCard>
          </template>
        </draggable>
      </div>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import TaskCard from "@/components/TaskCard";
import { mapGetters } from "vuex";
import FormAddingTask from "@/components/FormAddingTask";

export default {
  name: "App",
  components: {
    draggable,
    TaskCard,
    FormAddingTask,
  },
  computed: {
    ...mapGetters(["allColumn", "numberTask"]),
  },
};
</script>

<style>
.group-task {
  flex-grow: 1;
  float: left;
  width: 200px;
  margin-left: 10px;
  margin-bottom: 10px;
  padding-bottom: 10px;
}

.group-header {
  display: inline-flex;
  width: 100%;
  padding: 20px 0 15px 0;
  border-bottom: 2px solid #4e4d4d;
  justify-content: space-between;
}

.flexbox {
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  background-color: #eaeaea;
}

.number {
  display: flex;
  width: 25px;
  height: 25px;
  margin-right: 5px;
  border-radius: 10px;
  align-content: center;
  justify-content: center;
  flex-wrap: wrap;
  background-color: white;
  font-size: 20px;
}

.ghost-task {
  opacity: 0.5;
}

.kanban {
  background-color: #eaeaea;
}

.add-button {
  width: 30px;
  margin: 0 0 5px 20px;
}
</style>
