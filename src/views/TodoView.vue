<script>
import TasksList from '@/components/TasksList.vue'
import TaskDetails from '@/components/TaskDetails.vue'
import HeaderNav from '@/components/HeaderNav.vue'
import FooterNav from '@/components/FooterNav.vue'
import { mapActions, mapGetters, mapState,  } from 'vuex'
import PageBanner from "@/components/PageBanner.vue";

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
  computed: {
    ...mapState('TaskStore', ['todos']),
    ...mapActions('TaskStore', ['getTasks']),
    ...mapGetters('TaskStore', ['getAllTasks']),
  },
  created() {
    this.$store.dispatch('TaskStore/getTasks')
    console.log('created Hook', this.$store.getters.getAllTasks)
  },
  mounted() {
    document.querySelector('#navbarSideCollapse').addEventListener('click', function() {
      document.querySelector('.offcanvas-collapse').classList.toggle('open')
    })
    console.log('mounted')
  },
  watch:{
    '$store.state.TaskStore.todos': function() {
      console.log(this.$store.state.TaskStore.todos)
      this.todos = this.$store.state.TaskStore.todos;
    }
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

<style scoped>

</style>