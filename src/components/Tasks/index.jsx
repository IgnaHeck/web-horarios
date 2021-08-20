import "./styles.css"
//import { useState } from "react"
import useElement from "../../hooks/useElement"
import List from "../Lista"
import Element from "../ElementoLista"
import RemoveButton from "../RemoveButton"


//TODO
//Local Storage (custom hook)
//Componente Formulario

const Tasks = () => { 
    const {changeText, changeHora, addElement, delElement, persistirElemento, elements, hora, texto} = useElement()
    
    
    //Agrega un elemento a la lista, carga el texto y carga el tiempo como id
    const handleSubmit = evt => {
        addElement(hora, texto)
        console.log("addElement:", hora, texto)
        evt.preventDefault()
    }

    const guardar = evt => {
        persistirElemento()
    }

    const handleChangeText = evt => {
        changeText(evt.target.value)
    }

    const handleChangeHora = evt => {
        changeHora(evt.target.value)
    }

    return(
        <>
            <button onClick={guardar}>Guardar</button>
            <form onSubmit={handleSubmit}>
                <label>
                    Materia: 
                    <input onChange={handleChangeText} type="text" value={texto}></input>
                </label>
                <label>
                    Horario: 
                    <input onChange={handleChangeHora} type="text" value={hora}></input>
                </label>
                <button type="submit" value="Submit">Submit</button>
            </form>
            <List className="lista"> {
                elements.map((element, index) => ( //Map retorna a "List" una lista de elementos, "mapeados" junto a su index
                    <Element 
                        key={element.id}
                        text={element.text} 
                        value={element.hora} 
                        render={
                        <RemoveButton id={element.id} handleDelete={delElement}/>}>
                    </Element>
                ))}
            </List>
        </>
    )   
}

export default Tasks;