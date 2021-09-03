<template>
<div class="is-adamo-pagination">
  <BPagination
    v-bind="$attrs"
    icon-next="chevron-right"
    icon-pack="fas"
    icon-prev="chevron-left"
    order="is-centered"
    :per-page="perPage"
    :range-after="1"
    :range-before="1"
    rounded
    v-on="$listeners"
  >
  </BPagination>
</div>
</template>

<script lang="ts" src="./APagination.ts" />
