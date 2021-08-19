<template>
<BDropdownItem
  class="is-flex is-align-items-center px-8"
  v-on="$listeners">
  <BIcon
    :icon="icon"
    pack="fas"
    size="is-large"
    type="is-blue"
  />
  <div class="is-text-h3 has-text-blue">{{label}}</div>
</BDropdownItem>
</template>
<script>
export default {
  props: {
    icon: {
      type: String,
      default: null
    },
    label: {
      type: String,
      default: null
    }
  }
}
</script>
