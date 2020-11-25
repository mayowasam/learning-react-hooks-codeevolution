import {useEffect} from 'react'

function useDocTitle(count) {
    useEffect(() => {
        document.title = `${count}`
       console.log(document.title)
        
    }, [count])
}

export default useDocTitle
