<template>
    <div class="row">
        <div class="col-md-6 offset-3">
            <div class="alert alert-danger" v-if="form.errors.alert">
                {{ form.errors.message }}
            </div>
            <card class="card-user">
                <div slot="header">
                    Login
                </div>
                <div slot="default">
                    <fg-input label="Email" placeholder="Email"  v-model="form.email" type="email"></fg-input>
                    <fg-input label="Password" placeholder="Password" v-model="form.password" type="password"></fg-input>
                </div>
                <div class="stats" slot="footer">
                    <button @click="submit" type="button" :disabled="loading" class="btn btn-block btn-primary">
                        <span v-if="!loading">Login</span>
                        <div v-if="loading" class="spinner">
                            <div class="double-bounce1"></div>
                            <div class="double-bounce2"></div>
                        </div>
                    </button>
                </div>
            </card>
        </div>
    </div>
</template>

<script>
    import {Card} from '../components';
    export default {
        name: "Login",
        components: {
            Card
        },
        data() {
            return {
                loading: false,
                form: {
                    email: '',
                    password: '',
                    errors: {
                        alert: false,
                        message: ''
                    }
                }
            }
        },
        methods: {
            submit() {
                this.loading = true;
                var formData = new FormData();
                formData.append('email', this.form.email);
                formData.append('password', this.form.password);

                axios.post(process.env.MIX_API_URL+ 'login', formData)
                    .then(response => {
                        this.loading = false;
                        if (response.data.status === 'failed') {
                            this.form.errors.alert = true;
                            this.form.errors.message = response.data.message;
                            return;
                        }
                        const userDetails = response.data;
                        const store = this.$store;
                        store.commit('updateUser', userDetails);
                        if (this.loggedIn) {
                            this.$router.push('/dashboard');
                        }
                    })
                    .catch(error => {

                    });
            },
        },
        computed: {
            loggedIn() {
                return this.$store.getters.loggedIn;
            }
        }
    }
</script>

<style scoped>
    .spinner {
        width: 20px;
        height: 20px;

        position: relative;
        margin: 5px auto;
    }

    .double-bounce1, .double-bounce2 {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-color: #333;
        opacity: 0.6;
        position: absolute;
        top: 0;
        left: 0;

        -webkit-animation: sk-bounce 2.0s infinite ease-in-out;
        animation: sk-bounce 2.0s infinite ease-in-out;
    }

    .double-bounce2 {
        -webkit-animation-delay: -1.0s;
        animation-delay: -1.0s;
    }

    @-webkit-keyframes sk-bounce {
        0%, 100% { -webkit-transform: scale(0.0) }
        50% { -webkit-transform: scale(1.0) }
    }

    @keyframes sk-bounce {
        0%, 100% {
            transform: scale(0.0);
            -webkit-transform: scale(0.0);
        } 50% {
              transform: scale(1.0);
              -webkit-transform: scale(1.0);
          }
    }
</style>
