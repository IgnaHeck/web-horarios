import "./styles.css"
import { useState } from "react"

const Formulario = () =>{

    const [texto, setText] = useState('')
    const [hora, setHora] = useState('')
    const [elements, setElements] = useState([])

    const eliminarElemento = (id) => {
        setElements(elements.filter(element => id !== element.id))
    }
    
    const handleSubmit = evt => {
        const date = new Date()
        evt.preventDefault()
        let elemento = {}
        elemento.id = date.getTime().toString()
        elemento.text = texto
        elemento.hora = hora
        setElements([...elements, elemento])
    }

    const handleChangeText = evt => {
        setText(evt.target.value)
    }

    const handleChangeHora = evt => {
        setHora(evt.target.value)
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>
                Materia: 
                <input onChange={handleChangeText} type="text" value={texto}></input>
            </label>
            <label>
                Horario: 
                <input onChange={handleChangeHora} type="text" value={hora}></input>
            </label>
            <input type="submit" value="Submit"></input>
        </form>
    )
}

export default Formulario