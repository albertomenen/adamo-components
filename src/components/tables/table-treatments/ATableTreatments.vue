<template>
<BTable
  class="is-adamo-table"
  :data="data"
  :selected.sync="selectedTreatment"
  sortable
>
  <BTableColumn
    v-slot="props"
    centered
  >
    <BRadio
      :value="!isTreatmentSelected(props.row.id_treatment)"
      @input="setSelectedTreatment(props.row)"
    />
  </BTableColumn>
  <BTableColumn
    v-slot="props"
    field="name"
    :label="$tc('treatments.num', 1)"
    sortable
  >
    {{ props.row.name }}
  </BTableColumn>
  <BTableColumn
    v-slot="props"
    centered
    field="type"
    :label="$t('treatments.mode')"
  >
    {{ $t(`treatments.modes`)[props.row.mode] }}
  </BTableColumn>
  <BTableColumn
    v-slot="props"
    centered
    field="current_session_number"
    :label="$tc('sessions.num', 1)"
  >
    {{ props.row.current_session_number }} / {{ props.row.sessions_number }}
  </BTableColumn>
  <BTableColumn
    v-slot="props"
    centered
    field="status"
    :label="$t('fields.status')"
  >
    <div class="is-flex is-justify-content-center">
      <div
        class="has-text-white has-border-rounded is-fit-content py-1 px-4"
        :class="`has-background-${getStatusColor(props.row.state)}`"
      >
        <BIcon
          class="pr-2"
          :icon="getStatusIcon(props.row.state)"
          pack="fas"
          size="is-small"
        />
        {{ $t(`treatments.status`)[props.row.state] }}
      </div>
    </div>
  </BTableColumn>
  <BTableColumn
    v-slot="props"
    centered
    field="ts_creation_date"
    :label="$t('treatments.nextSession')"
  >
    {{ getDate(props.row.ts_creation_date) }}
  </BTableColumn>
  <BTableColumn
    v-slot="props"
    centered>
    <ATableMenu
      v-if="permissions.manage_treatment"
      @click.native.stop>
      <template>
        <ADropdownItem
          icon="eye"
          :label="$t('actions.seeHistory')"
          @click="showTreatment(props.row)"
        />
        <ADropdownItem
          v-if="!admin"
          icon="pen"
          :label="$t('actions.edit')"
          @click="editTreatment(props.row)"
        />
        <ADropdownItem
          v-if="!admin"
          icon="eye"
          :label="$t('actions.delete')"
          @click="deleteTreatment(props.row)"
        />
      </template>
    </ATableMenu>
  </BTableColumn>
  <template #empty>
    <ATableEmpty />
  </template>
</BTable>
</template>

<script lang="ts" src="./ATableTreatments.ts" />
