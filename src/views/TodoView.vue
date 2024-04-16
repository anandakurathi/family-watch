<script>
import TasksList from '@/components/TasksList.vue'
import TaskDetails from '@/components/TaskDetails.vue'
import HeaderNav from '@/components/HeaderNav.vue'
import FooterNav from '@/components/FooterNav.vue'
import PageBanner from '@/components/PageBanner.vue'
import TaskManagementService from '@/services/api/TaskManagementService.js'

export default {
  name: 'todo-view',
  data() {
    return {
      todos: {}
    }
  },
  components: {
    PageBanner,
    FooterNav,
    HeaderNav,
    TaskDetails,
    TasksList
  },
  methods: {
    retrieveTasks() {
      TaskManagementService.getAllTasks()
        .then((response) => {
          this.todos = response
        })
        .catch((error) => {
          console.log(error)
        })
    }
  },
  mounted() {
    this.retrieveTasks()

    document.querySelector('#navbarSideCollapse').addEventListener('click', function () {
      document.querySelector('.offcanvas-collapse').classList.toggle('open')
    })
  }
}
</script>

<template>
  <header-nav />
  <main class="container min-vh-100">
    <page-banner />
    <tasks-list>
      <template v-if="todos">
        <task-details v-for="todo in todos.todos" :key="todo.id" :todo="todo"></task-details>
      </template>
    </tasks-list>
  </main>
  <footer-nav />
</template>

<style scoped></style>
