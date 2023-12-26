<script setup lang="ts"></script>

<template>
  <div>
    <strong class="block mb-10 text-sm text-brand-primary capitalize">
      {{ $route.name }}
    </strong>
    <slot />

    <aside class="fixed top-[4.6rem] bottom-0 right-[max(0px,calc(50%-45rem))] w-[19.5rem] py-6 px-8 overflow-y-auto hidden xl:flex flex-col gap-8 z-10">
      <slot name="sidebar">
        <ContactMe />
      </slot>
    </aside>
  </div>
</template>
