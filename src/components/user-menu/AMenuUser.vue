<template>
<BDropdown
  append-to-body
  aria-role="menu"
  position="is-bottom-left"
  trap-focus
>
  <template #trigger>
    <BIcon
      class="nav-item is-round has-background-white p-6"
      icon="user"
      pack="fas"
      role="button"
      size="is-medium"
      type="is-blue"
    />
  </template>

  <BDropdownItem
    aria-role="menu-list"
    custom
  >
    <div class="is-flex ml-4 mt-3">
      <BIcon
        class="is-round has-background-medium-blue dropdown-icon"
        icon="user-md"
        pack="fas"
        size="is-large"
        type="is-white"
      />
      <div class="ml-3">
        <div class="mb-2">
          {{ getUserName }}
        </div>
        <div
          class="has-background-blue has-text-centered label-app"
        >
          <p class="has-text-white is-size-6 pt-1">{{ getRoleName }}</p>
        </div>
      </div>
    </div>
  </BDropdownItem>

  <BDropdownItem separator />

  <ul class="mt-4 is-flex-is-flex-direction-column menu-list mb-3">
    <li class="menu-list-item">
      <BDropdownItem
        class="p-0"
        has-link
      >
        <RouterLink
          class="p-0"
          :to="{name: 'userProfile'}"
        >
          <AMenuListItem
            icon="user-cog"
            :text="$t('userMenu.conf')"
          />
        </RouterLink>
      </BDropdownItem>
    </li>
    <li
      v-if="showAgenda"
      class="menu-list-item"
    >
      <BDropdownItem
        class="p-0"
      >
        <AMenuListItem
          icon="calendar-plus"
          :text="$t('userMenu.agenda')"
        />
      </BDropdownItem>
    </li>
    <li class="menu-list-item">
      <BDropdownItem
        class="p-0"
        custom
      >
        <ASelectLanguage />
      </BDropdownItem>
    </li>
    <li class="menu-list-item">
      <BDropdownItem
        class="p-0"
        @click="handleLogout"
      >
        <AMenuListItem
          icon="sign-out-alt"
          :text="$t('userMenu.logout')"
        />
      </BDropdownItem>
    </li>
  </ul>
</BDropdown>
</template>

<script src="./AMenuUser.ts" lang="ts"></script>

<style src="./AMenuUser.scss" lang="scss"></style>
