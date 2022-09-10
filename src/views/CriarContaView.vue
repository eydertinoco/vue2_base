<template>
  <div id="cadastro">
    <Panel header="Crie sua Conta">
      <div class="p-d-flex p-flex-column">
        <label>Usuário:</label>
        <InputText type="text" v-model="yourUser"></InputText>

        <Fieldset>
          <label>CEP:</label>
          <InputText type="text" v-model="yourUser"></InputText>

          <label>Avenida:</label>
          <InputText type="text" v-model="yourUser"></InputText>

          <label>Número:</label>
          <InputText type="text" v-model="yourUser"></InputText>

          <label>Complemento:</label>
          <InputText type="text" v-model="yourUser"></InputText>
        </Fieldset>



        <label>Senha:</label>
        <Password v-model="yourPassword" toggleMask></Password>
        <label>Confirmar Senha:</label>
        <Password v-model="yourPassword" toggleMask></Password>

        <Button label="Cadastrar Conta"></Button>

        <router-link to="/login">Acessar Conta</router-link>
      </div>
    </Panel>
  </div>
</template>

<script>
  import Panel from 'primevue/panel';
  import Button from 'primevue/button';
  import InputText from 'primevue/inputtext';
  import Password from 'primevue/password';
  import Fieldset from 'primevue/fieldset';

  export default {
    name: "CriarContaView",
    components: {
      Panel,
      Button,
      InputText,
      Password,
      Fieldset,
    },
  }
</script>

<style scoped lang="scss">
#cadastro {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-image: url("../assets/fotoExemplo.jpeg");
  background-size: cover;
  background-position: bottom;
  background-repeat: no-repeat;
  padding: 50px;
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