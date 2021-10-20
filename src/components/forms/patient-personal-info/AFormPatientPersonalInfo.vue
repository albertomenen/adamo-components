<template>
<section>
  <div class="columns is-multiline">
    <AInput
      v-model="formData.name"
      class="column is-full"
      :placeholder="$t('fields.name')"
      rules="required"
      type="text"
    />
    <AInput
      v-model="formData.last_name"
      class="column is-full"
      :placeholder="$tc('fields.lastNames', 2)"
      rules="required"
      type="text"
    />
    <AInput
      v-model="formData.identification"
      class="column is-full"
      :placeholder="$t('fields.identification')"
      type="number"
    />
    <BDatepicker
      v-model="formData.birthdate"
      class="column is-half"
      icon-pack="fas"
      :locale="$i18n.locale"
      :mobile-native="false"
      :placeholder="$t('fields.birthdate')"
      position="is-top-right"
      rounded
      rules="required"
      trap-focus
    >
    </BDatepicker>
    <AInput
      v-model="formData.profession"
      class="column is-half"
      :placeholder="$t('fields.ocupation')"
      type="text"
    />
    <AInput
      v-model="formData.email"
      class="column is-full"
      icon="envelope"
      icon-pack="far"
      :placeholder="$t('fields.email')"
      rules="required|email"
    />
  </div>
</section>
</template>

<script src="./AFormPatientPersonalInfo.ts" lang="ts"></script>
