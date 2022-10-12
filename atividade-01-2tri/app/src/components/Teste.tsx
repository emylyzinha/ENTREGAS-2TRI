import { MouseEventHandler, useState } from "react"
import '../App.css'

export default function () {
  const [name, setName] = useState("___")
  const [email, setEmail] = useState("___")

  const buscarDados: MouseEventHandler<HTMLButtonElement> = async ev => {
    ev.preventDefault()
    const request = await fetch(`/api/logged/${localStorage.getItem('token')}`)

    if (request.status >= 200 && request.status <= 299) {
      const user = await request.json()
      setName(user.name)
      setEmail(user.email)
      return
    }

    alert("Deu ruim!")
  }

  return <>
    <div className="container">
      <h1>DADOS DO USUÁRIO</h1>
      <div className="dados">
        <label><b>NOME: </b></label>{name}
      </div>
      <div className="dados">
        <label><b>EMAIL: </b></label>{email}
      </div>
      <button onClick={buscarDados}>Buscar</button>
      <button>Sair</button>
    </div>
  </>
}