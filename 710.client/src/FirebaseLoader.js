import firebase from 'firebase'

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
