/*menu list animation button*/

function openNav() {
    document.getElementById("menu").style.height = "100%";
  }
  
  function closeNav() {
    document.getElementById("menu").style.height = "0%";
  }


  (function () {

    const link = document.querySelectorAll('nav > .hover-this');
    const cursor = document.querySelector('.cursor');

    const animateit = function (e) {
          const span = this.querySelector('span');
          const { offsetX: x, offsetY: y } = e,
          { offsetWidth: width, offsetHeight: height } = this,

          move = 25,
          xMove = x / width * (move * 2) - move,
          yMove = y / height * (move * 2) - move;

          span.style.transform = `translate(${xMove}px, ${yMove}px)`;

          if (e.type === 'mouseleave') span.style.transform = '';
    };

    const editCursor = e => {
          const { clientX: x, clientY: y } = e;
          cursor.style.left = x + 'px';
          cursor.style.top = y + 'px';
    };

    link.forEach(b => b.addEventListener('mousemove', animateit));
    link.forEach(b => b.addEventListener('mouseleave', animateit));
    window.addEventListener('mousemove', editCursor);

})();

/*History JS*/

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

document.addEventListener('keyup', function (event) {
  
  if (event.key === "ArrowLeft") {
    plusSlides(-1); 
  } else if (event.key === "ArrowRight") {
    plusSlides(1); 
  }
});

function openButton() {
    var textSlider = document.getElementById("text-slider");
    if (textSlider.style.display === "none" || textSlider.style.display === "") {
      textSlider.style.display = "block";
      showSlides(slideIndex); 
    } else {
      textSlider.style.display = "none";
    }
}
  
function closeButton() {
  var textSlider = document.getElementById('text-slider');
  textSlider.style.display = 'none';
}



