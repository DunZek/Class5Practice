<template>
  <v-app>
    <v-app-bar app>
        <!-- <g-link to="/" id="siteName">{{ $static.metadata.siteName }}</g-link> "Class 5 Practice" -->
      <v-toolbar-title>{{ $static.metadata.siteName }}</v-toolbar-title>
      <v-spacer/>
      <nav class="nav">
        <!-- <g-link class="nav__link" to="/">Home</g-link>
        <g-link class="nav__link" to="/about/">About</g-link> -->
        <v-btn>Pick a Test</v-btn>
        <v-btn>Marathon test</v-btn>
      </nav>
    </v-app-bar>
    <v-main>
      <slot/>
    </v-main>
  </v-app>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="scss">


</style>
