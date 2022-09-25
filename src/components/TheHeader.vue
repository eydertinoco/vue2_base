<template>
  <div class="header">
    <div class="header__logo">
      <img alt="Vue logo" src="../assets/icon.png">
      <h1>Titulo do Projeto</h1>
    </div>

    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/minhapagina">Login</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: "TheHeader"
}
</script>

<style scoped lang="scss">
@import './../assets/style/mixins.scss';

.header {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background: #554fff;
  &__logo {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background: white;
    border-radius: 30px;
    & img {
      width: 40px;
      margin-left: 5px;
    }
    & h1 {
      margin: auto 5px;
      font-size: 2.4rem;
      color: #7eb457;
    }
  }
}

nav {
  padding: 30px 0;
  display: flex;
  width: 300px;
  justify-content: space-evenly;
  align-items: center;
  a {
    text-transform: uppercase;
    font-size: 20px;
    font-weight: 600;
    text-decoration: none;
    color: white;

    &.router-link-exact-active {
      color: #7eb457;
    }
  }
}
</style>