<template>
  <form @submit.prevent="registerUser">
    <label for="full_name">Nom complet:</label>
    <input type="text" id="full_name" v-model="fullName" required />

    <label for="email">Email:</label>
    <input type="email" id="email" v-model="email" required />

    <label for="password">Mot de passe:</label>
    <input type="password" id="password" v-model="password" required />

    <button type="submit">S'inscrire</button>
  </form>
</template>
