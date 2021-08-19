<template>
<BDropdown
  append-to-body
  position="is-bottom-left"
>
  <template #trigger>
    <BButton
      class="has-text-dark-gray has-shadow is-round px-4"
      icon-pack="fas"
      icon-right="ellipsis-v"
      type="is-gray"
    />
  </template>
  <slot />
</BDropdown>
</template>
