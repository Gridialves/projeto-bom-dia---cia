const maisa = document.querySelector("img");
const lista = document.querySelector("ul");
const roleta = document.querySelector("main img");

function abrirMenu(){
    // if(!lista.classList.contains("ativo")){
    //     lista.classList.add("ativo")
    
    // }else{
    //     lista.classList.remove("ativo");
    
    // }
    lista.classList.toggle("ativo")
}

function rodaAroda(){
    roleta.classList.toggle("roda-jequiti");
    
}

maisa.onclick = abrirMenu;
roleta.onclick = rodaAroda;

