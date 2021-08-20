<template>
<section>
  <div class="columns is-multiline">
    <AInput
      v-model="formData.firstname"
      class="column is-full"
      :placeholder="$t('fields.name')"
      type="text"
    />
    <AInput
      v-model="formData.lastname"
      class="column is-full"
      :placeholder="$tc('fields.lastNames', 2)"
      type="text"
    />
    <BSelect
      v-model="formData.id_type"
      class="column is-half"
      expanded
      :placeholder="$t('fields.identificationType')"
      rounded
    >
    </BSelect>
    <AInput
      v-model="formData.id_number"
      class="column is-half"
      :placeholder="$t('fields.identification')"
      type="number"
    />
    <BDatepicker
      v-model="formData.birthdate"
      class="column is-three-quarters"
      icon-pack="fas"
      :locale="$i18n.locale"
      :mobile-native="false"
      :placeholder="$t('fields.birthdate')"
      position="is-top-right"
      rounded
      trap-focus
    >
    </BDatepicker>
    <BSelect
      v-model="formData.age"
      class="column is-one-quarter"
      expanded
      :placeholder="$t('fields.age')"
      rounded
    >
    </BSelect>
    <AInput
      v-model="formData.ocupation"
      class="column is-half"
      :placeholder="$t('fields.ocupation')"
      type="text"
    />
    <BSelect
      v-model="formData.specialist"
      class="column is-half"
      expanded
      :placeholder="$t('fields.specialist')"
      rounded
    >
    </BSelect>
  </div>
</section>
</template>

<script src="./AFormPatientPersonalInfo.ts" lang="ts"></script>
