const app = Vue.createApp({
    template:`
    <h2>Frameworkler</h2>
    <ul>
      <li v-for="f in frameworks" class="list" :class="{selected:f.selected}" @click="selectTag(f)">
      {{f.name}}
      </li>
    </ul>
    <h3>Seçilen Frameworkler</h3>
    <ul>
      <li v-for="s in selectTags">
      {{s.name}}
      </li>
    </ul>
    `,
    data() {
      return {
        frameworks: [
          {name:"Alp",selected:true},
          {name:"Hilal",selected:true},
          {name:"Yunus",selected:false},
          {name:"Alperen",selected:false}
        ]
      }
    },
    methods: {
      selectTag(f) {
        f.selected=!f.selected;
      }
    },
    computed:{
      selectTags() {
        console.log("Bir değişiklik tespit edildi!");
        return selecteds=this.frameworks.filter(i=>i.selected)
      }
    }
  });
    
  app.mount('#app')