<template>
    <div>
        <h1>{{ name_store || "My Store"}}</h1>
        <h2 v-html="subTitle"></h2>
        <button
        class="btn btn-primary"
        @click="insert"  ></button>

        <script>
            export default{
                name: "Shopping",
                props: {
                    name_store: String,
                },
                data(){
                    return{
                        subTitle: "<strong> Mult</strong> Shopping",
                        insert: false,
                        newItem:{
                            product: "",
                            priority: "low",
                            color: "black",
                            gift: "false",
                            complements:[],
                        },
                        items: [
                            {id: 1, price: 60,00, img: "https://, product: "chapéu""},
                            {id: 1, price: 60,00, img: "https://, product: "chapéu""},
                            {id: 1, price: 60,00, img: "https://, product: "chapéu""}
                        ]
                    }
                }
            }
        </script>
</template>