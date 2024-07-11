<script setup lang="ts">
import { useConfirmationModal } from '@/composables/core/confirmation';

const { call_function, closeAlert, description, title, loading } = useConfirmationModal();
</script>

<template>
  <Modal
    modal="$atts.modal"
    :title="title"
    :is-full-height="false"
  >
    <p class="text-center text-lg text-dark tracking-[0.1rem]">
      {{ description }}
    </p>

    <div class="grid grid-cols-2 mt-6 gap-4">
      <button
        type="button"
        class="modal-btn"
        @click="closeAlert"
      >
        {{ $t('no') }}
      </button>
      <button
        type="button"
        class="modal-btn border-red bg-red text-light hover:bg-red"
        :disabled="loading"
        @click="call_function()"
      >
        <span v-if="!loading">
          {{ $t('yes') }}
        </span>
        <Spinner v-else />
      </button>
    </div>
  </Modal>
</template>
