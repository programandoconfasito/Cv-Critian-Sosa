let seccionHabilidades = false;
document.getElementById("habilidades").addEventListener('click', function(){
    if(seccionHabilidades){
        document.getElementById('oculto').style.display = 'none';
        seccionHabilidades = false;
    } else {
        document.getElementById('oculto').style.display = 'block';
        seccionHabilidades = true;
    }
});
