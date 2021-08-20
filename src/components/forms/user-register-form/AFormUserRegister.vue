<template>
<section>
  <div class="columns is-multiline">
    <AInput
      class="column is-full"
      icon="envelope"
      icon-pack="far"
      :placeholder="$t('fields.email')"
    />
    <AInput
      class="column is-full"
      icon-pack="fas"
      icon-right="eye-slash"
      password-reveal
      :placeholder="$t('fields.password')"
      type="password"
    />
    <div class="column is-full has-text-centered pt-0">
      <p class="pass-composition">
        Mínimo 8 caracteres, mayúsculas, minúsculas, números y símbolos.
      </p>
    </div>
    <AInput
      class="column is-full"
      icon-pack="fas"
      icon-right="eye-slash"
      password-reveal
      :placeholder="$t('fields.password')"
      type="password"
    />
  </div>
</section>
</template>

<script src="./AFormUserRegister.ts" lang="ts"></script>

<style lang="scss">
.pass-composition {
  font-size: 14px;
  color: #7C7C7C;
}
.icon.is-right.is-clickable {
  color: #BCBCBC !important;
}
</style>
