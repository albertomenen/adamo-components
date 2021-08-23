<template>
<BModal
  v-model="showModal"
  :can-cancel="false"
  :destroy-on-hide="true"
  has-modal-card
  trap-focus
>
  <div class="modal-card">
    <template v-if="images">
      <header class="modal-card-head has-background-medium-blue has-text-centered">
        <p class="modal-card-title has-text-white has-font-comfortaa">{{ $t('capturedImages') }}</p>
        <BButton
          icon-pack="fas"
          icon-right="times"
          type="is-medium-blue"
          @click="$emit('cancel')"
        />
      </header>
      <section class="modal-card-body has-background-light-gray">
        <div class="columns mb-3 mx-1">
          <div class="column p-6">
            <AModalContentBox
              customClass="p-0"
              :image="require('@/assets/surface.png')"
              :title="$t('surface')"
            />
          </div>
          <div class="column p-6">
            <AModalContentBox
              customClass="p-0"
              :image="require('@/assets/thermal.png')"
              :title="$t('thermal')"
            />
          </div>
        </div>
        <div class="columns">
          <div class="column has-text-centered">
            <BButton
              class="mr-4 has-text-title"
              icon-left="redo"
              icon-pack="fas"
              rounded
              @click="repeatCapture"
            >
              {{ $t('actions.repeat') }}
            </BButton>
            <BButton
              class="has-text-white"
              rounded
              type="is-orange"
              @click="submit"
            >
              {{ $t('actions.save') }}
            </BButton>
          </div>
        </div>
      </section>
    </template>
    <template v-else>
      <section class="modal-card-body capturing-modal-body has-background-white has-text-centered is-flex is-flex-direction-column is-justify-content-center">
        <p class="modal-card-title has-text-medium-blue has-font-comfortaa my-5">
          {{ $t('actions.capturingImg') }}
        </p>
        <div class="progress-bar is-flex is-flex-wrap-nowrap is-justify-content-center">
          <BProgress
            class="pt-2"
            size="is-small"
            type="is-blue"
          />
        </div>
        <ALottie
          :animationData="loadingAnimation"
          :height="364"
          :width="600"
        />
      </section>
    </template>
  </div>
</BModal>
</template>

<script src="./AModalCaptureImages.ts"></script>

<style src="./AModalCaptureImages.scss" lang="scss" scoped></style>
