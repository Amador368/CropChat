import firebase from 'firebase'

var config = {
  apiKey: 'AIzaSyDMJZBGDrfxpqYTBhmOMRtuxOAWFEsbJwc',
  authDomain: 'vuejs-dfa53.firebaseapp.com',
  databaseURL: 'https://vuejs-dfa53.firebaseio.com',
  storageBucket: 'vuejs-dfa53.appspot.com',
  messagingSenderId: '554529679770'
}

firebase.initializeApp(config)

export default {
  database: firebase.database()
}

