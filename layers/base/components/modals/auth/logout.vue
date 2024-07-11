<script setup lang="ts">
import Modal from '@base/components/core/modal/Modal.vue';
import { useSignin } from '../../../../../personal/auth';
import { useAuthModal } from '@base/composables/core/modals';

const { signOut } = useSignin();
</script>

<template>
  <Modal
    modal="$atts.modal"
    :title="$t('login.logout')"
    :is-full-height="false"
  >
    <p class="text-center text-lg text-dark tracking-[0.1rem]">
      {{ $t('login.want-to-logout') }}
    </p>

    <div class="mt-5 flex flex-col">
      <button
        type="button"
        class="modal-btn border-red bg-red text-white hover:bg-red"
        @click="signOut"
      >
        {{ $t('login.logout') }}
      </button>
      <button
        type="button"
        class="modal-btn mt-3 text-dark"
        @click="useAuthModal().closeLogout()"
      >
        {{ $t('cancel') }}
      </button>
    </div>
  </Modal>
</template>
