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
    <router-link to="/course1">Course</router-link>|
    <router-link to="/coursebook1">CourseBook</router-link>|
    <router-link to="/basicpage">BasicPage</router-link>|
    <router-link to="/mainpage">MainPage</router-link>|
  </div>
</template>
