<template>
<Transition name="slide-fade">
  <div
    v-if="active"
    class="is-adamo-notification is-flex has-text-white is-align-items-center">
    <BIcon
      class="mr-4"
      :icon="icon"
      pack="fas"
      size="is-large" />
    <div>{{message}}</div>
  </div>
</Transition>
</template>

<script lang="ts" src="./ANotification.ts" />
<style lang="scss" src="./ANotification.scss" />
