//Faz a seleção de todas as estruturas que vão ser ultilizada e de pois passa para modificação 

let prevButton = document.getElementById('prev') // ultilizando id
let nextButton = document.getElementById('next') // ultilizando id
let container = document.querySelector('.container') // .container
let items = container.querySelectorAll('.list .item') // Pega todas classe dentro de list e item
let indicator = document.querySelector('.indicators') // .indicators
let dots = indicator.querySelectorAll('ul li') // todas ul e li


// Passo = é faço a remoçao a classe active da classe atual
// Mudo o dots
// E de pois trago o item certo para tela

let active = 0
let firstPosition = 0
let lastPosition = items.length - 1 // para não ficar colocando 1,2,3,4 para ultima classe, faz desse jeito para ja ir contando a ultima casa

function setSlider(){
    let itemOld = container.querySelector('.list .item.active') // ele procurar o cara na .list .item.active
    itemOld.classList.remove('active') //classList = pegando as classe dentro dele e remove = remove o active 

    // Nesta parte vamos mexer com a barra que estão de branco para verde quando se passa de item

    let dotsOld = indicator.querySelector('ul li.active') 
    dotsOld.classList.remove('active')
    dots[active].classList.add('active')

    // Para mudar o numero
    // innerHTML ele serve para mudar os numero quando é clicado na seta
    indicator.querySelector('.number').innerHTML = '0' + (active + 1)
}


nextButton.onclick = () => {    

    // fazendo a verificação, isso daqui de baixo é mesma coisa de if() - else()
    if (active + 1 > lastPosition) {
        active = 0
    } else {
        active = active + 1
    }

    setSlider() //nesse voce coloca ele de pois 
    
    items[active].classList.add('active');
    
    // Outras forma de usar if-else
    //active = active + 1 > lastPosition ? 0 : active + 1
    //items[active].classList.add('active')
}

prevButton.onclick = () => {  

    if (active - 1 < firstPosition) {
        active = lastPosition;  // Volta para o último item
    } else {
        active = active - 1
    }

    setSlider() //tem que colocar depois da função pq se for colocado antes ele vai coloca o acitive primeiro, revomer a função e não vai acionar no final
    // primeiro ele tem que remover o antigo para de pois colocar o novo e antes de fazer isso eu preciso saber qual vai ser o atual ou o novo

    items[active].classList.add('active')
};

