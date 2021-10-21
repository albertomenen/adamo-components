<template>
<nav class="breadcrumb m-0">
  <ul>
    <li
      v-for="path in paths"
      :key="path.label"
      :class="{'is-active': !path.link}"
    >
      <Component
        :is="disabled ? 'span' : 'router-link'"
        v-if="path.link"
        :class="textColor"
        :to="path.link"
      >
        {{ path.label }}
      </Component>
      <a
        v-else
        aria-current="page"
        :class="textColor"
        href="#"
      >
        {{ path.label }}
      </a>
    </li>
  </ul>
</nav>
</template>

<script src="./ABreadcrumb.ts" lang="ts"></script>
