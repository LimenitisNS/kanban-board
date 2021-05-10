export default {
  state: {
    columns: [
      {
        title: "Backlog",
        tasks: [],
      },
      {
        title: "To Do",
        tasks: [],
      },
      {
        title: "In Process",
        tasks: [],
      },
      {
        title: "To Verify",
        tasks: [],
      },
      {
        title: "Done",
        tasks: [],
      },
    ],
  },
  mutations: {
    addTask(state, payload) {
      state.columns[0].tasks.unshift(payload);
    },
  },
  actions: {},
  getters: {
    allColumn: (state) => {
      return state.columns;
    },

    numberTask: (state) => (title) => {
      return state.columns.filter((column) => column.title === title)[0].tasks
        .length;
    },
  },
};
