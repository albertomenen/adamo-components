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
      <header class="modal-card-head has-background-medium-blue has-text-centered">
        <p class="modal-card-title has-text-white has-font-comfortaa">
          {{ $t('observations') }}
        </p>
        <BButton
          class="has-text-white"
          icon-pack="fas"
          icon-right="times"
          type="is-medium-blue"
          @click="$emit('cancel')"
        />
      </header>
      <section class="modal-card-body has-background-light-gray">
        <div class="columns">
          <div class="column my-6 mx-6">
            <div class="card">
              <div class="card-content">
                <p class="has-text-justified">{{ observations }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </template>
</BModal>
</template>

<script src="./AModalObservations.ts" lang="ts"></script>

<style src="./AModalObservations.scss" lang="scss" scoped></style>
