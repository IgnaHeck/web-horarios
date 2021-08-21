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
    const {changeText, changeHora, changeDia, addElement, delElement, persistirElemento, elements, hora, texto, dia} = useElement()
    
    
    //Agrega un elemento a la lista, carga el texto y carga el tiempo como id
    const handleSubmit = evt => {
        addElement(hora, dia, texto)
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

    const handleChangeDia = evt => {
        changeDia(evt.target.value)
    }

    return(
        <>
            <div className="wrapper">
                <div className="form-wrapper">
                    <form className="formulario" onSubmit={handleSubmit}>
                        <label className="form-label">
                            Materia: 
                            <input className="form-input" onChange={handleChangeText} type="text" value={texto}></input>
                        </label>
                        <label className="form-label">
                            Hora: 
                            <input className="form-input-hora" onChange={handleChangeHora} type="time" value={hora}></input>
                            Dia:
                            <select onChange={handleChangeDia}>
                                <option>Lunes</option>
                                <option>Martes</option>
                                <option>Miercoles</option>
                                <option>Jueves</option>
                                <option>Viernes</option>
                                <option>Sabado</option>
                                <option>Domingo</option>
                            </select>

                        </label>
                        <div className="form-buttons">
                            <button className="form-button" type="submit" value="Submit">Submit</button>
                            
                        </div>
                    </form>
                        <button className="form-button-guardar" onClick={guardar}>Guardar</button> 
                </div>
                <List className="lista"> {
                    elements.map((element, index) => ( //Map retorna a "List" una lista de elementos, "mapeados" junto a su index
                        <Element 
                            key={element.id}
                            text={element.text} 
                            value={element.hora}
                            dia={element.dia}
                            render={
                            <RemoveButton id={element.id} handleDelete={delElement}/>}>
                        </Element>
                    ))}
                </List>
            </div>
        </>
    )   
}

export default Tasks;