    
    var input = document.querySelector(".input-texto");
    var resultado = document.querySelector(".resultado");
    var sinTexto = document.querySelector(".sin-contenido");
    var mensajeFinal = document.querySelector(".mensaje-final");
    var placeHolder = document.querySelector(".no-texto"); 
    var codificación = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    const logo = document.querySelector(".logo");
    const botonEncriptar = document.querySelector(".encriptador");
    const botonDesencriptar = document.querySelector(".desencriptador");
    const botonCopiar = document.querySelector(".copiar");
    
        placeHolder.style.display= "none";

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
        var mensajeEncriptado = encriptarMensaje(input.value);
        resultado.value = mensajeEncriptado;
        sinTexto.style.display = "none";
        input.value = "";
    }

    function desencriptar(){
        
        if (input.value == ""){
            document.getElementsByClassName(".no-texto").style.display = "block";
            document.getElementsByClassName(".copiar").style.display = "none";
        }
        var mensajeDesencriptado = desencriptarMensaje(input.value);
        resultado.value = mensajeDesencriptado;
        sinTexto.style.display = "none";
        input.value = "";
    }
    
    function copiar(){
        resultado.select();
        navigator.clipboard.writeText(resultado.value);
        resultado.value = "";              
    }

    function home(){
        input.value = "";
        resultado.value = "";
        sinTexto.style.display = "block"
    }

    
    logo.onclick = home;
    botonEncriptar.onclick = encriptar;
    botonDesencriptar.onclick = desencriptar;
    botonCopiar.onclick = copiar;