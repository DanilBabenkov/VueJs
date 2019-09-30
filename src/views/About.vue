<template>
  <div class="about">
    <h1>This is an about page</h1>
    <router-link :to="{name:'gender'}">Gender</router-link> |
    <router-link to="/age">Age</router-link>|
    <router-link to="/ax">Ax</router-link>
    <router-link to="/axedit">AxEdit</router-link>
  </div>
</template>
