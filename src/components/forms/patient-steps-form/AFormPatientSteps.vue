<template>
<ValidationObserver
  ref="observer"
  v-slot="{ handleSubmit }">
  <BSteps
    v-model="activeStep"
    class="is-adamo-stepper"
    :is-animated="true"
  >
    <BStepItem
      icon="user-alt"
      icon-pack="fas"
      :label="$t('patients.personalInfo')"
      step="1"
    >
      <AFormPatientPersonalInfo
        class="p-5"
        :form-data="formData"
      />
    </BStepItem>
    <BStepItem
      icon="id-badge"
      icon-pack="fas"
      :label="$t('patients.contactInfo')"
      step="2"
    >
      <AFormPatientContactInfo
        class="p-5"
        :form-data="formData"
      />
    </BStepItem>
    <BStepItem
      icon="walking"
      icon-pack="fas"
      :label="$t('patients.physicInfo')"
      step="3"
    >
      <AFormPatientPhysicInfo
        class="p-5"
        :form-data="formData"
      />
    </BStepItem>
    <template #navigation="{previous, next}">
      <div class="has-text-centered is-navigation">
        <BButton
          v-show="activeStep !== 0"
          class="mr-5"
          icon-left="arrow-left"
          icon-pack="fas"
          rounded
          @click.prevent="previousStep(previous.action)"
        >
          {{ $t('actions.return') }}
        </BButton>
        <BButton
          class="has-text-white"
          icon-pack="fas"
          :icon-right="activeStep !== 2 ? 'arrow-right' : ''"
          rounded
          type="is-orange"
          @click.prevent="nextStep(next.action)"
        >
          {{ $t(activeStep !== 2 ? 'actions.continue' : 'actions.create') }}
        </BButton>
      </div>
    </template>
  </BSteps>
</ValidationObserver>
</template>

<script src="./AFormPatientSteps.ts" lang="ts"></script>

<style lang="scss">
.is-navigation {
  position: absolute;
  bottom: 1.5rem;
  left: 50%;
  transform: translate(-50%);
}
</style>
