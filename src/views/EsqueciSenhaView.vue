<template>
  <div id="esqueciSenha">

    <Panel header="Recuperar Senha">
      <div class="p-d-flex p-flex-column">
        <label>Email:</label>

        <InputText type="text" v-model="yourEmail"></InputText>

        <Button label="Enviar Email"></Button>

        <router-link to="/">Acessar Conta</router-link>
      </div>
    </Panel>

  </div>
</template>

<script>
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import Panel from 'primevue/panel';

export default {
  name: "EsqueciSenhaView",
  components: {
    Button,
    InputText,
    Panel
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
  height: calc(100vh - 180px);
  & .p-panel {
    margin: 0 auto;
    max-width: 600px;
    width: 100%;
    & .p-panel-title {
      margin: 0;
    }
  }
  & label {
    display: flex;
    justify-content: flex-start;
    margin: 5px 0;
  }
  & .p-inputtext {
    width: 100%;
  }
  & .p-button {
    margin: 10px 0 0;
  }
}
</style>