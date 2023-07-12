<script setup>
import { VCard, VBtn } from 'vuetify/lib/components/index.mjs'

const props = defineProps({
  post: Object
})
</script>

<template>
  <VCard class="post" width="400">
    <div class="content">
      <h2>{{ post.title }}</h2>
      <p>{{ post.body }}</p>
    </div>
    <router-link :to="'/post/' + post.id">
      <VBtn outlined class="mt-5">Open</VBtn>
    </router-link>
  </VCard>
</template>

<style scoped>
.post {
  display: flex;
  flex-direction: column;
  max-width: 40%;
  max-height: 250px;
  border: 1px solid gray;
  border-radius: 5px;
  box-shadow: inset;
  padding: 10px;
}

.content {
  max-height: 200px;
  overflow: hidden;
}
</style>
