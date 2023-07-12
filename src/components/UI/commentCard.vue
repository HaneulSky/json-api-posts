<script setup>
const props = defineProps({
  comment: Object
})
</script>

<template>
  <div class="comment-card">
    <h1>{{ comment.name }}</h1>
    <p>{{ comment.body }}</p>
    <p>Author {{ comment.email }}</p>
  </div>
</template>

<style>
.comment-card {
  border: 1px solid black;
  margin: 5px;
  padding: 3px;
}
</style>
