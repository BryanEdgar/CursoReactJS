// const element = document.createElement('h1')

// element.innerText = "Hola Mundo"

// const container = document.getElementById("root")

// container.appendChild(element)

import React from 'react'
import ReactDOM from 'react-dom'
import Card from './components/Card'
import 'bootstrap/dist/css/bootstrap.css'
// const user = {
//   primerNombre: prompt("ingrese nombre"),
//   segundoNombre: prompt("ingrese segundo nombre"),
//   imagen: 'https://image.freepik.com/vector-gratis/perfil-personaje-dibujos-animados-avatar-empresario_18591-50586.jpg'
// }

// function getNombre(user) {
//   return `${user.primerNombre} ${user.segundoNombre}`
// }

// function validaUsuario(user) {
//   if (user) {
//     if (user.primerNombre === "" || user.segundoNombre === "") {
//       return <h1>No se ingreso ningun nombre</h1>
//     }
//     return <h1> Hola {getNombre(user)} </h1> //aqui retorno codigo JSX
//   } else {
//     return <h1> No se encontro ningun objeto usuario</h1>
//   }
// }

// const element = <h1> Hola React,{getNombre(user)} </h1> //JSX, con la sentencia { } se concatena y utiliza las variables o funciones
// const element = (
//   <div>
//     <h1>{validaUsuario(user)}</h1>
//     <img src= {user.imagen} height="100px" width="100px" />
//   </div>
// )

const contenedor = document.getElementById("root")

//ReactDOM.render(que,donde) //este metodo recibe dos paramteros .. que elemento va a renderear y donde lo va hacer
ReactDOM.render(<Card
  title="Prueba de Titulo"
  description="Prueba de descipcion"
  img="https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/exercise.png?alt=media&token=b9c4b236-16a9-4a56-bba2-90c9660a0f06"
  leftcolor="#A74CF2"
  rightcolor="#617BFB"

/>, contenedor)
