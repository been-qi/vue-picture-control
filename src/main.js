import { createApp } from 'vue'
import App from './App.vue'
let app = createApp(App);
// import pictureControl from './components/pictureControl.vue'
// import pictureControl from './components/index'
import pictureControl from 'vue-picture-control'
import 'vue-picture-control/lib/vue-picture-control.css'
app.use(pictureControl)
// app.component('pictureControl',pictureControl)
app.mount('#app')
