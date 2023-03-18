import {useEffect , useState } from 'react'
import { useNavigate } from 'react-router-dom'
import jwt_decode from "jwt-decode";
import './form.css'

const Account = ({Id}) => {

    let [info , setInfo] = useState({})
    const history = useNavigate()

    useEffect(()=>{
      let item = localStorage.getItem('token')

      const decode = jwt_decode(item)

      setInfo(decode)
            
        
    },[])

    console.log(info)
    

    const logout = ()=>{
      localStorage.clear()
      history('/')
      window.location.reload()
    }

  return (
    <div className='full'>
      <h1>Profile</h1>
    <div className='base-container2'>
       <h4>username : {info.username}</h4> 
        <h4>Email : {info.email}</h4> 

        <button className='btnreg' onClick={logout} style={{width : '100%' }}>Logout</button> 
      
    </div>
    </div>
  )
}

export default Account;
