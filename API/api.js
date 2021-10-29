const app = new Vue({
    el: '#app',

    data: {
        url: 'http://localhost:3000/cards',
        cardData: ''
    }, 
    methods: {
    },

    mounted() {
        const fullUrl = this.url;
        console.log(fullUrl);
        axios
            .get(fullUrl)
            .then(resp => {
                this.cardData = resp.data;
        })

        .catch(e => {
            console.error(e)
        })
    }

})


