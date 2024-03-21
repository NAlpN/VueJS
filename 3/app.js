const app = Vue.createApp({
    template:`
    <div v-if="showInfo">Deneme Yazısı</div>
    <div v-show="!showInfo">Deneme Yazısı 2</div>
    <button @click="toggle">
      <span v-if="!showInfo">Göster</span>
      <span v-else>Gizle</span>
    </button>
    `,
    data() {
        return {

        }
    },
    methods: {

    },
});
app.mount('app')