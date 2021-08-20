<template>
<div class="card">
  <div
    :class="`card-content has-text-centered ${customClass}`"
  >
    <img
      :src="image"
    >
  </div>
  <div class="card-footer">
    <p class="card-footer-item has-background-blue has-text-white has-font-comfortaa is-uppercase">
      {{ title }}
    </p>
  </div>
</div>
</template>

<script src="./AModalContentBox.ts" lang="ts"></script>

<style src="./AModalContentBox.scss" lang="scss" scoped></style>
