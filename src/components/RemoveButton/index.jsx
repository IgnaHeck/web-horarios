import "./styles.css"

const RemoveButton = ({handleDelete, id}) => {
    const handleClick = (event) =>{
        event.preventDefault();
        handleDelete(id)
    }

    return(
        <p className="noselect" id="remove-button" onClick={(event) => handleClick(event)}>❌</p>
    )
}

export default RemoveButton;