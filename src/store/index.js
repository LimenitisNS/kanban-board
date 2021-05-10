import { createStore } from "vuex";
import kanban from "@/store/modules/kanban";

export default createStore({
  modules: {
    kanban,
  },
});
