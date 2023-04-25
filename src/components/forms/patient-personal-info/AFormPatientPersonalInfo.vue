<template>
<section>
  <div class="columns is-multiline">
    <AInput
      v-model="formData.name"
      class="column is-full"
      name="name"
      :placeholder="$t('fields.name')"
      rules="required"
      type="text"
    />
    <AInput
      v-model="formData.last_name"
      class="column is-full"
      name="lastname"
      :placeholder="$tc('fields.lastNames', 2)"
      type="text"
    />
    <AInput
      v-model="formData.identification"
      class="column is-full"
      name="identification"
      :placeholder="$t('fields.identification')"
      type="number"
    />
    <BField class="column is-half">
      <BDatepicker
        v-model="formData.birthdate"
        icon-pack="fas"
        :locale="$i18n.locale"
        :max-date="maxDate"
        :mobile-native="false"
        :placeholder="$t('fields.birthdate')"
        position="is-top-right"
        rounded
        trap-focus
        editable
        required
      />
    </BField>
    <AInput
      v-model="formData.profession"
      class="column is-half"
      name="ocupation"
      :placeholder="$t('fields.ocupation')"
      type="text"
    />
    <AInput
      v-model="formData.email"
      class="column is-full"
      icon="envelope"
      icon-pack="far"
      name="email"
      :placeholder="$t('fields.email')"
      rules="required|email"
    />
  </div>
</section>
</template>

<script src="./AFormPatientPersonalInfo.ts" lang="ts"></script>
