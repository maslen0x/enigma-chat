<template>
  <v-container :class="$style.container">
    <slot />
  </v-container>
</template>

<style module>
div.container {
  max-width: 600px;
  height: 100%;
}
</style>
