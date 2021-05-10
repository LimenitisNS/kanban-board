<template>
  <div class="task">
    <div>
      <span>{{ task.title }}</span>
    </div>
    <div class="description">
      <span>{{ task.description }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TaskCard",
  props: {
    task: Object,
    default: () => ({}),
  },
};
</script>

<style scoped>
.task {
  margin: 10px;
  border: 1px solid #dbdbdb;
  border-radius: 10px;
  padding: 10px;
  background-color: #ffffff;
}
span {
  overflow: hidden;
  min-width: 10px;
  overflow-wrap: break-word;
}
.description {
  color: #919191;
  margin-top: 20px;
}
</style>
