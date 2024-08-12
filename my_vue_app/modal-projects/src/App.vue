<template>
  <div>
    <h1>{{ title }}</h1>

    <div v-if="showModal">
      <Modal
        :header="header"
        :text="header"
        theme="sale"
        @close="toggleModal"
      />
    </div>
    <p>Welcom ...</p>
    <button @click.alt="toggleModal">open modal alt</button>
  </div>
</template>




<script>
import Modal from "./components/Modal.vue";

export default {
  name: "App",
  components: { Modal },
  data() {
    return {
      title: "My first Vue app : )",
      header: "Sign Up fo the Giveaway!",
      text: "Grab your ninja swag for  half Price!",
      showModal: false,
    };
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
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
