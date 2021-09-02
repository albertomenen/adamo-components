<template>
<BModal
  v-model="showModal"
  :can-cancel="false"
  :destroy-on-hide="true"
  has-modal-card
  trap-focus
>
  <template #default="">
    <div class="modal-card">
      <header class="modal-card-head has-background-orange has-text-centered">
        <p class="modal-card-title has-text-white has-font-comfortaa">
          {{ title || $t('confirmation') }}
        </p>
        <BButton
          class="has-text-white"
          icon-pack="fas"
          icon-right="times"
          type="is-orange"
          @click="$emit('cancel')"
        />
      </header>
      <section class="modal-card-body has-background-light-gray">
        <div class="is-text-h3 pt-4 pb-8">{{ description || $t('confirmationDescription') }}</div>
        <div class="has-text-right">
          <BButton
            class="has-text-black mr-4"
            :label="$t('actions.cancel')"
            rounded
            size="is-medium"
            type="is-ghost"
            @click="cancelModal"/>
          <BButton
            class="has-text-white"
            :label="$t('actions.accept')"
            rounded
            size="is-medium"
            type="is-orange"
            @click="confirmModal" />
        </div>
      </section>
    </div>
  </template>
</BModal>
</template>

<script src="./AModalConfirmation.ts" lang="ts" />
