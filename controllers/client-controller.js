import {clientService} from '../service/client-service.js'

const datatable = document.querySelector("[data-table]")

clientService.listaClientes().then((data =>{
    data.forEach(e => {
        const nuevalinea = crearElemento(e.nombre, e.profesion, e.id)
        datatable.appendChild(nuevalinea) //aqui lo agrega a data-table para poder ser leido en document.queryselec
    });
})
).catch((err)=> console.log('err',err))

function crearElemento(nombre,prof,id){ 
    const div = document.createElement("div")
    const contenidoElemento = ` 
    <div class="persona">
    
    <div class="nombre">
        <h4 class="datosPersonas" data-algo>${nombre}</h4>
    </div>
    
    <h4 class="profesion datosPersonas">${prof}</h4>
    <div class="botonera">
    <button class="btn" >
        <a href="http://127.0.0.1:5500/editar.html?id=${id}">
            <i class="iconEdit fa-solid fa-pencil fa-lg" id="${id}"></i>
        </a>
    </button>      
    <button class="btn"><i class="iconDel fa-regular fa-trash-can fa-lg" id="${id}" data-eliminar></i> </button> 
    </div>
    </div>    
    
    `
    div.innerHTML = contenidoElemento;
    const btn = div.querySelector('[data-eliminar]')
    
    btn.addEventListener('click' ,()=>{
        clientService.eliminarId(btn.id).then((resp) =>{
            console.log('Eliminacion exitosa',resp)
        }).catch(err => console.log(err))
        
    })

return div
}


