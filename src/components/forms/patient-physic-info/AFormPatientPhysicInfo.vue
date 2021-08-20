<template>
<section>
  <div class="columns is-multiline">
    <BSelect
      v-model="formData.gender"
      class="column is-half"
      expanded
      :placeholder="$t('fields.sex')"
      rounded
    >
    </BSelect>
    <BSelect
      v-model="formData.race"
      class="column is-half"
      expanded
      :placeholder="$t('fields.race')"
      rounded
    >
    </BSelect>
    <AInput
      v-model="formData.complexity"
      class="column is-full"
      icon="walking"
      icon-pack="fas"
      :placeholder="$t('fields.complexity')"
      type="text"
    />
    <AInput
      v-model="formData.height"
      class="column is-half"
      icon="ruler-vertical"
      icon-pack="fas"
      :placeholder="$t('fields.height')"
    />
    <AInput
      v-model="formData.weight"
      class="column is-half"
      icon="weight-hanging"
      icon-pack="fas"
      :placeholder="$t('fields.weight')"
    />
    <AInput
      v-model="formData.allergies"
      class="column is-full"
      icon="diagnoses"
      icon-pack="fas"
      :placeholder="$t('fields.allergies')"
    />
    <AInput
      v-model="formData.medication"
      class="column is-full"
      icon="prescription-bottle-alt"
      icon-pack="fas"
      :placeholder="$t('fields.medication')"
    />
  </div>
</section>
</template>

<script src="./AFormPatientPhysicInfo.ts" lang="ts"></script>
