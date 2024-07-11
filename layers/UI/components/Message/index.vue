<script setup lang="ts">
import Message from 'primevue/message';
import type { IProps } from './Message.d';

const props = defineProps<IProps>();

const emits = defineEmits<{
  'close': (event: Event) => void
  'life-end': () => void
  [key: string]: any
}>();

defineOptions({
  components: {
    PrimeMessage: Message,
  },
  inheritAttrs: true,
});

function handleEvent(event: Event) {
  emits(event.type, event);
}
</script>

<template>
  <PrimeMessage
    v-bind="{ ...$attrs, ...props }"
    @close="handleEvent"
    @life-end="handleEvent"
  >
    <template
      v-if="$slots.default"
      #default
    >
      <slot />
    </template>
    <template
      v-if="$slots.messageicon"
      #messageicon="{ class: iconClass }"
    >
      <slot
        name="messageicon"
        :class="iconClass"
      />
    </template>
    <template
      v-if="$slots.closeicon"
      #closeicon="{ class: iconClass }"
    >
      <slot
        name="closeicon"
        :class="iconClass"
      />
    </template>
    <template
      v-if="$slots.container"
      #container="{ closeCallback }"
    >
      <slot
        name="container"
        :close-callback="closeCallback"
      />
    </template>
  </PrimeMessage>
</template>

<style scoped>
/* Add any custom styles if needed */
</style>
