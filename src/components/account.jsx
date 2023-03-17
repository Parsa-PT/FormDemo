import {useEffect , useState } from 'react'
import { useNavigate } from 'react-router-dom'
import jwt_decode from "jwt-decode";


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
      history('/home')
    }

  return (
    <div className='container2'>
       <h3>username : {info.username}</h3> 
        <h3>Email : {info.email}</h3> 

        <button onClick={logout} style={{width : '100%' }}>Logout</button> 
      
    </div>
  )
}

export default Account;
