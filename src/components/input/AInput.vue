<template>
<BInput
  v-bind="$attrs"
  class="is-adamo-input"
  custom-class="is-italic"
  rounded
  v-on="$listeners"
/>
</template>
<style lang="scss">
.is-adamo-input.has-icons-left .icon.is-left {
  top: 11px !important;
  left: 14px !important;
}
.is-adamo-input.has-icons-right .icon.is-right {
  top: 11px !important;
  right: 14px !important;
}
</style>
