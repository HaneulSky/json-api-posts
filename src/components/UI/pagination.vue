<script setup>
import { ref, watch } from 'vue'
import { VRow, VContainer, VCol, VPagination } from 'vuetify/lib/components/index.mjs'

const props = defineProps({
  size: Number,
  itemsCount: Number
})

const page = ref(1)

watch(page, (v) => {
  console.log('page', v)
  emit('page-changed', page)
})

const emit = defineEmits(['page-changed'])
</script>

<template>
  <div class="text-center">
    <VContainer>
      <VRow justify="center">
        <VCol cols="8">
          <VContainer class="max-width">
            <VPagination v-model="page" class="my-4" :length="itemsCount"></VPagination>
          </VContainer>
        </VCol>
      </VRow>
    </VContainer>
  </div>
</template>
