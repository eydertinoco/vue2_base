<template>
  <div id="esqueciSenha">

    <h1>Recuperar Email</h1>

    <label>Email:</label>
    <InputText type="text" v-model="yourEmail"></InputText>

    <Button label="Enviar Email"></Button>

    <router-link to="/login">Acessar Conta</router-link>

  </div>
</template>

<script>
import Button from "primevue/button";
import InputText from "primevue/inputtext";

export default {
  name: "EsqueciSenhaView",
  components: {
    Button,
    InputText
  },
  data() {
    return {
      yourEmail: null,
    }
  }
}
</script>

<style scoped lang="scss">
#esqueciSenha {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 60px 0;
}
</style>