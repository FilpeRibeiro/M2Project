var select = document.querySelector(".selecao");
 var passo = document.querySelector("#passo");

 select.addEventListener('change', ()=>{
    if(select.value == "cesar" ){
      passo.style.display = "flex";
    }else{
        passo.style.display = "none";
    }

    })
 
 var btn = document.querySelector('.codifica')
 btn.addEventListener('click', function (e) {
      e.preventDefault()
      if(select.value =="cesar"){
        
            var incremento = document.getElementById("chave").value;
            incremento = incremento % 26; 
          
            if (document.querySelector("#decodificar").checked) {
              incremento = incremento * -1;
            }
            cesar(incremento); 
          
          function cesar(incremento) {
            var textoDeEntrada = document.querySelector(".entrada").value;
            var textoDeSaida = document.querySelector(".saida");
            var transiçao = ""; 
            textoDeSaida.innerHTML = ""; 
          
            for (var i = 0; i < textoDeEntrada.length; i++) {
              
              transiçao = textoDeEntrada.charCodeAt(i); 
          
              if (transiçao >= 65 && transiçao <= 90) {
                //condiçãopara letras maiusculas
                transiçao = transiçao + incremento; 
                if (transiçao > 90) {
                  transiçao = transiçao - 26; 
                } else if (transiçao < 65) {
                  transiçao = transiçao + 26; 
                }
              }
              if (transiçao >= 97 && transiçao <= 122) {
                
                transiçao = transiçao + incremento; 
                if (transiçao > 122) {
                  transiçao = transiçao - 26; 
                } else if (transiçao < 97) {
                  transiçao = transiçao + 26; 
                }
              }
              textoDeSaida.innerHTML += String.fromCharCode(transiçao); 
            }
          }
      }else if(select.value == 'b64'){

    var textoDeEntrada = document.querySelector(".entrada").value;
    var textoDeSaida = document.querySelector(".saida");
    if (document.querySelector("#codificar").checked)
      textoDeSaida.innerHTML = btoa(textoDeEntrada);
    else textoDeSaida.innerHTML = atob(textoDeEntrada);
 }
})
 