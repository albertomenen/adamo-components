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
          {{ $t('scheduleNextSession') }}
        </p>
        <BButton
          icon-pack="fas"
          icon-right="times"
          type="is-medium-blue"
          @click="$emit('cancel')"
        />
      </header>
      <section class="modal-card-body has-background-light-gray">
        <div class="columns is-multiline mb-0">
          <BDatepicker
            class="column is-three-fifths"
            :focused-date="date"
            icon-pack="fas"
            inline
            :locale="$i18n.locale"
            :min-date="minDate"
            :unselectable-dates="unselectableDates"
          >
            <template #header>
              <div class="is-flex is-justify-content-space-between">
                <BButton
                  class="has-text-dark-blue button"
                  icon-pack="fas"
                  icon-right="chevron-left"
                  type="is-ghost"
                  @click="prevMonth"
                />
                <BSelect
                  v-model="month"
                  class="pr-1"
                  expanded
                  :placeholder="$t('fields.moth')"
                  rounded
                  @input="selectMonth"
                >
                  <option
                    v-for="(month, index) in months"
                    :key="index"
                    :value="month.value"
                  >
                    {{ month.name }}
                  </option>
                </BSelect>
                <BSelect
                  v-model="year"
                  class="pl-z"
                  expanded
                  :placeholder="$t('fields.year')"
                  rounded
                  @input="selectYear"
                >
                  <option
                    v-for="(year, index) in years"
                    :key="index"
                    :value="year.value"
                  >
                    {{ year.value }}
                  </option>
                </BSelect>
                <BButton
                  class="has-text-dark-blue button"
                  icon-pack="fas"
                  icon-right="chevron-right"
                  type="is-ghost"
                  @click="nextMonth"
                />
              </div>
            </template>
          </BDatepicker>
          <div class="column">
            <div class="columns is-multiline has-gap-y-2 mt-3">
              <div class="is-flex is-align-items-center">
                <span class="available mr-3"></span>
                {{ $t('scheduleAvailable') }}
              </div>
              <div class="is-flex is-align-items-center">
                <span class="selected mr-3"></span>
                {{ $t('selectedDay') }}
              </div>
            </div>
            <div class="columns is-multiline bar-top mt-4">
              <div class="column is-full pl-0 pr-0 text-select-time mt-4">
                {{ $t('selectTime') }}
              </div>
              <div class="column is-full is-flex is-justify-content-center">
                <BSelect
                  placeholder="HH:HH"
                  rounded
                >
                </BSelect>
              </div>
            </div>
          </div>
        </div>
        <div class="columns pt-0">
          <div class="column is-full is-flex is-justify-content-center">
            <BButton
              class="has-text-white"
              rounded
              type="is-orange"
            >
              {{ $t('actions.accept') }}
            </BButton>
          </div>
        </div>
      </section>
    </div>
  </template>
</BModal>
</template>

<script src="./AModalSchedule.ts" lang="ts" />
<style src="./AModalSchedule.scss" lang="scss" />
