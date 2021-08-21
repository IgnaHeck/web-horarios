import { useState } from "react"

const useElement = () => {
    const [texto, setText] = useState('')
    const [hora, setHora] = useState('')
    const [dia, setDia] = useState('')
    console.log(window.localStorage.getItem('elementos'))
    const [elements, setElements] = useState(() => JSON.parse(window.localStorage.getItem('elementos')) || [])

    const changeText = (nuevoTexto) => {
        setText(nuevoTexto)
        console.log("Texto:",texto)}

    const changeHora = (nuevaHora) => {
        setHora(nuevaHora)
        console.log("Hora:",hora)}
    
    const changeDia = (nuevoDia) => {
        setDia(nuevoDia)
        console.log("Dia:",dia)}

    const addElement = (hora, dia, texto) => {
        const date = new Date()
        let elemento = {}
        elemento.id = date.getTime().toString()
        elemento.text = texto
        elemento.dia = dia
        elemento.hora = hora
        console.log("Elementos:", elements)
        console.log(elemento)
        setElements([...elements, elemento]) // "..." signigica 'spread operator', transforma un array en una lista de elementos (cuando esta antepuesto)
        console.log("Elementos post setElements:", elements)
    }
    
    
    const delElement = (id) => {
        setElements(elements.filter(element => id !== element.id))
    }
    
    const persistirElemento = () => {
        window.localStorage.setItem('elementos', JSON.stringify(elements))
    }

    return {
        changeText,
        changeHora,
        changeDia,
        addElement,
        delElement,
        persistirElemento,
        elements,
        texto,
        hora,
        dia
    }
}

export default useElement;