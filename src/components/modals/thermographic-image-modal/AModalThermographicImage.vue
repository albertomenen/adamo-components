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
      style="width: 700px"
    >
      <header class="modal-card-head has-background-medium-blue has-text-centered">
        <p class="modal-card-title has-text-white has-font-comfortaa">
          {{ $t('thermographicImage') }}
        </p>
        <BButton
          icon-pack="fas"
          icon-right="times"
          type="is-medium-blue"
          @click="$emit('cancel')"
        />
      </header>
      <section class="modal-card-body has-background-light-gray py-10">
        <BCarousel
          :autoplay="false"
          icon-pack="fas"
          :repeat="true"
        >
          <BCarouselItem>
            <section :class="`hero is-medium`">
              <div class="hero-body p-0 px-7">
                <div class="is-flex is-justify-content-space-evenly">
                  <div class="column-left">
                    <img
                      alt=""
                      src="@/assets/thermal2.png"
                    >
                  </div>
                  <div class="column-right p-4">
                    <p class="has-text-medium-blue has-font-comfortaa">
                      {{ $t('session') }} 3 {{ $t('prepositions.of') }} 10
                    </p>
                    <div class="mt-5">
                      <p class="has-text-medium-blue has-font-comfortaa mb-1">
                        {{ $t('date') }}
                      </p>
                      <AInput
                        class="input-text-centered thermographic-input"
                        icon="calendar-check"
                        icon-pack="far"
                        placeholder="DD / MM / AAAA"
                        readonly
                      />
                    </div>
                    <div class="mt-3">
                      <p class="has-text-medium-blue has-font-comfortaa mb-1">
                        {{ $t('hour') }}
                      </p>
                      <AInput
                        class="input-text-centered thermographic-input"
                        icon="clock"
                        icon-pack="far"
                        :placeholder="$t('fields.hour')"
                        readonly
                      />
                    </div>
                    <div class="mt-3">
                      <p class="has-text-medium-blue has-font-comfortaa mb-1">
                        {{ $t('fields.temperature') }}
                      </p>
                      <AInput
                        class="input-text-centered thermographic-input"
                        icon="thermometer-quarter"
                        icon-pack="fas"
                        placeholder="Media"
                        readonly
                      />
                    </div>
                    <div class="mt-3">
                      <p class="has-text-medium-blue has-font-comfortaa mb-1">
                        {{ $t('fields.pointsNumber') }}
                      </p>
                      <AInput
                        class="input-text-centered thermographic-input"
                        icon="map-pin"
                        icon-pack="fas"
                        placeholder="4"
                        readonly
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </BCarouselItem>
        </BCarousel>
      </section>
    </div>
  </template>
</BModal>
</template>

<script src="./AModalThermographicImage.ts" lang="ts"></script>

<style src="./AModalThermographicImage.scss" lang="scss"></style>
