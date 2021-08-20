<template>
<section>
  <div class="columns is-multiline">
    <AInput
      class="column is-full"
      :placeholder="$t('fields.name')"
      type="text"
    />
    <AInput
      class="column is-full"
      :placeholder="$tc('fields.lastNames', 2)"
      type="text"
    />
    <AInput
      class="column is-full"
      icon="phone-alt"
      icon-pack="fas"
      :placeholder="$t('fields.phone')"
    />
    <BSelect
      class="column is-full"
      expanded
      :placeholder="$t('fields.role')"
      rounded
    >
    </BSelect>
    <BSelect
      class="column is-half"
      expanded
      :placeholder="$t('fields.group')"
      rounded
    >
    </BSelect>
    <BSelect
      class="column is-half"
      expanded
      :placeholder="$t('fields.location')"
      rounded
    >
    </BSelect>
  </div>
</section>
</template>

<script src="./AFormUserPersonalInfo.ts" lang="ts"></script>
