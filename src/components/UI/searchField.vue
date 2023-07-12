<script setup>
import { ref } from 'vue'
import { VSelect } from 'vuetify/lib/components/index.mjs'

const props = defineProps({
  usersList: Array
})

const author = ref('')

const onAuthorChange = () => {
  emit('on-author-change', author)
}

const emit = defineEmits(['on-author-change'])
</script>

<template>
  <VSelect
    v-model="author"
    label="Выберите автора"
    :items="usersList"
    item-title="name"
    item-value="id"
    @change="onAuthorChange"
  ></VSelect>
</template>
