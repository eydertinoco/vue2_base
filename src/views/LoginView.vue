<template>
  <div id="login">
    <transition-group name="p-messages" tag="div">
      <Message v-for="msg of messages" :severity="msg.severity" :key="msg.content">{{msg.content}}</Message>
    </transition-group>

    <Panel header="Acesse sua Conta">
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


  export default {
    name: 'LoginView',
    components: {
      Panel,
      Button,
      InputText,
      Password
    },
    data() {
      return {
        mensagemValidacao: null,
        statusValidacao: null,
        yourUser: null,
        yourPassword: null,
        messages: [],
        count: 0
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
}

</style>