<template>
<BDropdown
  aria-role="list"
  trap-focus
>
  <template #trigger>
    <BIcon
      class="nav-item is-round has-background-white"
      icon="globe-americas"
      pack="fas"
      role="button"
      size="is-medium"
      type="is-blue"
    />
    <span class="has-text-blue is-size-6 mx-1">{{ $t('languages.label') }}</span>
    <BIcon
      class="nav-item is-round has-background-white"
      icon="angle-down"
      pack="fas"
      role="button"
      size="is-medium"
      type="is-blue"
    />
  </template>

  <BDropdownItem
    aria-role="list-item"
    class="pl-10"
    @click="handleChangeLocale('es')"
  >
    <ASelectLanguageItem
      :image="require('../../assets/espana.svg')"
      :label="$t('languages.spanish')"
    />
  </BDropdownItem>
  <BDropdownItem
    aria-role="list-item"
    class="pl-10 is-flex is-align-content-start"
    @click="handleChangeLocale('en')"
  >
    <ASelectLanguageItem
      :image="require('../../assets/united-kingdom.svg')"
      :label="$t('languages.english')"
    />
  </BDropdownItem>
</BDropdown>
</template>

<script src="./ASelectLanguage.ts" lang="ts"></script>
