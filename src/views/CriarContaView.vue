<template>
  <div id="cadastro">
    <Panel header="Crie sua Conta">
      <div class="p-d-flex p-flex-column">

        <Fieldset>
          <label>Usuário:</label>
          <InputText type="text" v-model="yourUser"></InputText>

          <label>Nome:</label>
          <InputText type="text" v-model="yourName"></InputText>

          <label>Gênero:</label>
          <Dropdown v-model="selectedGender" :options="gender" optionLabel="name" optionValue="code"/>

          <label>E-mail:</label>
          <InputText type="text" v-model="yourEmail"></InputText>
        </Fieldset>

        <Fieldset>
          <label>CEP:</label>
          <InputText type="text" v-model="yourCEP"></InputText>

          <label>Avenida:</label>
          <InputText type="text" v-model="yourStreet"></InputText>

          <label>Número:</label>
          <InputText type="text" v-model="yourHouseNumber"></InputText>

          <label>Complemento:</label>
          <InputText type="text" v-model="yourHouseComplemet"></InputText>
        </Fieldset>

        <Fieldset>
          <label>Senha:</label>
          <Password v-model="yourPassword" toggleMask></Password>

          <label>Confirmar Senha:</label>
          <Password v-model="yourPasswordConfirm" toggleMask></Password>
        </Fieldset>

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
  import Dropdown from 'primevue/dropdown';

  export default {
    name: "CriarContaView",
    components: {
      Panel,
      Button,
      InputText,
      Password,
      Fieldset,
      Dropdown,
    },
    data() {
      return {
        yourUser: null,
        yourName: null,
        yourEmail: null,
        selectedGender: null,
        yourCEP: null,
        yourStreet: null,
        yourHouseNumber: null,
        yourHouseComplemet: null,
        yourPassword: null,
        yourPasswordConfirm: null,
        gender: [
          {
            name: 'Masculino',
            code: 'M',
          },
          {
            name: 'Feminino',
            code: 'F',
          },
          {
            name: 'Outros',
            code: 'O',
          }
        ]
      }
    }
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