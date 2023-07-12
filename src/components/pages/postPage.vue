<script setup>
import { onMounted, computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'

import { VBtn, VDivider } from 'vuetify/lib/components/index.mjs'
import CommentsList from '../commentsList.vue'

const store = useStore()
const route = useRoute()
const router = useRouter()

onMounted(() => {
  store.dispatch('post/fetchPostInfo', route.params.id)
})

const postInfo = computed(() => store.getters['post/POST'])
const userInfo = computed(() => store.getters['user/USER'])
const postIsLoading = computed(() => store.getters['post/IS_LOADING'])

const goBack = () => {
  router.go(-1)
}

watch(postIsLoading, () => {
  console.log('loaded', postInfo.value.userId)
  store.dispatch('user/fetchUserById', postInfo.value.userId)
})
</script>

<template>
  <div class="container">
    <VBtn class="card-button" @click="goBack()">Back</VBtn>
    <div>
      <h1>{{ postInfo.title }}</h1>
      <p>{{ postInfo.body }}</p>
    </div>

    <VDivider />

    <div v-if="userInfo.id">
      <p>name: {{ userInfo.name }}</p>
      <p>website: {{ userInfo.website }}</p>
    </div>

    <CommentsList />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
}
.card-button {
  width: fit-content;
}
</style>
