  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-analytics.js";
  import { getDatabase, ref, set, onValue, child, get, push, update, runTransaction, onChildAdded,
     onChildChanged, onChildRemoved, orderByChild, query, limitToLast,
     onDisconnect, serverTimestamp  } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCo0FPNwOhekAvGcGP4-84c_jgBmY-JMN4",
    authDomain: "moon-fmp-samsbrother-ecom-site.firebaseapp.com",
    projectId: "moon-fmp-samsbrother-ecom-site",
    storageBucket: "moon-fmp-samsbrother-ecom-site.appspot.com",
    messagingSenderId: "1021389945083",
    appId: "1:1021389945083:web:9c2b2693cadc1b60cd985e",
    measurementId: "G-7G83G95YHB"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const database = getDatabase(app);




export {database, analytics,
  ref, set, onValue, child, get, push, update, runTransaction, onChildAdded, 
  onChildChanged, onChildRemoved, orderByChild, query, limitToLast,
  onDisconnect, serverTimestamp,
}