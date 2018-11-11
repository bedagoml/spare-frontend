<template>
  <div>

    <!--Stats cards-->
    <div class="row">
        <div class="col-md-3">
            <stats-card>
                <div class="icon-big text-center icon-warning" slot="header">
                    <i class="ti-home"></i>
                </div>
                <div class="numbers" slot="content">
                    <p>Items</p>
                    <span v-if="stats.hasOwnProperty('items')">{{ stats.items }}</span>
                    <span v-else>Unknown</span>
                </div>
                <div class="stats" slot="footer">
                    <i class="ti-reload"></i> Updated Now
                </div>
            </stats-card>
        </div>
        <div class="col-md-3">
            <stats-card>
                <div class="icon-big text-center icon-warning" slot="header">
                    <i class="ti-user"></i>
                </div>
                <div class="numbers" slot="content">
                    <p>Users</p>
                    <span v-if="stats.hasOwnProperty('users')">{{ stats.users }}</span>
                    <span v-else>Unknown</span>
                </div>
                <div class="stats" slot="footer">
                    <i class="ti-reload"></i> Updated Now
                </div>
            </stats-card>
        </div>
        <div class="col-md-3">
            <stats-card>
                <div class="icon-big text-center icon-warning" slot="header">
                    <i class="ti-eye"></i>
                </div>
                <div class="numbers" slot="content">
                    <p>Views</p>
                    <span v-if="stats.hasOwnProperty('views')">{{ stats.views }}</span>
                    <span v-else>Unknown</span>
                </div>
                <div class="stats" slot="footer">
                    <i class="ti-reload"></i> Updated Now
                </div>
            </stats-card>
        </div>
        <div class="col-md-3">
            <stats-card>
                <div class="icon-big text-center icon-warning" slot="header">
                    <i class="ti-heart"></i>
                </div>
                <div class="numbers" slot="content">
                    <p>Likes</p>
                    <span v-if="stats.hasOwnProperty('likes')">{{ stats.likes }}</span>
                    <span v-else>Unknown</span>
                </div>
                <div class="stats" slot="footer">
                    <i class="ti-reload"></i> Updated Now
                </div>
            </stats-card>
        </div>
    </div>
  </div>
</template>
<script>
import { StatsCard } from "../components/index";
export default {
    created() {
        this.getData();
    },
    components: {
      StatsCard
    },
    data() {
    return {
       stats:{}
    };
  },
    methods: {
        getData() {
            axios.get(process.env.MIX_API_URL + 'dashboard',
                {
                    headers: {
                        'Authorization': "Bearer "+ this.$store.getters.accessToken
                    }
                }
            )
                .then(response => {
                    this.stats = response.data;
                })
        }
    }
};
</script>
<style>
</style>
