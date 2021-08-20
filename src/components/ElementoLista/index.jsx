import "./styles.css"
//import RemoveButton from "../RemoveButton";

const Element = ({text, value, render}) => {
    return(
        <li >{render}<p>Materia: {text} </p> <p> Horario: {value}</p></li>
    )
}

export default Element;