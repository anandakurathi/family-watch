<script>
// import tasks from "@/mixins/tasks";

export default {
  name: 'TaskDetails',
  props: ['todo'],
  // mixins: [tasks],
  methods: {
    todoStatus(status) {
      return status === true ? 'Completed' : 'Waiting'
    }
  }
}
</script>

<template>
  <div class="d-flex flex-row text-muted pt-3 border-bottom" v-if="todo">
    <svg
      class="bd-placeholder-img flex-shrink-0 me-2 rounded"
      width="32"
      height="32"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Placeholder: 32x32"
      preserveAspectRatio="xMidYMid slice"
      focusable="false"
    >
      <title>Placeholder</title>
      <rect width="100%" height="100%" fill="#007bff" />
      <text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text>
    </svg>
    <div class="pb-3 mb-0 small lh-sm w-100">
      <span class="d-block">{{ todo.todo }}</span>
      <div class="d-flex flex-row justify-content-between">
        <strong class="text-gray-dark">Status: {{ todoStatus(todo.completed) }}</strong>
        <p class="justify-content-end">
          <a href="#" class="text-success" data-bs-toggle="tooltip" title="Task Done">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-check2-square"
              viewBox="0 0 16 16"
            >
              <path
                d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5z"
              />
              <path
                d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0"
              />
            </svg> </a
          >&nbsp;
          <a href="#" class="text-danger" data-bs-toggle="tooltip" title="Delete Task">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-trash"
              viewBox="0 0 16 16"
            >
              <path
                d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"
              />
              <path
                d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"
              />
            </svg>
          </a>
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
