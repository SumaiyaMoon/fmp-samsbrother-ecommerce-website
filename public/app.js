


//Reveal On Scroll

window.addEventListener('scroll', reveal)
function reveal(){
var reaveal= document.querySelectorAll('.reveal');
for(var i=0; i< reaveal.length; i++){
    var windowheight = window.innerHeight;
    var reavealTop = reaveal[i].getBoundingClientRect().top
    var reavealPoint = 150;
    if (reavealTop< windowheight - reavealPoint){
        reaveal[i].classList.add('active')
    }
    // else{
    //     reaveal[i].classList.remove('active')

    // }
}
}

//Back To Top Button
// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}




