document.addEventListener('DOMContentLoaded', function() {
    var title = localStorage.getItem('productTitle');
    var description = localStorage.getItem('productDescription');
    var price = localStorage.getItem('productPrice');
    var image = localStorage.getItem('productImage');
  
    document.getElementById('productTitle').textContent = title;
    document.getElementById('productDescription').textContent = description;
    document.getElementById('productPrice').textContent = 'Price: ' + price;
    document.getElementById('productImage').src = image;
  
    var image1 = localStorage.getItem('productImage1');
    var image2 = localStorage.getItem('productImage2');
    var image3 = localStorage.getItem('productImage3');
    var image4 = localStorage.getItem('productImage4');
  
    var html = '';
    html += '<img class="border rounded m-2 p-2 shadow-sm col-md-4 " src="' + image1 + '" width="100" alt="">';
    html += '<img class="border rounded m-2 p-2 shadow-sm col-md-4 " src="' + image2 + '" width="100" alt="">';
    html += '<img class="border rounded m-2 p-2 shadow-sm col-md-4 " src="' + image3 + '" width="100" alt="">';
    html += '<img class="border rounded m-2 p-2 shadow-sm col-md-4 " src="' + image4 + '" width="100" alt="">';
  
    document.getElementById('productImages').innerHTML = html;
  
    
  });
