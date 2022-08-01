
/*teste
*/
/*testefunction iniciaSlider(){
    max = 10;
    min= 1;
    fi=1;
    carregaFoto("f1.png");
}


function carregaFoto(foto) {
    document.getElementById('.zoom').style.backgroundImage="URL("+foto+")";
}

function prox(){
    fi++;
    carregaFoto("f"+fi+".png");

}

*/


let imagens= document.querySelectorAll('.small_img');
let modal = document.querySelector('.zoom');
let modalImg = document.querySelector('#zoom_img');
let button = document.querySelector('#button1');
let srcVal="";

for(let i =0; i<imagens.length;i++){
    imagens[i].addEventListener('click',function(){
        
        srcVal = imagens[i].getAttribute('src');
        modalImg.setAttribute('src', srcVal);
        modal.classList.toggle('zoom_active');
    });
    
}

button1.addEventListener('click', function(){
    modal.classList.toggle('zoom_active');
});

/*testefunction iniciaSlider(){
    max = 10;
    min= 1;
    fi=1;
    carregaFoto("f1.png");
}


function carregaFoto(foto) {
    document.getElementById('.zoom').style.backgroundImage="URL("+foto+")";
}

function prox(){
    fi++;
    carregaFoto("f"+fi+".png");

}

*/
