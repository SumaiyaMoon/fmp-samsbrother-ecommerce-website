  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
  import { getApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
  import { getStorage, ref, uploadBytes, uploadString, uploadBytesResumable,
     getDownloadURL,getMetadata, updateMetadata, deleteObject, 
     list, listAll } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-storage.js";
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
  const storage = getStorage(app);
  const storageRef = ref(storage);
  const firebaseApp = getApp();
  const storageLink = getStorage(firebaseApp, "gs://moon-fmp-samsbrother-ecom-site.appspot.com");




export { storage, storageRef, storageLink,
  ref,  uploadBytes, uploadString, uploadBytesResumable, 
  getDownloadURL,getMetadata, updateMetadata, deleteObject, list, listAll
}