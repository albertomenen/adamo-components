<template>
<div>
  <div
    class="mt-4"
    :class="{
      'content-wrapper': scroll
    }">
    <div class="is-adamo-card-dark mt-4">
      <div class="is-flex is-justify-content-space-between is-align-items-center mb-4">
        <div class="is-text-h2 has-text-dark-blue py-2">
          {{ $t('users.profile.general') }}
        </div>
        <BButton
          class="has-text-dark-blue"
          icon-pack="fas"
          icon-right="pen"
          type="is-ghost"
        />
      </div>
      <div class="columns is-multiline">
        <AInput
          v-model="user.name"
          class="column is-half"
          :placeholder="$t('fields.name')"
          readonly
        />
        <AInput
          v-model="user.last_name"
          class="column is-half"
          :placeholder="$tc('fields.lastNames', 2)"
          readonly
        />
        <AInput
          v-model="user.phone"
          class="column is-half"
          icon="phone-alt"
          icon-pack="fas"
          :placeholder="$t('fields.phone')"
          readonly
        />
        <AInput
          v-model="user.role.role_name"
          class="column is-half"
          placeholder="MP"
          readonly
        />
      </div>
    </div>

    <div class="is-adamo-card-dark mt-4">
      <div class="is-flex is-justify-content-space-between is-align-items-center mb-4">
        <div class="is-text-h2 has-text-dark-blue py-2">
          {{ $t('users.profile.device') }}
        </div>
      </div>
      <div class="columns is-multiline">
        <AInput
          class="column is-4"
          :placeholder="$t('fields.machine')"
          readonly
        />
        <AInput
          class="column is-4"
          :placeholder="$t('fields.serial')"
          readonly
        />
        <AInput
          class="column is-4"
          :placeholder="$t('fields.mac')"
          readonly
        />
      </div>
    </div>

    <div class="is-adamo-card-dark my-4">
      <div  class="is-flex is-justify-content-space-between is-align-items-center mb-4">
        <div class="is-text-h2 has-text-dark-blue py-2">
          {{ $t('users.profile.userData') }}
        </div>
      </div>
      <div class="columns is-multiline">
        <AInput
          v-model="user.email"
          class="column is-full"
          icon="envelope"
          icon-pack="far"
          :placeholder="$t('fields.email')"
          readonly
        />
        <AInput
          class="column is-half"
          icon-pack="fas"
          :password-reveal="true"
          :placeholder="$t('fields.password')"
          readonly
          type="password"
        />
        <AInput
          class="column is-half"
          icon-pack="fas"
          :password-reveal="true"
          :placeholder="$t('fields.passwordConf')"
          readonly
          type="password"
        />
      </div>
    </div>
  </div>
</div>
</template>

<script src="./AformUserProfile.ts" lang="ts"></script>

<style lang="scss">
.content-wrapper {
  overflow-y: scroll;
  max-height: 420px;
  padding-right: 1rem;
}
.icon.is-right.is-clickable {
  color: #BCBCBC !important;
}
</style>
