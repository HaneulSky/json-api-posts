<script setup>
import { onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'

import CommentCard from '@/components/UI/commentCard.vue'
import CommentForm from './UI/commentForm.vue'

const route = useRoute()

const store = useStore()

onMounted(() => {
  store.dispatch('comment/fetchCommentsList', route.params.id)
})

const comments = computed(() => store.getters['comment/COMMENTS'])
</script>

<template>
  <h2>Comments</h2>
  <CommentForm />
  <CommentCard v-for="item in comments" :key="item.id" :comment="item" />
</template>
