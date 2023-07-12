<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { VBtn, VForm, VTextField, VTextarea } from 'vuetify/lib/components/index.mjs'
import { useStore } from 'vuex'

const title = ref('')
const message = ref('')

const route = useRoute()
const store = useStore()

const onSubmit = () => {
  // TODO т.к. апишка всего лишь изображает запрос, сделать на json-server
  store.dispatch('comment/postComment', {
    name: message.value,
    email: 'test@test.te',
    body: message.value,
    postId: route.params.id
  })
}
</script>

<template>
  <VForm @submit.prevent="onSubmit">
    <VTextField v-model="title" />
    <VTextarea v-model="message" />
    <VBtn type="submit" @click="onSubmit">Submit</VBtn>
  </VForm>
</template>
