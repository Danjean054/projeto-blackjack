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
let iniciarJogo = confirm("Boas vindas ao jogo de BlackJack \n Quer iniciar uma nova rodada ?")
if (iniciarJogo) {


  let usuario = []

  usuario.push(comprarCarta())

  usuario.push(comprarCarta())

  let valorDoUsuario = usuario[0].valor
  let valorDoUsuario2 = usuario[1].valor
  let somaDoUsuario = valorDoUsuario + valorDoUsuario2


  let computador = []

  computador.push(comprarCarta())

  computador.push(comprarCarta())

  let valorDoComputador = computador[0].valor
  let valorDoComputador2 = computador[1].valor
  let somaDoComputador = valorDoComputador + valorDoComputador2

  if (usuario[0].valor === 11 && usuario[1].valor === 11) {

    usuario = []

    usuario.push(comprarCarta())

    usuario.push(comprarCarta())

  }
  if (computador[0].valor === 11 && computador[1].valor === 11) {

    computador = []

    computador.push(comprarCarta())

    computador.push(comprarCarta())

  }

  let comprarCartaDoJogo = confirm(`Suas cartas são ${usuario[0].texto} ${usuario[1].texto}. A carta revelada do computador é ${computador[0].texto}
      Deseja comprar mais cartas ?`)

  while (comprarCartaDoJogo) {


    guardarTextoDoUsuario = ""

    guardarValorDoUsuario = 0

    guardarTextoDoComputador = ""

    guardarValorDoComputador = 0


    usuario.push(comprarCarta())


    for (const i of usuario) {


      guardarValorDoUsuario += i.valor

      guardarTextoDoUsuario += i.texto

    }
    for (const carta of computador) {


      guardarValorDoComputador += carta.valor

      guardarTextoDoComputador += carta.texto

    }
    comprarCartaDoJogo = confirm(`Suas cartas são ${guardarTextoDoUsuario}. A carta revelada do computador é ${computador[0].texto}
           Deseja comprar mais cartas ?`)


    if (guardarValorDoUsuario > 21) {

      alert(`Usuário - cartas:${guardarTextoDoUsuario} - pontuação ${guardarValorDoUsuario}\nComputador - cartas:  ${guardarTextoDoComputador} - pontuação ${guardarValorDoComputador}\nComputador ganhou`)
      break
    } if (comprarCartaDoJogo === false) {

      if (guardarValorDoUsuario > guardarValorDoComputador && guardarValorDoUsuario <= 21) {

        alert(`Usuário - cartas:${guardarTextoDoUsuario}- pontuação ${guardarValorDoUsuario}\nComputador - cartas:  ${guardarTextoDoComputador} - pontuação ${guardarValorDoComputador}\n Usuário ganhou`)

      } else if (guardarValorDoUsuario < guardarValorDoComputador && guardarValorDoComputador <= 21) {

        alert(`Usuário - cartas:${guardarTextoDoUsuario} - pontuação ${guardarValorDoUsuario}\nComputador - cartas:  ${guardarTextoDoComputador} - pontuação ${guardarValorDoComputador}\nComputador ganhou`)

      } else if (guardarValorDoComputador === guardarValorDoUsuario) {

        alert(`Usuário - cartas:${guardarTextoDoUsuario}- pontuação ${guardarValorDoUsuario}\nComputador - cartas:  ${guardarTextoDoComputador} - pontuação ${guardarValorDoComputador}\n Empate`)
      }
      break
    }

  } while (comprarCartaDoJogo === false || (somaDoUsuario > somaDoComputador && somaDoUsuario < somaDoComputador) && somarDoComputador <= 21) {
 
   
    guardarTextoDoUsuario = ""

    guardarValorDoUsuario = 0

    guardarTextoDoComputador = ""

    guardarValorDoComputador = 0


    computador.push(comprarCarta())


    for (const i of usuario) {


      guardarValorDoUsuario += i.valor

      guardarTextoDoUsuario += i.texto

    }
    for (const j of computador) {


      guardarValorDoComputador += j.valor

      guardarTextoDoComputador += j.texto

    }

    if (guardarValorDoComputador > 21) {

      alert(`Usuário - cartas:${guardarTextoDoUsuario} - pontuação ${guardarValorDoUsuario}\nComputador - cartas:  ${guardarTextoDoComputador} - pontuação ${guardarValorDoComputador}\n Usuário ganhou`)
      break
    }
    if (comprarCartaDoJogo === false) {

      if (guardarValorDoUsuario > guardarValorDoComputador && guardarValorDoUsuario <= 21) {

        alert(`Usuário - cartas:${guardarTextoDoUsuario}- pontuação ${guardarValorDoUsuario}\nComputador - cartas:  ${guardarTextoDoComputador} - pontuação ${guardarValorDoComputador}\n Usuário ganhou`)

      } else if (guardarValorDoUsuario < guardarValorDoComputador && guardarValorDoComputador <= 21) {

        alert(`Usuário - cartas:${guardarTextoDoUsuario} - pontuação ${guardarValorDoUsuario}\nComputador - cartas:  ${guardarTextoDoComputador} - pontuação ${guardarValorDoComputador}\nComputador ganhou`)

      } else if (guardarValorDoComputador === guardarValorDoUsuario) {

        alert(`Usuário - cartas:${guardarTextoDoUsuario}- pontuação ${guardarValorDoUsuario}\nComputador - cartas:  ${guardarTextoDoComputador} - pontuação ${guardarValorDoComputador}\n Empate`)
      }
      break
    }
  }
} else {
  alert(`O jogo acabou`)
}



