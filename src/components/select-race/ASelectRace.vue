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
        caucasian: 'Caucásico',
        afroamerican: 'Afroamericano',
        westAsian: 'Asiatico Occidental',
        centralAsian: 'Asiatico Central',
        eastAsian: 'Asiatico Oriental',
        northAmerican: 'Norte Americano',
        centerSouthAmerican: 'Centro-Sur Americano',
        other: 'Otro'
      },
      en: {
        caucasian: 'Caucasian',
        afroamerican: 'Afroamerican',
        westAsian: 'Western Asian',
        centralAsian: 'Central Asial',
        eastAsian: 'Eastern Asian',
        northAmerican: 'North American',
        centerSouthAmerican: 'Center-South American',
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
