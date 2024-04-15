import { createStore } from 'vuex';
import TaskStore from './TasksMadule/TaskStore';
// configure the store
const store = createStore({
  modules: {
    TaskStore: TaskStore
  }
})

// export store to use in main.js
export default store;