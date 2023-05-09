
const contenedorServicios = document.getElementById('contenedor-servicios')

const contenedorCarrito = document.getElementById('carrito-contenedor')

const botonVaciar = document.getElementById('vaciar-carrito')

const btnEnviar= document.getElementById('btnEnviar')



const confirmar= document.getElementById('confirmar')

const aceptar=document.getElementById('aceptar')


const cantidad = document.getElementById('cantidad')
const precioTotal = document.getElementById('precioTotal')
const cantidadTotal = document.getElementById('cantidadTotal')

let carrito = []

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'))
        actualizarCarrito()
    }
})
botonVaciar.addEventListener('click', () => {
    carrito.length = 0
    actualizarCarrito()
})

Servicios.forEach((servicio) => {
    const div = document.createElement('div')
    div.classList.add('servicio') 
    div.innerHTML = `
    <img src=${servicio.img} alt= "">
    <h3>${servicio.nombre}</h3>
    <p class="precioServicio">Precio: $${servicio.precio}</p>
    <button id="agregar${servicio.id}" class="boton-agregar">Agregar</button>`;

    contenedorServicios.appendChild(div)

    
    const boton = document.getElementById(`agregar${servicio.id}`)
   

    boton.addEventListener('click', () => {
       
        agregarAlCarrito(servicio.id)

        swal("¿Desea agregar al carrito?", {
            buttons: {
              cancel: "Cancelar",
              catch: {
                text: "Aceptar",
                value: "catch",
              },
            },
          })
          .then((value) => {
            switch (value) {
           
              case "catch":
                swal({
                    text: "Se ha agregado al carrito",
                    button: "Ok",
                  })
                break;
           
            }
          });
        })
        
        })

        aceptar.addEventListener('click', () => {

            swal({
                    title: "Su consulta fue enviada",
                    icon: "success",
                    button: "Ok",
                  })
                })
      


const agregarAlCarrito = (servId) => {

    
    const existe = carrito.some (serv => serv.id === servId) 

    if (existe){ 
        const serv = carrito.map (serv => { 
           
            if (serv.id === servId){
                serv.cantidad++
            }
        })
    } else { 
        const item = Servicios.find((serv) => serv.id === servId)
        
        carrito.push(item)
        
    }
    
    actualizarCarrito() 
    
    console.log (carrito)
}



      


const eliminarDelCarrito = (servId) => {
    const item = carrito.find((serv) => serv.id === servId)

    const indice = carrito.indexOf(item) 

    carrito.splice(indice, 1)  
   
    actualizarCarrito() 
   
    console.log(carrito)
}

const actualizarCarrito = () => {
    
    contenedorCarrito.innerHTML = "" 
  
    carrito.forEach((serv) => {
        const div = document.createElement('div')
        div.className = ('servicioEnCarrito')
        div.innerHTML = `
        <p>${serv.nombre}</p>
        <p>Precio: $${serv.precio}</p>
        <button onclick="eliminarDelCarrito(${serv.id})" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
        `

        contenedorCarrito.appendChild(div)
        
        localStorage.setItem('carrito', JSON.stringify(carrito))

    })
    
    precioTotal.innerText = carrito.reduce((acc, serv) => acc + serv.cantidad * serv.precio, 0)
    

}

AOS.init({
    offset: 100, 
    delay: 0, 
    duration: 1000 
  });




 
 