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
      name="lastName"
      :placeholder="$tc('fields.lastNames', 2)"
      type="text"
    />
    <AInput
      v-model="formData.phone"
      class="column is-full"
      icon="phone-alt"
      icon-pack="fas"
      name="phone"
      :placeholder="$t('fields.phone')"
    />
    <AInput
      v-model="formData.country"
      class="column is-full"
      name="country"
      :placeholder="$t('fields.country')"
    />
    <BSelect
      v-model="role"
      class="column is-full"
      expanded
      :placeholder="$t('fields.role')"
      rounded
    >
      <option
        v-for="rol in roles"
        :key="rol.id_role"
        :value="rol"
      >
        {{ rol.role_name }}
      </option>
    </BSelect>
    <BSelect
      v-if="!blockedByRol"
      v-model="formData.id_group"
      class="column is-half"
      expanded
      :placeholder="$t('fields.group')"
      rounded
    >
      <option
        v-for="group in groups"
        :key="group.id_group"
        :value="group.id_group"
      >
        {{ group.group_name }}
      </option>
    </BSelect>
    <BSelect
      v-if="!blockedByRol"
      v-model="formData.id_location"
      class="column is-half"
      expanded
      :placeholder="$t('fields.location')"
      rounded
    >
      <option
        v-for="location in locations"
        :key="location.id_location"
        :value="location.id_location"
      >
        {{ location.location_name }}
      </option>
    </BSelect>
  </div>
</section>
</template>

<script src="./AFormUserPersonalInfo.ts" lang="ts"></script>
