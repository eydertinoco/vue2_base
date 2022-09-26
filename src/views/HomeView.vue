<template>
  <div class="home">
    <div class="home__shadow">
      <div class="home__logo">
        <img alt="Vue logo" src="../assets/icon.png">
      </div>
      <div class="home__info">
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

            <router-link to="/esquecisenha">Esqueci minha senha</router-link>
            <router-link to="/criarconta">Criar conta</router-link>
          </div>
        </Panel>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Panel from 'primevue/panel';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import RadioButton from 'primevue/radiobutton';

export default {
  name: 'HomeView',
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
.home {
  background-image: url("../assets/fotoInicial.jpeg");
  background-size: cover;
  &__shadow {
    background-color: #00000040;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    height: calc(100vh - 180px);
  }
  &__logo {
    background: white;
    border-radius: 100%;
    & img {
      width: 300px;
    }
  }
  &__info {
    background: white;
    border-radius: 10px;
    padding: 20px;
    margin: 50px 0;
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
}
</style>