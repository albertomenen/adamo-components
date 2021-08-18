<template>
<Component
  :is="component"
  v-bind="modalProps"
  :show-modal="active"
  @cancel="onCancel"
  @ok="onOk"
/>
</template>

<script lang="ts" src="./AModal.ts" />
