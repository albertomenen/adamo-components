<template>
<div class="columns is-multiline">
  <AInput
    v-model="user.email"
    class="column is-full"
    icon="envelope"
    icon-pack="far"
    :placeholder="$t('fields.email')"
    :readonly="!editContext"
  />
  <AInput
    class="column is-half"
    icon-pack="fas"
    :password-reveal="true"
    :placeholder="$t('fields.password')"
    :readonly="!editContext"
    type="password"
  />
  <AInput
    class="column is-half"
    icon-pack="fas"
    :password-reveal="true"
    :placeholder="$t('fields.passwordConf')"
    :readonly="!editContext"
    type="password"
  />
</div>
</template>

<script src="./AFormUserRegisterInfo.ts" lang="ts"></script>
