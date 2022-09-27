    
    var input = document.querySelector(".input-texto");
    var resultado = document.querySelector(".resultado");
    var sinTexto = document.querySelector(".sin-contenido");
    var mensajeFinal = document.querySelector(".mensaje-final"); 
    var codificación = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    const logo = document.querySelector(".logo");
    const botonEncriptar = document.querySelector(".encriptador");
    const botonDesencriptar = document.querySelector(".desencriptador");
    const botonCopiar = document.querySelector(".copiar");

    function encriptarMensaje(stringEncriptar){        
        stringEncriptar = stringEncriptar.toLowerCase();
        for ( i = 0; i < codificación.length; i ++){
            if (stringEncriptar.includes(codificación[i][0])){
                stringEncriptar = stringEncriptar.replaceAll(codificación[i][0],codificación[i][1]);
            }
        }
        return stringEncriptar;
    }

    function desencriptarMensaje(stringDesencriptar){        
        stringDesencriptar = stringDesencriptar.toLowerCase();
        for ( i = 0; i < codificación.length; i ++){
            if (stringDesencriptar.includes(codificación[i][0])){
                stringDesencriptar = stringDesencriptar.replaceAll(codificación[i][1],codificación[i][0]);
            }
        }
        return stringDesencriptar;
    }

    function encriptar(){
        if (input.value.trim() == ""){
            aparece();
        } else {
            desaparece();
            var mensajeEncriptado = encriptarMensaje(input.value);
            resultado.value = mensajeEncriptado;
            input.value = "";
        }
    }

    function desencriptar(){        
        if (input.value.trim() == ""){
            aparece();
        } else {
            desaparece();
            var mensajeDesencriptado = desencriptarMensaje(input.value);
            resultado.value = mensajeDesencriptado;
            input.value = "";
        }
    }
    
    function copiar(){
        resultado.select();
        navigator.clipboard.writeText(resultado.value);
        resultado.value = "";              
    }

    function home(){
        input.value = "";
        aparece();
    }

    function aparece(){
        sinTexto.style.display = "block";
        botonCopiar.style.display = "none";
        resultado.style.display = "none";
        input.value = "";
    }
    
    function desaparece(){
        sinTexto.style.display = "none";
        botonCopiar.style.display = "block";
        resultado.style.display = "block";
    }

    aparece();
    logo.onclick = home;
    botonEncriptar.onclick = encriptar;
    botonDesencriptar.onclick = desencriptar;
    botonCopiar.onclick = copiar;