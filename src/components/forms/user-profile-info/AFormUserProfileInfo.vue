<template>
<div class="columns is-multiline">
  <AInput
    v-model="user.name"
    class="column is-half"
    :placeholder="$t('fields.name')"
    :readonly="!editContext"
  />
  <AInput
    v-model="user.last_name"
    class="column is-half"
    :placeholder="$tc('fields.lastNames', 2)"
    :readonly="!editContext"
  />
  <AInput
    v-model="user.phone"
    class="column is-half"
    icon="phone-alt"
    icon-pack="fas"
    :placeholder="$t('fields.phone')"
    :readonly="!editContext"
  />
  <AInput
    v-model="user.role.role_name"
    class="column is-half"
    placeholder="MP"
    :readonly="!editContext"
  />
  <AInput
    v-if="admin"
    class="column is-half"
    :placeholder="$t('fields.group')"
    :readonly="!editContext"
  />
  <AInput
    v-if="admin"
    class="column is-half"
    :placeholder="$t('fields.location')"
    :readonly="!editContext"
  />
</div>
</template>

<script src="./AFormUserProfileInfo.ts" lang="ts"></script>
