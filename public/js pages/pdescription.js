import { database, ref, onChildAdded } from "../firebaseConfig.js";

// var productDescriptionPoints = document.getElementById("productDescriptionPoints");
// var productTitle = document.getElementById("productTitle");
// var productPrice = document.getElementById("productPrice");

// var arr = [];

// window.getDatafromDB = function(callback) {
//   var reference = ref(database, "Products/");
//   onChildAdded(reference, function(data) {
//     arr.push(data.val());
//     if (typeof callback === "function") {
//       callback();
//     }
//   });
// }

// window.displayPBDesccription = function() {
//   var obj = arr[0];
// //   console.log(obj);
//   productDescriptionPoints.innerHTML = obj.Description;
//   productTitle.innerHTML = obj.Title;
//   productPrice.innerHTML = obj.Price;
// }

// getDatafromDB(displayPBDesccription);






window.showProductDescription = function(title, description, price, image, image1, image2, image3, image4) {
  localStorage.setItem('productTitle', title);
  localStorage.setItem('productDescription', description);
  localStorage.setItem('productPrice', price);
  localStorage.setItem('productImage', image);
  localStorage.setItem('productImage1', image1);
  localStorage.setItem('productImage2', image2);
  localStorage.setItem('productImage3', image3);
  localStorage.setItem('productImage4', image4);

  window.location.href = 'pdescription.html';
}



