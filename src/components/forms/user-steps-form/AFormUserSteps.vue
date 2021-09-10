<template>
<BSteps
  v-model="activeStep"
  class="is-adamo-stepper"
  :is-animated="true"
>
  <BStepItem
    icon="user"
    icon-pack="fas"
    :label="$t('users.personalInfo')"
    step="1"
  >
    <AFormUserPersonalInfo
      class="p-5"
      :form-data="formData"
      :groups="groups"
      :roles="roles"
    />
  </BStepItem>
  <BStepItem
    icon="clipboard"
    icon-pack="fas"
    :label="$t('users.register')"
    step="2"
  >
    <AFormUserRegister
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
        :icon-right="activeStep !== 1 ? 'arrow-right' : ''"
        rounded
        type="is-orange"
        @click.prevent="nextStep(next.action)"
      >
        {{ $t(activeStep !== 1 ? 'actions.continue' : 'actions.create') }}
      </BButton>
    </div>
  </template>
</BSteps>
</template>

<script src="./AFormUserSteps.ts" lang="ts"></script>

<style lang="scss">
.is-navigation {
  position: absolute;
  bottom: 1.5rem;
  left: 50%;
  transform: translate(-50%);
}
</style>
