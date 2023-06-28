/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

    console.log("Boas vindas ao jogo de BlackJack");
    const iniciarJogo =  confirm("Quer iniciar uma nova rodada ?")

   
    const usuario = comprarCarta()

    const usuario2 = comprarCarta()
 
    let soma = Number(usuario.valor + usuario2.valor)
 
    const computador = comprarCarta()
 
    const computador2 = comprarCarta()
 
    let soma2 = Number(computador.valor + computador2.valor)


    if (iniciarJogo === true){

      console.log("iniciar uma rodada");

      if (soma > soma2 && soma <= 21) {

       console.log(`Usuário cartas: ${usuario.texto} ${usuario2.texto}  pontuação ${soma}`);

       console.log(`Computador cartas: ${computador.texto} ${computador2.texto},pontuação ${soma2}`);
      
       console.log("Usuário ganhou");

   }  else if (soma < soma2 && soma2 <= 21) {

       console.log(`Usuário cartas: ${usuario.texto} ${usuario2.texto}  pontuação ${soma}`);

       console.log(`Computador cartas: ${computador.texto} ${computador2.texto},pontuação ${soma2}`);


       console.log("Computador ganhou");
         
   }  else if(soma === soma2) {

      console.log("Empate");
      
   }  
   }else{

      console.log("O jogo acabou");
}



  