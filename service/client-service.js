/* 
POST=create, 
UPDATE= (obtener - modificar - enviar ),
*/
const listaClientes =()=> fetch("http://localhost:3000/personas").then(response => response.json()) 

const createCliente = (nombre,profesion)=>{
        return fetch("http://localhost:3000/personas",{
    method: "POST",
    headers:{
        "Content-type":"application/json"
    },
    body: JSON.stringify({nombre,profesion, id: uuid.v4()}) 
    }
    ).then(response => response.json())
}

const eliminarId= (id)=> fetch(`http://localhost:3000/personas/${id}`,{ method: 'DELETE' });


const detalleCliente = (id) => { 
    return fetch(`http://localhost:3000/personas/${id}`).then(resp => resp.json())
    .catch(err => console.log('err',err))
}

const update = (nombre,profesion,id) => {
    return fetch(`http://localhost:3000/personas/${id}`,{
    method: 'PUT',
    headers:{
    "Content-Type": "application/json"
    },
    body: JSON.stringify({nombre,profesion})

    }).then(res => console.log(res));

}


export const clientService = {
    listaClientes,
    createCliente,
    eliminarId,
    detalleCliente,
    update
} 


