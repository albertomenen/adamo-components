<template>
<section>
  <div class="columns is-multiline">
    <ASelectGender
      v-model="formData.gender"
      class="column is-half"
      :placeholder="$t('fields.sex')"
    />
    <ASelectRace
      v-model="formData.race"
      class="column is-half"
      :placeholder="$t('fields.race')"
    />
    <AInput
      v-model="formData.complexity"
      class="column is-full"
      icon="walking"
      icon-pack="fas"
      name="complexity"
      :placeholder="$t('fields.complexity')"
      type="text"
    />
    <AInput
      v-model="formData.height"
      class="column is-half"
      icon="ruler-vertical"
      icon-pack="fas"
      name="height"
      :placeholder="$t('fields.height')"
    />
    <AInput
      v-model="formData.weight"
      class="column is-half"
      icon="weight-hanging"
      icon-pack="fas"
      name="weight"
      :placeholder="$t('fields.weight')"
    />
    <AInput
      v-model="formData.allergies"
      class="column is-full"
      icon="diagnoses"
      icon-pack="fas"
      name="allergies"
      :placeholder="$t('fields.allergies')"
    />
    <AInput
      v-model="formData.medication"
      class="column is-full"
      icon="prescription-bottle-alt"
      icon-pack="fas"
      name="medication"
      :placeholder="$t('fields.medication')"
    />
  </div>
</section>
</template>

<script src="./AFormPatientPhysicInfo.ts" lang="ts"></script>
