//EJEMPLO 1
/*const miTitulo = document.querySelector('h1');
miTitulo.textContent = '¡Hola mundo!';*/

//EJEMPLO 2
let miImagen = document.getElementById('seleccionFrancia');
miImagen.onclick = function(){
    let miSrc = miImagen.getAttribute('src');   
    if(miSrc === 'imagenes/francia.jpg'){
        miImagen.setAttribute('src','imagenes/francia2.jpg');
    }else{
        miImagen.setAttribute('src','imagenes/francia.jpg');
    }
}

//EJEMPLO 3
let miBoton = document.querySelector('button');
let miTitulo = document.querySelector('h1');

function establecerNombreUsuario(){
    let miNombreUsuario = prompt('Por favor, ingrese su nombre');
    alert('¡Nombre ingresado con éxito!');
    miTitulo.textContent = 'Bienvenidos, ' + miNombreUsuario;
}

miBoton.onclick = function(){
    establecerNombreUsuario();
}