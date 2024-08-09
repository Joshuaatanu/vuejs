const app = Vue.createApp({
    data() {
        return {
            url:"http://www.thenetninja.co.uk",
            showBooks: true,
            books: [
                { title: "name of the wind", author: "patrick rothfus",img: 'assets/1.jpg'  },
                { title: "Osofia in london", author: "Nkem Owoh" ,img: 'assets/2.jpg'},
                {title :"Stealing Zenebu", author:"pasat volks", img: 'assets/3.jpg'}
            ]
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
        },
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