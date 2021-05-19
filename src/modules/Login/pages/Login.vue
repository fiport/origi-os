<template>
    <v-app>
      <v-container fluid fill-height class="loginOverlay">
        <v-layout flex align-center justify-center>
          <v-flex xs12 sm4>
            <v-card elevation="6">
              <v-card-title>Login</v-card-title>
              <v-card-subtitle>Informe o e-mail e senha para entrar</v-card-subtitle>
              <v-form v-model="valid" ref="form">
                <v-container>
                  <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    label="E-mail *"
                    required
                  ></v-text-field>

                  <v-text-field
                    :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                    v-model="password"
                    :rules="passwordRules"
                    :type="!showPassword ? 'password' : 'text'"
                    label="Senha *"
                    @click:append="showPassword = !showPassword"
                    required
                  ></v-text-field>

                  <v-layout justify-end>
                    <v-btn text @click="submit" 
                      :disabled="!valid">Entrar</v-btn>
                  </v-layout>
                </v-container>
              </v-form>
            </v-card>
            <div class="mt-3">
              <span class="text-caption">
                © 2020 Origi PRO
              </span>
            </div>
          </v-flex>
        </v-layout>
      </v-container>
    </v-app>
</template>

<script>
export default {
  name: 'app-login',

  data () {
    return {
      valid: false,
      showPassword: false,
      password: '',
      passwordRules: [
        (v) => !!v || 'Este campo é obrigatório',
      ],
      email: '',
      emailRules: [
        (v) => !!v || 'Este campo é obrigatório',
        (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'Este campo precisa ser um e-mail válido'
      ],
    }
  },
  methods: {
    submit () {
      if (this.$refs.form.validate()) {
        this.$refs.form.$el.submit()
      }
    },
  }
}
</script>
