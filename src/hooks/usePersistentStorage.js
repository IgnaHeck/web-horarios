import { useState } from "react"

const usePersistElement = (initialState, state) => {
    const [item, setItem] = useState(() => window.localStorage.getItem('item') || initialState)
    return {
        item,
        setItem
    }
}

export default usePersistElement;