<script setup lang="ts">
import type { Classes } from './Card.d';

withDefaults(
  defineProps<{
    title?: string
    body?: string
    classes?: Classes
    hideHeader?: boolean
    hideFooter?: boolean
    headerClass?: string
    bodyClass?: string
    footerClass?: string
  }>(),
  {
    classes: () => ({
      wrapper: '',
      header: '',
      body: '',
      footer: '',
    }),
  },
);
</script>

<template>
  <PrimeCard :class="classes.wrapper">
    <template
      v-if="!hideHeader && $slots.header || $slots.title"
      #header
    >
      <div :class="classes.header">
        <slot name="header">
          {{ title }}
        </slot>
      </div>
    </template>

    <template #title>
      <slot name="title">
        {{ title }}
      </slot>
    </template>

    <template #subtitle>
      <slot name="subtitle" />
    </template>

    <template #content>
      <div :class="classes.body">
        <slot name="content" />
      </div>
    </template>

    <template
      v-if="!hideFooter"
      #footer
    >
      <div :class="classes.footer">
        <slot name="footer" />
      </div>
    </template>
  </PrimeCard>
</template>
