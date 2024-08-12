<template>
  <div>
    <h1>{{ title }}</h1>

    <div v-if="showModal">
      <Modal theme="sale" @close="toggleModal">
        <template v-slot:links>
          <a href="#">sign up now</a>
          <a href="#">more info</a>
        </template>
        <h1>Ninja giveaway</h1>
        <p>Grab your ninja swag for half the price</p>
      </Modal>
    </div>

    <div v-if="showModalTwo">
      <Modal theme="sale" @close="toggleMyModal">
        <template v-slot:links>
          <a href="#">sign up now</a>
          <a href="#">more info</a>
        </template>
        <h1>Ninja giveaway</h1>
        <p>Grab your ninja swag for half the price</p>
      </Modal>
    </div>
    <p>Welcom ...</p>
    <button @click.alt="toggleModal">open modal alt</button>
    <button @click="toggleMyModal">my modal</button>
  </div>
</template>




<script>
import Modal from "./components/Modal.vue";
import MyModal from "./components/MyModal.vue";
export default {
  name: "App",
  components: { Modal },
  MyModal,
  data() {
    return {
      title: "My first Vue app : )",
      showModal: false,
      showModalTwo: false,
    };
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    },
    toggleMyModal() {
      this.showModalTwo = !this.showModalTwo;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-ser if;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
h1:hover {
  border-bottom: 0px;
}
</style>
