<template>
<div class="is-flex is-align-items-center">
  <RoundIcon
    class="mr-3"
    :icon="icon" />
  <div>
    <div class="is-text-h4 mb-2 has-text-comfortaa has-text-medium-blue has-text-weight-semibold">{{label}}</div>
    <BInput
      v-bind="$attrs"
      :custom-class="`is-medium has-text-blue ${round && 'is-round'} is-size-6 has-content-centered`"
      :placeholder="placeholder"
      :rounded="!round"
      :style="`width: ${inputWidth};`"
    >
    </BInput>
  </div>
</div>
</template>

<script src="./ATreatmentConfigurationField.ts" lang="ts" />
<style src="./ATreatmentConfigurationField.scss" lang="scss"></style>
