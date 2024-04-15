import TaskMangment from "@/services/api/TaskMangment";

const TaskStore = {
    namespaced: true,

    state() {
        return {
            todos: null
        }
    },

    getters: {
        getAllTasks( state ) {
            console.log('getters getAllTasks');
            return state.todos;
        }
    },

    mutations: {
        getTasks( state, payload ) {
            console.log('mutation', payload)
            state.todos = payload;
        }
    },

    actions: {
        async getTasks( context ) {
            console.log('getTasks');
            const response = TaskMangment.getAllTasks();
            console.log(response);
            return TaskMangment.getAllTasks()
                .then(todos => {
                    context.commit('getTasks', todos);
                }).catch(error => {
                    console.log(error);
                }).finally(() => {
                    this.loading = false;
                })
        }
    }
}

export default TaskStore;