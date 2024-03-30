/*Função para quando o mouse passar por cima do cartão*/

function handleMouseEnter() {
    this.classList.add('chovered');
    document.body.id = `${this.id}hovered`;
}

/*Função para quando o mouse sair de cima do cartão */

function handleMouseLeave() {
    this.classList.remove('chovered')
    document.body.id='';
}

/*Função para adicionar as classes definidas anteriormente ao elemento */
function addEventListenersToCards() {
    const cardElements = document.getElementsByClassName('cartao');

    for (let i = 0; i < cardElements.length; i++) {
        const card = cardElements[i];
        card.addEventListener('mouseenter', handleMouseEnter);
        card.addEventListener('mouseleave', handleMouseLeave)
    }
}

/*método para chamar as funções definidas*/
document.addEventListener("DOMContentLoaded", addEventListenersToCards, false)


