import http from '../HttpCore.js'

class TaskManagementService {
  async getAllTasks() {
    console.log('getAllTasks')
    return await http.get('/todos').then((response) => {
      console.log(response.data)
      return response.data
    })
  }

  updateTasks() {}

  deleteTasks() {}
}
export default new TaskManagementService()
