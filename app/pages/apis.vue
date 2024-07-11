<script setup lang="ts">
const classes = {
  wrapper: 'card-bg rounded-lg dark:bg-slate-900 dark:shadow-slate-700 border border-slate-200 dark:border-slate-800',
  header: 'flex justify-center items-center p-4 bg-slate-100 rounded-lg m-2 dark:bg-slate-700 dark:text-slate-100 border-1 border-slate-200 dark:border-slate-700',
  body: 'flex items-center w-full',
  footer: '',
};

// async function mutatePosts() {
const { data: modules, status, execute } = await useAPI('https://jsonplaceholder.org/posts/', {
  method: 'GET', // POST, PUT, DELETE
  immediate: false,
  // body: {
  //   title: 'foo22',
  //   body: 'bar22',
  //   userId: 12,
  // },
  default: () => ([]),
});
  // return { modules, status };
// }
async function handleClick(event: MouseEvent): Promise<void> {
  event.preventDefault();
  await execute();
}

const severity = computed(() => {
  const statusMap = {
    idle: 'info',
    pending: 'warn',
    success: 'success',
    error: 'danger',
  };

  return statusMap[status.value];
});
</script>

<template>
  <VCard :classes="classes">
    <template #content>
      <div class="grid grid-cols-12 w-full gap-4">
        <div class="col-span-6">
          <p class="text-lg">
            {{ $t('test-api-page') }}
          </p>
          <VButton
            class="max-w-[200px] w-full"
            label="post"
            :loading="APIStatus.PENDING === status"
            @click="handleClick"
          />
        </div>
        <div class="col-span-6 rounded-md p-4 dark:bg-slate-600">
          <div class="mb-4 flex items-center gap-2">
            {{ $t('result') }}
            <VMessage :severity="severity">
              <template #default>
                <div class="flex items-center gap-2">
                  {{ status }}
                  <VBadge
                    :value="modules.length"
                    :severity="severity"
                  />
                </div>
              </template>
            </VMessage>
          </div>
          <div class="max-h-[200px] min-h-[50px] flex flex-wrap overflow-auto whitespace-break-spaces">
            {{ modules }}
          </div>
        </div>
      </div>
    </template>
  </VCard>
</template>
