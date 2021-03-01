<template>
  <div id="theme-layout">
    <component :is="$page.path ? 'Layout' : 'NotFound'" />
    <footer class="siteFooter">
      @ sujeongy
    </footer>
  </div>
</template>
