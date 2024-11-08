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

let count = 1;

document.geElementByld("radio1").checked = true;

setInterval(function(){
    nextImage();
},5000)

function nextImage(){
    count++;
    if(count>4){
        count = 1;
    }
    document.getElementById("radio"+count).checked = true;
}