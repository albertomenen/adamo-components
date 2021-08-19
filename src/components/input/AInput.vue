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
  top: 11px;
  left: 14px;
}
.is-adamo-input.has-icons-right .icon.is-right {
  top: 11px;
  right: 14px;
}
</style>
