<template>
    <div>
        <Panel header="Acesse sua Conta">
            <div class="p-d-flex p-flex-column">
                <label>Usuário:</label>
                <InputText type="text" v-model="yourUser"></InputText>
                <label>Senha:</label>
                <Password v-model="yourPassword" toggleMask></Password>
                <Button label="Entrar"></Button>
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
                yourUser: null,
                yourPassword: null,
            }
        }
    }
</script>

<style scoped lang="scss">
    .p-component, .p-component * {
        margin: 0 auto;
        max-width: 290px;
    }
    .p-panel-title {
        margin: 0;
    }
</style>