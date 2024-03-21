const app = Vue.createApp({
    template:`
    <div :style="style">Deneme</div>
    `,
    data() {
      return {
        style:"color:blue"
      }
    },
    methods: {
      
    },
  });
    
  app.mount('#app')