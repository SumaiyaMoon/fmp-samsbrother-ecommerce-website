// import {database, analytics,  auth, 
//  } from "./../firebaseConfig.js"

import { storage, storageRef, storageLink,
    ref,  uploadBytes, uploadString, uploadBytesResumable, 
    getDownloadURL,getMetadata, updateMetadata, deleteObject, list, listAll
  } from "../firebaseStorage.js"
 const imagesRef = ref(storage, '20000mAh Power Bank/');
 const spaceRef = ref(storage, '20000mAh Power Bank/1.png');

 const productImgfromDB1 = ref(storage, '20000mAh Power Bank/1.png');
 const productImgfromDB2 = ref(storage, '20000mAh Power Bank/2.png');
 const productImgfromDB3 = ref(storage, '20000mAh Power Bank/3.png');
 const productImgfromDB4 = ref(storage, '20000mAh Power Bank/4.png');




var productmainImg= document.getElementById("product_main_img");
var productImg1= document.getElementById("product-img-1");
var productImg2= document.getElementById("product-img-2");
var productImg3= document.getElementById("product-img-3");
var productImg4= document.getElementById("product-img-4");


getDownloadURL(ref(storage, spaceRef))
  .then((spaceRef) => {
    // `url` is the download URL for 'images/stars.jpg'

    // This can be downloaded directly:
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';
    xhr.onload = (event) => {
      const blob = xhr.response;
    };
    xhr.open('GET', spaceRef);
    // xhr.send();

    // Or inserted into an <img> element
    // const img = document.getElementById('myimg');
    // img.setAttribute('src', url);
    productmainImg.src = spaceRef
    

  })
  .catch((error) => {
    // Handle any errors
  });

  // productImg1.src = productImgfromDB1
  // productImg2.src = productImgfromDB2
  // productImg3.src = productImgfromDB3
  // productImg4.src = productImgfromDB4



  getDownloadURL(ref(storage, productImgfromDB1))
  .then((productImgfromDB1) => {
    // `url` is the download URL for 'images/stars.jpg'

    // This can be downloaded directly:
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';
    xhr.onload = (event) => {
      const blob = xhr.response;
    };
    xhr.open('GET', productImgfromDB1);
    // xhr.send();

    // Or inserted into an <img> element
    // const img = document.getElementById('myimg');
    // img.setAttribute('src', url);
    productImg1.src = productImgfromDB1
    

  })
  .catch((error) => {
    // Handle any errors
  });


  getDownloadURL(ref(storage, productImgfromDB2))
  .then((productImgfromDB2) => {
    // `url` is the download URL for 'images/stars.jpg'

    // This can be downloaded directly:
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';
    xhr.onload = (event) => {
      const blob = xhr.response;
    };
    xhr.open('GET', productImgfromDB2);
    // xhr.send();

    // Or inserted into an <img> element
    // const img = document.getElementById('myimg');
    // img.setAttribute('src', url);
    productImg2.src = productImgfromDB2
    

  })
  .catch((error) => {
    // Handle any errors
  });


  getDownloadURL(ref(storage, productImgfromDB3))
  .then((productImgfromDB3) => {
    // `url` is the download URL for 'images/stars.jpg'

    // This can be downloaded directly:
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';
    xhr.onload = (event) => {
      const blob = xhr.response;
    };
    xhr.open('GET', productImgfromDB3);
    // xhr.send();

    // Or inserted into an <img> element
    // const img = document.getElementById('myimg');
    // img.setAttribute('src', url);
    productImg3.src = productImgfromDB3
    

  })
  .catch((error) => {
    // Handle any errors
  });


  getDownloadURL(ref(storage, productImgfromDB4))
  .then((productImgfromDB4) => {
    // `url` is the download URL for 'images/stars.jpg'

    // This can be downloaded directly:
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';
    xhr.onload = (event) => {
      const blob = xhr.response;
    };
    xhr.open('GET', productImgfromDB4);
    // xhr.send();

    // Or inserted into an <img> element
    // const img = document.getElementById('myimg');
    // img.setAttribute('src', url);
    productImg4.src = productImgfromDB4
    

  })
  .catch((error) => {
    // Handle any errors
  });