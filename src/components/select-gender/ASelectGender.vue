<template>
<BField>
  <BSelect
    v-bind="$attrs"
    expanded
    rounded
    v-on="$listeners">
    <option
      v-for="(label, value) in values"
      :key="value"
      :value="value">{{label}}</option>
  </BSelect>
</BField>
</template>
<script>
export default {
  data: () => ({
    locales: {
      es: {
        male: 'Hombre',
        female: 'Mujer',
        other: 'Otro'
      },
      en: {
        male: 'Male',
        female: 'Female',
        other: 'Other'
      }
    }
  }),

  computed: {
    values () {
      return this.locales[this.$i18n.locale]
    }
  }
}
</script>
