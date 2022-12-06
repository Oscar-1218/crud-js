import { clientService } from "../service/client-service.js";

function avisoError(){
    Swal.fire({
    icon: 'error',
    title: 'Oops...',
    
    text: 'Ocurrio un error!',
    footer: '<a href="http://127.0.0.1:5500/lista.html">Ir a Lista clientes?</a>'
  })
}

const obtenerInfo = async () =>{
    const url = new URL(window.location)
    const id = url.searchParams.get('id')

    try {
        const perfil = await clientService.detalleCliente(id)
        let validar = perfil.nombre == undefined && perfil.prof == undefined        
        if(validar){
            avisoError()
            throw new Error()
        }
        console.log(perfil)
        crearElemento(perfil.nombre, perfil.profesion)
        
    } catch (error) {
        avisoError()
        console.log(error) 
    }
}

obtenerInfo();
const envio_info = document.querySelector('[data-persona]')
envio_info.addEventListener("submit", (event) => {

        event.preventDefault()
        const url = new URL(window.location)
        const id = url.searchParams.get('id')
        let nombre = document.querySelector('[data-name]').value
        let profesion = document.querySelector('[data-prof]').value;
    
        async function guarde(){
            await       
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Modificacion exitosa!!',
                showConfirmButton: false,
                timer: 1500
            })
            
        clientService.update(nombre,profesion,id)          
        }
    guarde()        
})

function crearElemento(nombre,prof){ 
    const persona = document.querySelector('[data-persona]')
    const contenidoElemento = `
    <div class="persona">
    <div class="label-input">
    <label for="nombre">Nombre</label>
    <input type="text" name="nombre" id=""  value="${nombre}" data-name>  
    </div>
    
    <div class="label-input">
    <label for="prof">Profesion</label>
    <input type="text" name="prof" id="" value="${prof}" data-prof>
    </div>    
    
    <button class="btn Confirma btn-success" type="submit">Confirmar</button>
    </div>
    `
    persona.innerHTML = contenidoElemento;        
}

crearElemento();