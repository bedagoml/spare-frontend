<template>
    <div>
        <div class="row">
            <div class="card card-body">
                <paper-table title="Houses" :data="tableData" type="hover">
                    <template slot="columns">
                        <th>Image</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </template>
                    <template slot-scope="{row}">
                        <td><img :src="baseUrl + row.imageUrl" :alt="row.name + 'image'"></td>
                        <td>{{ row.name }}</td>
                        <td>{{ row.email }}</td>
                        <td>{{ row.createdOn | humanReadableDate }}</td>
                        <td>
                            <button class="btn btn-sm btn-primary" @click.prevent="toggleActivation(row)">activate</button>
                        </td>
                    </template>
                </paper-table>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
</style>
<script>
    import { PaperTable } from "../components/index";
    export default  {
        components: {
            PaperTable
        },
        data() {
            return {
                tableData: [
                    {
                        "id": "5bcc953f293c3425546d9f71",
                        "name": "joseph",
                        "email": "kabogo.test@gmail.com",
                        "imageUrl": null,
                        "createdOn": 1540134206899,
                        "accessToken": null
                    },
                    {
                        "id": "5bda962d293c342788b8bdcb",
                        "name": "joseph",
                        "email": "k@mail.com",
                        "imageUrl": null,
                        "createdOn": 1541051949378,
                        "accessToken": null
                    },
                    {
                        "id": "5bdc15ce293c3470ed68417b",
                        "name": "joseph kabogo",
                        "email": "user@mail.com",
                        "imageUrl": "5be32486293c3443a1a4873d",
                        "createdOn": 1541150158484,
                        "accessToken": null
                    },
                    {
                        "id": "5be2e71b293c340a9630370d",
                        "name": "test user",
                        "email": "testuser@mail.com",
                        "imageUrl": "5be2e7ef293c340a9630370e",
                        "createdOn": 1541596954929,
                        "accessToken": null
                    },
                    {
                        "id": "5be32877293c3443a1a48742",
                        "name": "abc",
                        "email": "smabc@gmail.com",
                        "imageUrl": "5be328c7293c3443a1a48743",
                        "createdOn": 1541613687785,
                        "accessToken": null
                    },
                    {
                        "id": "5be32f25293c3443a1a48745",
                        "name": "kabogo",
                        "email": "d@m.com",
                        "imageUrl": null,
                        "createdOn": 1541615397405,
                        "accessToken": null
                    },
                    {
                        "id": "5be3fe06293c3443a1a48746",
                        "name": "mail@user.om",
                        "email": "a@m.com",
                        "imageUrl": null,
                        "createdOn": 1541668358309,
                        "accessToken": null
                    },
                    {
                        "id": "5be3fe1e293c3443a1a48747",
                        "name": "s",
                        "email": "s@ms.com",
                        "imageUrl": null,
                        "createdOn": 1541668382225,
                        "accessToken": null
                    },
                    {
                        "id": "5be6f8fb293c34206c24a7cf",
                        "name": "kabogo",
                        "email": "gibsonsilali@gmail.com",
                        "imageUrl": null,
                        "createdOn": 1541863675393,
                        "accessToken": null
                    }
                ],
                baseUrl: process.env.MIX_API_URL
            }
        },
        filters: {
            humanReadableDate(value) {
                const moment = require('moment');
                return moment.unix(value).format("MMMM Do YY");
            }
        },
        methods: {
            toggleActivation(row) {
                if (confirm('you sure about this?')) {
                    axios.post(process.env.MIX_API_URL + 'dashboard/users/unsuspend/' + row.id, {}, {
                        headers: {
                            'Authorization': 'Bearer ' + this.$store.getters.accessToken
                        }
                    })
                        .then(response =>{

                        });

                }
            }
        }
    }
</script>
