// @ts-ignore
import App from './App.vue'
import { createApp } from 'vue'
import { registerGlobalComponents } from './registerGlobalComponents'
import router from './router'
import bootstrap from 'bootstrap'
import jquery from 'jquery'
import popper from 'popper.js'
import firebase from 'firebase'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

const root = createApp(App)
registerGlobalComponents(root)

firebase.initializeApp({
  apiKey: 'AIzaSyDDOdccAcXoyWpqcr731kZp1QjJT3pEjy0',
  authDomain: 'fir-demo-c306d.firebaseapp.com',
  projectId: 'fir-demo-c306d',
  storageBucket: 'fir-demo-c306d.appspot.com',
  messagingSenderId: '183148966015',
  appId: '1:183148966015:web:dc7fcab50500e2c0730f4a',
  measurementId: 'G-R6T5GXFR3V'
})

export const storage = firebase.storage()

root
  .use(router, bootstrap, jquery, popper, VueSweetalert2)
  .mount('#app')
