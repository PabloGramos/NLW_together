export default function Modal(){
    function open(){
        //Funcionalidade de atribuir a classe active para a modal
        document.querySelector('.modal-wrapper').classList.add("active")
    }
    function close(){
        //funcionalidade de removar a classe active da modal
        
    }

    return{
        open, 
        close
    }
}