import { clientService } from "../service/client-service.js"

const formulario = document.querySelector('[data-persona]')


formulario.addEventListener("submit", (event) =>{
    event.preventDefault()
    let nombre = document.querySelector('[data-name]').value
    let profesion = document.querySelector('[data-prof]').value;
    
    async function creacionExitosa(){
        await Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Creacion exitosa!!',
            showConfirmButton: false,
            timer: 1500
        })
        clientService.createCliente(nombre,profesion)
    }
    creacionExitosa()
        
    })



