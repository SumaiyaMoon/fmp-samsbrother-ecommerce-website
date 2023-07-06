import {database, analytics, storage, auth, storageRef,
    createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged,
   ref, set, onValue, child, get, push, update, runTransaction, onChildAdded, 
   onChildChanged, onChildRemoved, orderByChild, query, limitToLast,
   onDisconnect, serverTimestamp, uploadBytes, uploadString, uploadBytesResumable, 
   getDownloadURL,getMetadata, updateMetadata, deleteObject, list, listAll
 } from "./../firebaseConfig.js"