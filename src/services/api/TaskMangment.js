import axios from "axios";

export default {
    increment() {
        console.log('increment: ', this.count);
        this.count++
    },
    async getAllTasks() {
        console.log('getAllTasks')
        return await axios.get("https://dummyjson.com/todos")
            .then(response => {
                console.log(response.data);
                return response.data
            });
    },
    updateTasks() {},
    deleteTasks() {}

}