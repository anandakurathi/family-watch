<script>
export default {
    name: "TasksList",
    props: ['todo', 'todos']
}
</script>

<template>
    <!-- if todo list is not null -->
    <div class="my-3 p-3 bg-body rounded shadow-sm" v-if="todo">
        <h6 class="border-bottom pb-2 mb-0">Let's Do things</h6>

        <slot name="taskSlot"></slot>

        <small class="d-block text-end mt-3">
            <a href="#">All updates</a>
        </small>
    </div>
    <!-- if no todo's show below -->
    <slot>
        <div>
            <p class="alert alert-info"><span>Hurray..!</span> No task to do. Let's set new goal</p>
        </div>
    </slot>
</template>

<style scoped>

</style>