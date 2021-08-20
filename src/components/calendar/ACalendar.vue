<template>
<div class="is-flex is-justify-content-space-between">
  <div>
    <BDatepicker
      v-model="dateSelected"
      class="is-schedule-date-picker is-shadowless pl-0"
      :first-day-of-week="1"
      :focused-date="date"
      icon-pack="fas"
      inline
      :locale="$i18n.locale"
      size="is-small"
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
          <p class="is-size-6 pt-2 has-text-blue has-text-weight-medium">
            {{ month.name }} {{ year }}
          </p>
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
    <div class="is-flex is-justify-content-center mt-4">
      <div class="is-flex is-align-items-center mr-6">
        <span class="occupied mr-2"></span>
        {{ $t('occupied') }}
      </div>
      <div class="is-flex is-align-items-center ">
        <span class="my-appt mr-2"></span>
        {{ $t('myAppts') }}
      </div>
    </div>
  </div>
  <div class="calendar-container">
    <Kalendar
      :key="componentKey"
      :configuration="calendar_settings"
      :events.sync="events"
    >
      <div
        slot="created-card"
        slot-scope="{ event_information }"
        class="details-card p-2"
        :class="[event_information.data.class]"
        @click="handleEventSelected(event_information.data.id)"
      >
        <span class="appointment-title">{{event_information.data.title}}</span>
      </div>
    </Kalendar>
  </div>
</div>
</template>

<script src="./ACalendar.ts" lang="ts"></script>

<style src="./ACalendar.scss" lang="scss"></style>
