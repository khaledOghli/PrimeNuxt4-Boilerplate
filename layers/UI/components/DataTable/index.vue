<script setup lang="ts">
import type { IProps } from './DataTable.d';

const props = defineProps<IProps>();

defineOptions({
  inheritAttrs: false,
});

const attrs = useAttrs();
</script>

<template>
  <div>
    <PrimeDataTable v-bind="{ ...attrs, ...props }">
      <template
        v-if="$slots.header"
        #header
      >
        <slot name="header" />
      </template>
      <template
        v-if="$slots.footer"
        #footer
      >
        <slot name="footer" />
      </template>
      <template
        v-if="$slots.paginatorstart"
        #paginatorstart
      >
        <slot name="paginatorstart" />
      </template>
      <template
        v-if="$slots.paginatorend"
        #paginatorend
      >
        <slot name="paginatorend" />
      </template>
      <template
        v-if="$slots.empty"
        #empty
      >
        <slot name="empty" />
      </template>
      <template
        v-if="$slots.groupheader"
        #groupheader="{ data, index }"
      >
        <slot
          name="groupheader"
          :data="data"
          :index="index"
        />
      </template>
      <template
        v-if="$slots.groupfooter"
        #groupfooter="{ data, index }"
      >
        <slot
          name="groupfooter"
          :data="data"
          :index="index"
        />
      </template>
      <template
        v-if="$slots.loading"
        #loading
      >
        <slot name="loading" />
      </template>
      <template
        v-if="$slots.expansion"
        #expansion="{ data, index }"
      >
        <slot
          name="expansion"
          :data="data"
          :index="index"
        />
      </template>
      <template
        v-if="$slots.loadingicon"
        #loadingicon
      >
        <slot name="loadingicon" />
      </template>
      <template
        v-if="$slots.reorderindicatorupicon"
        #reorderindicatorupicon
      >
        <slot name="reorderindicatorupicon" />
      </template>
      <template
        v-if="$slots.rowreorderindicatorupicon"
        #rowreorderindicatorupicon
      >
        <slot name="rowreorderindicatorupicon" />
      </template>
      <template
        v-if="$slots.reorderindicatordownicon"
        #reorderindicatordownicon
      >
        <slot name="reorderindicatordownicon" />
      </template>
      <template
        v-if="$slots.rowreorderindicatordownicon"
        #rowreorderindicatordownicon
      >
        <slot name="rowreorderindicatordownicon" />
      </template>
      <template
        v-if="$slots.rowgrouptogglericon"
        #rowgrouptogglericon="{ expanded }"
      >
        <slot
          name="rowgrouptogglericon"
          :expanded="expanded"
        />
      </template>
      <template
        v-if="$slots.paginatorfirstpagelinkicon"
        #paginatorfirstpagelinkicon="{ class: iconClass }"
      >
        <slot
          name="paginatorfirstpagelinkicon"
          :class="iconClass"
        />
      </template>
      <template
        v-if="$slots.paginatorprevpagelinkicon"
        #paginatorprevpagelinkicon="{ class: iconClass }"
      >
        <slot
          name="paginatorprevpagelinkicon"
          :class="iconClass"
        />
      </template>
      <template
        v-if="$slots.paginatornextpagelinkicon"
        #paginatornextpagelinkicon="{ class: iconClass }"
      >
        <slot
          name="paginatornextpagelinkicon"
          :class="iconClass"
        />
      </template>
      <template
        v-if="$slots.paginatorlastpagelinkicon"
        #paginatorlastpagelinkicon="{ class: iconClass }"
      >
        <slot
          name="paginatorlastpagelinkicon"
          :class="iconClass"
        />
      </template>
      <template
        v-if="$slots.paginatorrowsperpagedropdownicon"
        #paginatorrowsperpagedropdownicon="{ class: iconClass }"
      >
        <slot
          name="paginatorrowsperpagedropdownicon"
          :class="iconClass"
        />
      </template>
      <template
        v-if="$slots.paginatorjumptopagedropdownicon"
        #paginatorjumptopagedropdownicon="{ class: iconClass }"
      >
        <slot
          name="paginatorjumptopagedropdownicon"
          :class="iconClass"
        />
      </template>

      <slot name="default" />
    </PrimeDataTable>
  </div>
</template>

<style scoped>
/* Add any custom styles if needed */
</style>
