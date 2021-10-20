<template>
<BSelect
  v-bind="$attrs"
  expanded
  rounded
  v-on="$listeners">
  <option value="male">Hombre</option>
  <option value="female">Mujer</option>
  <option value="other">Otro</option>
</BSelect>
</template>
