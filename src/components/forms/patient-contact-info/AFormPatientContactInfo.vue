<template>
<section>
  <div class="columns is-multiline">
    <AInput
      v-model="formData.email"
      class="column is-full"
      icon="envelope"
      icon-pack="far"
      :placeholder="$t('fields.email')"
      type="email"
    />
    <AInput
      v-model="formData.phone"
      class="column is-full"
      icon="phone-alt"
      icon-pack="fas"
      :placeholder="$t('fields.contactPhone')"
      type="text"
    />
    <BSelect
      v-model="formData.country"
      class="column is-half"
      expanded
      :placeholder="$t('fields.country')"
      rounded
    >
    </BSelect>
    <BSelect
      v-model="formData.city"
      class="column is-half"
      expanded
      :placeholder="$t('fields.city')"
      rounded
    >
    </BSelect>
    <AInput
      v-model="formData.address"
      class="column is-full"
      icon="map-marker-alt"
      icon-pack="fas"
      :placeholder="$t('fields.address')"
    />
  </div>
</section>
</template>

<script src="./AFormPatientContactInfo.ts" lang="ts"></script>
