<template>
<section>
  <div class="columns is-multiline">
    <AInput
      v-model="formData.name"
      class="column is-full"
      :placeholder="$t('fields.name')"
      type="text"
    />
    <AInput
      v-model="formData.last_name"
      class="column is-full"
      :placeholder="$tc('fields.lastNames', 2)"
      type="text"
    />
    <!-- <BSelect
      v-model="formData.id_type"
      class="column is-half"
      expanded
      :placeholder="$t('fields.identificationType')"
      rounded
    >
    </BSelect> -->
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
      trap-focus
    >
    </BDatepicker>
    <AInput
      v-model="formData.profession"
      class="column is-half"
      :placeholder="$t('fields.ocupation')"
      type="text"
    />
    <!-- <BSelect
      v-model="formData.specialist"
      class="column is-half"
      expanded
      :placeholder="$t('fields.specialist')"
      rounded
    >
    </BSelect> -->
    <AInput
      v-model="formData.user_name"
      class="column is-half"
      :placeholder="$t('fields.user')"
      type="text"
    />
    <AInput
      v-model="formData.password"
      class="column is-half"
      :placeholder="$t('fields.password')"
      type="password"
    />
  </div>
</section>
</template>

<script src="./AFormPatientPersonalInfo.ts" lang="ts"></script>
