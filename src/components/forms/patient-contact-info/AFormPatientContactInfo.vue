<template>
<section>
  <div class="columns is-multiline">
    <AInput
      v-model="formData.phone"
      class="column is-full"
      icon="phone-alt"
      icon-pack="fas"
      name="contactPhone"
      :placeholder="$t('fields.contactPhone')"
      type="text"
    />
    <!-- <BSelect
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
    </BSelect> -->
    <AInput
      v-model="formData.country"
      class="column is-half"
      name="country"
      :placeholder="$t('fields.country')"
    />
    <AInput
      v-model="formData.city"
      class="column is-half"
      name="city"
      :placeholder="$t('fields.city')"
    />
    <AInput
      v-model="formData.address"
      class="column is-full"
      icon="map-marker-alt"
      icon-pack="fas"
      name="address"
      :placeholder="$t('fields.address')"
    />
  </div>
</section>
</template>

<script src="./AFormPatientContactInfo.ts" lang="ts"></script>
