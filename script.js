




// var select = document.querySelector(".selecao");
// var passo = document.querySelector(".passo");

// function display(){
//   var opcao = document.querySelector('.selecao');
//   if(document.querySelector(".selecao").value == "cesar" ){
//     document.querySelector(".passo").style.display = "flex";
//   }
// }





// var cod = document.querySelector("#Criptografar").value;
// var dec = document.querySelector("#Descriptografar").value;

// function codificacao() {
//   var escolha = document.querySelector("#selecao");
//   if (document.querySelector("#selecao").value == "cesar") {
//     // Se escolher Cesar, Ele já chama a funçao Cesar
//     escolha.style.color = "black";
//     document.getElementById("incremento").style.display = "block";
//     document.querySelector(".textoEntradaC").style.display = "block";
//     document.querySelector(".textoEntrada").style.display = "none";
//     document.querySelector("#txtConvertidoC").style.display = "block";
//     document.querySelector("#txtConvertido").style.display = "none";
//   } else if (document.querySelector("#selecao").value == "64") {
//     //escondendo o inccremento
//     escolha.style.color = "black";
//     document.getElementById("incremento").style.display = "none";
//     //alterando o recebedor de dados e exibição
//     document.querySelector(".textoEntradaC").style.display = "none";
//     document.querySelector(".textoEntrada").style.display = "block";
//     document.querySelector("#txtConvertidoC").style.display = "none";
//     document.querySelector("#txtConvertido").style.display = "block";
//   } else {
//     document.querySelector(".textoEntrada").style.display = "block";
//     document.querySelector(".textoEntradaC").style.display = "none";
//     document.querySelector("#txtConvertidoC").style.display = "none";
//     document.querySelector("#txtConvertido").style.display = "block";
//   }
// }



































































// //ajustando o incremento
// function validaIncremento() {
//     var incremento = document.getElementById("incremento").value;
//     incremento = incremento % 26; //recebe o resto da divisão por 26 que sao as letras do alfabeto
  
//     if (document.querySelector("#Descriptografar").checked) {
//       incremento = incremento * -1; //negativo para decrementar
//     }
//     cesar(incremento); //chama a função cesar que tem o incremento como parametro
//   }
  
//   //logica cesar
//   function cesar(incremento) {
//     var textoDeEntrada = document.querySelector(".textoEntradaC").value;
//     var textoDeSaida = document.querySelector("#txtConvertidoC");
//     var transiçao = ""; //variavel que receberá o valor charcode para ser mudado depois
//     textoDeSaida.innerHTML = ""; //textofinal
  
//     for (var i = 0; i < textoDeEntrada.length; i++) {
//       //for para pegar letra por letra e para incremneta-los
//       transiçao = textoDeEntrada.charCodeAt(i); //numero da letra dentro do for
  
//       if (transiçao >= 65 && transiçao <= 90) {
//         //condiçãopara letras maiusculas
//         transiçao = transiçao + incremento; //soma ao charCode o incremento
//         if (transiçao > 90) {
//           transiçao = transiçao - 26; //Caso o incremento estoure a condição
//         } else if (transiçao < 65) {
//           transiçao = transiçao + 26; //Caso o incremento estoure a condição
//         }
//       }
//       if (transiçao >= 97 && transiçao <= 122) {
//         //condiçao para letras minusculas
//         transiçao = transiçao + incremento; //soma ao charCode o incremento
//         if (transiçao > 122) {
//           transiçao = transiçao - 26; //Caso o incremento estoure a condição
//         } else if (transiçao < 97) {
//           transiçao = transiçao + 26; //Caso o incremento estoure a condição
//         }
//       }
  
//       textoDeSaida.innerHTML += String.fromCharCode(transiçao); //transfromando o charcode em string para exibi-lo
//     }
//   }
  
//   //logica base 64
//   function base64() {
//     var textoDeEntrada = document.querySelector(".entrada").value;
//     var textoDeSaida = document.querySelector(".saida");
//     if (document.querySelector(".criptografia").checked)
//       textoDeSaida.innerHTML = btoa(textoDeEntrada);
//     else textoDeSaida.innerHTML = atob(textoDeEntrada);
//   }