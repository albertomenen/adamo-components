<template>
<ValidationProvider
  v-slot="{ errors, valid }"
  :name="$attrs.name || $attrs.label"
  :rules="rules"
  :vid="vid">
  <BField
    v-bind="$attrs"
    :message="errors"
    :type="{ 'is-danger': errors[0], 'is-success': valid }">
  </BField>
  <BInput
    v-model="innerValue"
    v-bind="$attrs"
    class="is-adamo-input"
    custom-class="is-italic"
    rounded
  />
</ValidationProvider>
</template>
<script lang="ts" src="./AInput.ts"></script>
