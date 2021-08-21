import "./styles.css"
//import RemoveButton from "../RemoveButton";

const Element = ({text, value, dia, render}) => {
    return(
        <li>
            <span>{render}</span><p className="parrafo-materia" >Materia: {text} </p>
            <p className="parrafo-horario"> Horario: {dia} {value}  hs.</p>
        </li>
    )
}

export default Element;