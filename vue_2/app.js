const app = Vue.createApp({
    data() {
        return {
            showBooks: true,
            title: 'The Final Empire',
            author: 'joshua Atanu',
            age: '25',
            x: 0,
            y: 0
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
        // toggleShowBooks() {
        //     this.showBooks = !this.showBooks
        // },
        // handleEvent(e, data) {
        //     console.log(e, e.type)
        //     if (data) {
        //         console.log(data)
        //     }
        // },
        // handleMouseMove(e) {
        //     this.x = e.offsetX
        //     this.y = e.offsetY
        // }
    }
    


});

app.mount('#app')