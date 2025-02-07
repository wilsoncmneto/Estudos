//Faz a seleção de todas as estruturas que vão ser ultilizada e de pois passa para modificação 

let prevButton = document.getElementById('prev') // ultilizando id
let nextButton = document.getElementById('next') // ultilizando id
let container = document.querySelector('.container') // .container
let items = container.querySelectorAll('.list .item') // Pega todas classe dentro de list e item
let indicator = document.querySelector('.indicators') // .indicators
let dots = indicator.querySelectorAll('ul li') // todas ul e li

// 1 Passo = é tirar a classe active da classe atual

let active = 0
let firstPosition = 0
let lastPosition = items.length - 1 // para não ficar colocando 1,2,3,4 para ultima classe, faz desse jeito para ja ir contando a ultima casa

nextButton.onclick = () => {    
    let itemOld = container.querySelector('.list .item.active') // ele procurar o cara na .list .item.active
    itemOld.classList.remove('active') //classList = pegando as classe dentro dele e remove = remove o active 

    // fazendo a verificação, isso daqui de baixo é mesma coisa de if() end else()
    active = active + 1 > lastPosition ? 0 : active + 1
    items[active].classList.add('active')

}

prevButton.onclick = () => {    
    console.log("Botão prev")

}
