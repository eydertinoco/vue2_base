<template>
  <div id="login">
    <transition-group name="p-messages" tag="div">
      <Message v-for="msg of messages" :severity="msg.severity" :key="msg.content">{{msg.content}}</Message>
    </transition-group>

    <Panel header="Acesse sua Conta">
      <div class="selectTypeUser">
        <div v-for="myUser of typeUser" :key="myUser.key" class="field-radiobutton">
          <RadioButton :inputId="myUser.key" name="myUser" :value="myUser.name" v-model="selectedTypeUser" :disabled="myUser.key === 'Get'" />
          <label :for="myUser.key">{{myUser.name}}</label>
        </div>
      </div>
      <div class="p-d-flex p-flex-column">
        <label>Usuário:</label>
        <InputText type="text" v-model="yourUser"></InputText>
        <label>Senha:</label>
        <Password v-model="yourPassword" toggleMask></Password>

        <Button label="Entrar"></Button>

        <router-link to="/criarconta">Esqueci minha senha</router-link>
        <router-link to="/criarconta">Criar conta</router-link>
      </div>
    </Panel>

  </div>
</template>

<script>
  import Panel from 'primevue/panel';
  import Button from 'primevue/button';
  import InputText from 'primevue/inputtext';
  import Password from 'primevue/password';
  import RadioButton from 'primevue/radiobutton';

  export default {
    name: 'LoginView',
    components: {
      Panel,
      Button,
      InputText,
      Password,
      RadioButton
    },
    data() {
      return {
        mensagemValidacao: null,
        statusValidacao: null,
        yourUser: null,
        yourPassword: null,
        messages: [],
        count: 0,
        typeUser: [
          {name: 'Usuário', key: 'User'},
          {name: 'Cooperativa', key: 'Coop'},
          {name: 'Catador', key: 'Get'},
        ],
        selectedTypeUser: null
      }
    },
    methods: {
      addMessages() {
        this.messages = [
          {severity: 'info', content: 'Dynamic Info Message'},
          {severity: 'success', content: 'Dynamic Success Message'},
          {severity: 'warn', content: 'Dynamic Warning Message'}
        ]
      },
      removeMessages() {
        this.messages = null;
      }
    },
    created() {
      this.selectedTypeUser = this.typeUser[1].name;
    }
  }
</script>

<style scoped lang="scss">
#login {
  & .p-panel {
    margin: 0 auto;
    max-width: 290px;
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
  & a {
    margin: 5px 0 2px;
    text-decoration: none;
    color: blue;
  }
  & .selectTypeUser {
    & .field-radiobutton {
      display: flex;
      align-items: center;
      justify-content: start;
      & label {
        margin-left: 6px;
      }
    }
  }
}

</style>