<template>
<BTable
  v-bind="$attrs"
  class="is-adamo-table has-left-table-padding"
  :data="data"
  sortable
  @update:selected="showPatient"
>
  <BTableColumn
    v-slot="props"
    field="name"
    :label="$tc('patients.num', 1)"
    sortable
  >
    {{ props.row.name }} {{ props.row.last_name }}
  </BTableColumn>
  <BTableColumn
    v-slot="props"
    field="phone"
    :label="$t('fields.phone')"
  >
    {{ props.row.phone }}
  </BTableColumn>
  <BTableColumn
    v-slot="props"
    field="email"
    :label="$t('fields.email')"
  >
    {{ props.row.email }}
  </BTableColumn>
  <BTableColumn
    v-slot="props"
    centered
    field="active_treatments"
    :label="$t('treatments.active')"
  >
    {{ props.row.active_treatments }}
  </BTableColumn>
  <BTableColumn
    v-slot="props"
    centered>
    <ATableMenu @click.native.stop>
      <ADropdownItem
        icon="eye"
        :label="$t('actions.see')"
        @click="showPatient(props.row)"
      />
      <ADropdownItem
        icon="pen"
        :label="$t('actions.edit')"
        @click="editPatient(props.row)"
      />
      <ADropdownItem
        icon="eye"
        :label="$t('actions.delete')"
        @click="deletePatient(props.row)"
      />
    </ATableMenu>
  </BTableColumn>
  <template #empty>
    <ATableEmpty />
  </template>
</BTable>
</template>

<script lang="ts" src="./ATablePatients.ts" />
