<template>
  <div class="about">
    <h1>This is an about page</h1>
    <router-link :to="{name:'gender'}">Gender</router-link> |
    <router-link to="/age">Age</router-link>|
    <router-link to="/ax">Ax</router-link>|
    <router-link to="/library">Library</router-link>|
    <router-link to="/multi">Multi</router-link>|
    <router-link to="/vuex">Example Vuex</router-link>|
      <router-link to="/vuex1">Example Vuex 1</router-link>|
      <router-link to="/func">Function</router-link>|
  </div>
</template>
