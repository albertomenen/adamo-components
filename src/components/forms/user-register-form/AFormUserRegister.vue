<template>
<section>
  <div class="columns is-multiline">
    <AInput
      v-model="formData.email"
      class="column is-full"
      icon="envelope"
      icon-pack="far"
      name="email"
      :placeholder="$t('fields.email')"
      rules="required|email"
    />
  </div>
</section>
</template>

<script src="./AFormUserRegister.ts" lang="ts"></script>

<style lang="scss">
.icon.is-right.is-clickable {
  color: #BCBCBC !important;
}
</style>
