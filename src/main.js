// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
// global registration components
import CompositionComponents from './components/CompositionComponents.vue'
import OptionsComponents from './components/OptionsComponents.vue'

//registration component
const app = createApp(App)
//membuat componen secara global
app
    .component('CompositionComponents', CompositionComponents) 
    .component('OptionsComponents', OptionsComponents)
app.mount('#app')
