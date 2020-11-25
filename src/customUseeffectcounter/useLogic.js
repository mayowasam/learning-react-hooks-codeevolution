import {useEffect} from 'react'

function useLogic(count) {
    useEffect(() => {
        console.log( document.title)
        document.title= `${count}`
    }, [count])
}

export default useLogic
