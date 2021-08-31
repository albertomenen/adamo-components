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
      style="height: 356px; width: 450px"
    >
      <section class="modal-card-body has-background-light-gray recover-card">
        <div class="columns">
          <div class="column is-elevated is-vcentered">
            <div class="px-10 pt-16 pb-4">
              <div class="full-width has-text-centered is-recover-title has-text-medium-blue mb-10">
                {{$t('login.recoverText')}}
              </div>
              <BField class="pb-1">
                <BInput
                  custom-class="is-italic"
                  icon="envelope"
                  icon-pack="far"
                  :placeholder="$t('fields.email')"
                  rounded
                  size="is-medium"
                />
              </BField>
              <BField class="has-text-centered mt-8">
                <BButton
                  class="has-text-white"
                  expanded
                  rounded
                  size="is-medium"
                  type="is-orange"
                >
                  {{$t('actions.send')}}
                </BButton>
              </BField>
            </div>
          </div>
        </div>
      </section>
    </div>
  </template>
</BModal>
</template>

<script src="./AModalRecoverPass.ts" lang="ts"></script>

<style src="./AModalRecoverPass.scss" lang="scss"></style>
