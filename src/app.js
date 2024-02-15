let contador = 0;
document.getElementById("radio0").checked= true;

setInterval ( function(){
    proxImg();
},6000)

function proxImg(){
    contador++;
    if(contador>3){
        contador = 0;
    }
    document.getElementById("radio"+contador).checked= true;
}