 import firebase from 'firebase/app';   
 import 'firebase/firestore'   
 import 'firebase/auth'
     // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBQs3kRHiS83bktrudsq60otWmZXcyR04w",
    authDomain: "reactproject-796a9.firebaseapp.com",
    databaseURL: "https://reactproject-796a9.firebaseio.com",
    projectId: "reactproject-796a9",
    storageBucket: "reactproject-796a9.appspot.com",
    messagingSenderId: "337925590064"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({timestampsInSnapshots:true});

  export default firebase ;