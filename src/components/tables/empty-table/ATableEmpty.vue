<template>
<div class="is-empty-treatment-table">
  <BIcon
    class="has-text-title"
    icon="archive"
    pack="fas"
    size="is-large" />
  <div class="is-text-h2 has-text-title">{{$t('noData')}}</div>
</div>
</template>
<style scoped>

</style>

<style scoped>
.is-empty-treatment-table {
  display: flex;
  flex-direction: column;
  height: 280px;
  width: 100%;
  align-items: center;
  justify-content: center;
}
</style>
