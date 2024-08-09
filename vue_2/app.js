const app = Vue.createApp({
    data() {
        return {
            showBooks: true,
            title: 'The Final Empire',
            author: 'joshua Atanu',
            age : '25'
        }
    },
    methods: {
        // changeTitle(title) {
        //     this.title = title
        // },
        // increaseNumber() {
        //     this.age++;
        // },
        // decreaseNumber() {
        //     this.age--
        // }
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        }
    }
    


});

app.mount('#app')