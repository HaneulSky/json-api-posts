<script setup>
import { computed, onMounted, ref, watch } from 'vue'
import { useStore } from 'vuex'

import SearchField from './UI/searchField.vue'
import PostCard from './UI/postCard.vue'

const store = useStore()

const author = ref('')

onMounted(() => {
  store.dispatch('user/fetchUsersList')
  store.dispatch('post/fetchPostsList')
})

const usersList = computed(() => store.getters['user/USERS'])
const postsList = computed(() => store.getters['post/POSTS'])

watch(author, () => {
  store.dispatch('post/fetchPostsByUser', author)
})
</script>

<template>
  <SearchField v-model="author" :usersList="usersList" />
  <div class="container">
    <PostCard v-for="item in postsList" :key="item.id" :post="item" />
  </div>
</template>

<style>
.container {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 15px;
}
</style>
