<template>
<BSteps
  class="is-adamo-stepper"
  :has-navigation="false"
  rounded
  :value="value"
  @input="$emit('input', $event)"
>
  <slot />
</BSteps>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      default: 0
    }
  }
}
</script>
