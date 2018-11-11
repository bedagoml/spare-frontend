<template>
    <div>

        <!--Stats cards-->
        <div class="row">
            <div class="card card-body">
                <paper-table title="Houses" :data="tableData" type="hover">
                    <template slot="columns">
                        <th>Name</th>
                        <th>Price</th>
                        <th>City</th>
                        <th>Email</th>
                        <th>phone</th>
                        <th>website</th>
                        <th>bathrooms</th>
                        <th>bedrooms</th>
                        <th>Actions</th>
                    </template>
                    <template slot-scope="{row}">
                        <td><b>{{row.name}}</b></td>
                        <td>{{row.price}}</td>
                        <td>{{ row.city }}</td>
                        <td>{{ row.email }}</td>
                        <td>{{ row.phone }}</td>
                        <td>{{ row.website}}</td>
                        <td>{{ row.bathrooms }}</td>
                        <td>{{ row.bedrooms }}</td>
                        <td>
                            <button class="btn btn-sm btn-danger" @click.prevent="deleteItem(row)"><i class="ti-trash"></i></button>
                        </td>
                    </template>
                </paper-table>
            </div>
        </div>
    </div>
</template>
<script>
    import { PaperTable } from "../components/index";
    export default {
        created() {
            this.getData();
        },
        components: {
            PaperTable
        },
        data() {
            return {
                tableData:[]
            };
        },
        methods: {
            getData() {
                axios.get(process.env.MIX_API_URL + 'dashboard/items',
                    {
                        headers: {
                            'Authorization': "Bearer "+ this.$store.getters.accessToken
                        }
                    }
                )
                    .then(response => {
                        this.tableData = response.data;
                        const collection = collect(response.data);
                        console.log(collection);
                    })
            },
            deleteItem(row) {
                if (confirm('are you sure about this?\n There\'s no going back')) {
                    axios.post(process.env.MIX_API_URL +  'dashboard/items/delete/' + row.id, {}, {
                        headers: {
                            "Authorization" : "Bearer " + this.$store.getters.accessToken
                        }
                    })
                    .then(response => {
                        if (response.data.status === 'success') {
                            this.getData();
                            this.notifyVue('item deleted', 'success')
                        }
                    });
                }
            },
            notifyVue (message,type) {
                this.$notify(
                    {
                        message: message,
                        icon: 'fa fa-comment',
                        horizontalAlign: 'right',
                        verticalAlign: 'top',
                        type: type
                    })
            }
        }
    };
</script>
<style>
</style>
