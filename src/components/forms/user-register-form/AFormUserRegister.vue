<template>
<section>
  <div class="columns is-multiline">
    <AInput
      v-model="formData.user_name"
      class="column is-full"
      icon="user"
      icon-pack="far"
      :placeholder="$t('fields.username')"
    />
    <AInput
      v-model="formData.email"
      class="column is-full"
      icon="envelope"
      icon-pack="far"
      :placeholder="$t('fields.email')"
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
