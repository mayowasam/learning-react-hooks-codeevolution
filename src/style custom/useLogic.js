import {useState}  from 'react'
import {styles} from '../style custom/styles'


function useLogic() {
    const [disable, setDisable]= useState(false)
    let _styles = (disable) ? { ...styles.default, ...styles.disable } : styles.default

    const handleClick = () => {
        setDisable(prevDis => !prevDis)
    }

return [_styles, handleClick]


}



export default useLogic
