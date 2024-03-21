const app = Vue.createApp({
    template:`
    <ul>
      <li v-for="person in persons">Çalışan: {{person.isim}} - Maaş: {{person.maas}}</li>
    </ul>
    `,
    data() {
      return {
        persons: [
          {isim:"Alp", maas:50120},
          {isim:"Eren", maas:26520},
          {isim:"Hilal", maas:520000}
        ]
      }
    },
    methods: {
      
    },
  });
    
  app.mount('#app')