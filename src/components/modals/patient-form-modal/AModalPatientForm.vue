<template>
<BModal
  v-model="showModal"
  :can-cancel="false"
  :destroy-on-hide="true"
  has-modal-card
  trap-focus
>
  <template #default="">
    <div
      class="modal-card"
      style="height: 600px;">
      <header class="modal-card-head has-background-orange has-text-centered">
        <p class="modal-card-title has-text-white has-font-comfortaa">
          {{ $t('patients.new') }}
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
        <div class="columns">
          <div class="column">
            <AFormPatientSteps
              :form-data="formData"
              @submit="handleSubmit" />
          </div>
        </div>
      </section>
    </div>
  </template>
</BModal>
</template>

<script lang="ts" src="./AModalPatientForm.ts" />
