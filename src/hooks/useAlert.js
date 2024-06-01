import {useState} from 'react'

const useAlert = () => {
    const [alert, setAlert] = useState({show:false, text: '', type:'success'})
    const showAlert = ({ text, type = 'success' }) => setAlert({
        show: true,
        type,
        text
     })
     const hideAlert = () => setAlert({
        show: false,
        type: '',
        text: 'success'
     })
  return {alert, showAlert, hideAlert}
}

export default useAlert