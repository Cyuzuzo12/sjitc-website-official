import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAvvg5Y4l4lv4ndyVUaD-N31sppRONKHeQ",
    authDomain: "sjitc-official-website-ba0c5.firebaseapp.com",
    databaseURL: "https://sjitc-official-website-ba0c5.firebaseio.com",
    projectId: "sjitc-official-website-ba0c5",
    storageBucket: "sjitc-official-website-ba0c5.appspot.com",
    messagingSenderId: "982079750746",
    appId: "1:982079750746:web:259e1a4af0cb1e5e298e63",
    measurementId: "G-Y8EX7TNC7L"
  };

  firebase.initializeApp(firebaseConfig);

 const firebaseDB = firebase.database();
 const firebaseNews =firebaseDB.ref('news');
 const firebaseLeaders =firebaseDB.ref('leaders');
 const googleAuth =new firebase.auth.GoogleAuthProvider();

 const fireBaseLooper =(snapshot)=>{
    const data = [];
    snapshot.forEach((childSnapshot)=>{
        data.push({
            ...childSnapshot.val(),
            id:childSnapshot.key
        })
    });
    return data
 }
//  firebaseDB.ref().set('it works');

 export{
     firebaseDB,
     googleAuth,
     firebase,
     firebaseLeaders,
     firebaseNews,
     fireBaseLooper
 }
