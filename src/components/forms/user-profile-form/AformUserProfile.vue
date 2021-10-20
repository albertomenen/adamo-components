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
          :icon-right="isEditing ? 'save' : 'pen'"
          type="is-ghost"
          @click="setEditContext"
        />
      </div>
      <div class="columns is-multiline">
        <AInput
          v-model="user.name"
          class="column is-half"
          name="name"
          :placeholder="$t('fields.name')"
          :readonly="!isEditing"
          rules="required"
        />
        <AInput
          v-model="user.last_name"
          class="column is-half"
          name="lastName"
          :placeholder="$tc('fields.lastNames', 2)"
          :readonly="!isEditing"
          rules="required"
        />
        <AInput
          v-model="user.phone"
          class="column is-half"
          icon="phone-alt"
          icon-pack="fas"
          name="phone"
          :placeholder="$t('fields.phone')"
          :readonly="!isEditing"
        />
        <AInput
          class="column is-half"
          name="role"
          :placeholder="$t('fields.role')"
          readonly
          :value="user.role.role_name"
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
          name="email"
          :placeholder="$t('fields.email')"
          :readonly="!isEditing"
          rules="required|email"
        />
      </div>
    </div>

    <div
      v-if="station"
      class="is-adamo-card-dark my-4">
      <div  class="is-flex is-justify-content-space-between is-align-items-center mb-4">
        <div class="is-text-h2 has-text-dark-blue py-2">
          {{ $t('fields.machineId') }}
        </div>
      </div>
      <div class="columns is-multiline">
        <AInput
          class="column is-full"
          name="station"
          :placeholder="$t('fields.machineId')"
          readonly
          :value="station"
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
