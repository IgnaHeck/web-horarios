import "./styles.css"

const Boton = ({className, text, onClick}) => {
    return (
        //Para renderizar mas de un elemento se puede usar <React.Fragment></React.Fragment> que "Envuelve" lo que haya dentro
        //esto se debe a que React solo puede renderizar un elemento a la vez (pero este puede tener muchos dentro)
        <button className={className} onClick={onClick}>{text}</button>
    )
};

export default Boton;