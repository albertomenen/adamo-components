<template>
<ValidationProvider
  v-slot="{ errors, valid }"
  :name="$attrs.name || $attrs.label"
  :rules="rules"
  :vid="vid">
  <BInput
    v-bind="$attrs"
    class="is-adamo-input"
    custom-class="is-italic"
    :message="errors"
    rounded
    :type="{ 'is-danger': errors[0], 'is-success': valid }"
    v-on="$listeners"
  />
</ValidationProvider>
</template>
<script lang="ts" src="./AInput.ts"></script>
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
