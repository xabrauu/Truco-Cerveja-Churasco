//ativando o meu mobile


function mostraMenu(){
    $(' header nav#nav-esq ul#menu-principal').css('display','flex');
    $(' header nav#nav-esq ul#menu-principal').addClass('animate__animated animate__fadeInRight animate__slow');

    $(' header nav#nav-esq ul#icone-menu li#menu').css('display','none');
    $(' header nav#nav-esq ul#icone-menu li#menuX').css('display','flex');   
}

function escondeMenu(){
    $(' header nav#nav-esq ul#menu-principal').css('display','none');

    $(' header nav#nav-esq ul#icone-menu li#menu').css('display','flex');
    $(' header nav#nav-esq ul#icone-menu li#menuX').css('display','none'); 
}

let controle = true;

$('header nav#nav-esq ul#icone-menu').click(function(){
    if (controle == true){
        mostraMenu();
        controle = false;
    }else{
        escondeMenu();
        controle = true;
    }
})



let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
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
  captionText.innerHTML = dots[slideIndex-1].alt;
}



// Ajuste a rolagem para todas as seções
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        // Pega o ID da seção destino
        const targetId = this.getAttribute('href').substring(1);  // Remove o "#" do href
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            // Define a altura do cabeçalho (ajuste conforme necessário)
            const offset = 70;
            const targetPosition = targetElement.offsetTop - offset;  // Calcula a posição do alvo ajustada

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'  // Rolagem suave
            });
        }
    });
});