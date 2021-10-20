<template>
<BField>
  <BSelect
    v-bind="$attrs"
    expanded
    rounded
    v-on="$listeners">
    <option value="asian">Asiático</option>
    <option value="american">Americano</option>
    <option value="caucasian">Caucásico</option>
    <option value="malayan">Malayo/Pardo</option>
    <option value="black">Etiópico</option>
  </BSelect>
</BField>
</template>
