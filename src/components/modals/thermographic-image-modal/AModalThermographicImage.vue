<template>
<BModal
  v-model="showModal"
  :can-cancel="false"
  :destroy-on-hide="true"
  has-modal-card
  trap-focus
>
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
        v-model="carouselSession"
        :autoplay="false"
        icon-pack="fas"
        :repeat="true"
      >
        <BCarouselItem
          v-for="session in treatment.sessions"
          :key="session.id_session"
        >
          <section :class="`hero is-medium`">
            <div class="hero-body p-0 px-7">
              <div class="is-flex is-justify-content-space-evenly">
                <div 
                  class="column-left is-relative"
                  @click="getPixels($event, session.session_number)"
                >
                  <img
                    alt=""
                    :src="getThermic(session.image_thermic)"
                    style="width: 300px; height: 400px;"
                  >
                  <!-- <div :style="coordinateBoxStyles">
                    <div
                      class="is-flex is-align-items-center is-justify-content-center has-shadow"
                      :style="temperatureStyles" 
                    >{{temperatureValue}}</div>
                  </div> -->
                  <div :style="coordinateBoxStyles">
                    <div
                      v-for="(point, i) in treatment.points"
                      :key="i"
                      class="has-text-blue has-background-white is-flex is-align-items-center is-justify-content-center has-shadow"
                      :style="getCoordinate(point)" 
                    >{{i+1}}</div>
                  </div>
                </div>
                <div class="column-right p-4">
                  <p class="has-text-medium-blue has-font-comfortaa">
                    {{ $t('session') }} {{ session.session_number }} {{ $t('prepositions.of') }} {{ treatment.sessions_number }}
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
                      :value="formatDate(session.ts_creation_date)"
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
                      :value="formatHour(session.ts_creation_date)"
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
                      placeholder="0"
                      readonly
                      :value="temperatureValue"
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
                      placeholder="0"
                      readonly
                      :value="treatment.points ? treatment.points.length : 0"
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
</BModal>
</template>

<script src="./AModalThermographicImage.ts" lang="ts"></script>

<style src="./AModalThermographicImage.scss" lang="scss"></style>
