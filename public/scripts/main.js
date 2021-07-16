import { text } from 'express'
import Modal from './modal.js'

const modal = Modal()

const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')


//Pegar todos os botoes que existem com a tag check
const checkButtons = document.querySelectorAll(".actions a.chack")

checkButtons.forEach(button => {
    //Adicionar a escuta
    button.addEventListener("click", (event) => handleClick(event, check = true))
})



const deleteButton = document.querySelectorAll(".actions")

deleteButton.forEach( button => {
    button.addEventListener("click", (event) => handleClick(event, false))
})

function handleClick(event, check = true){
    const text = check ? "Marcar como lida" : "Excluir"
    modalTitle.innerHTML = text + "esta pergunta"
    modalDescription,innerHTML = check ? "Tem certeza que deseja marcar como lida essa pergunta?" : "Tem certeza que deseja essa pergunta?"
    modal.open()
}