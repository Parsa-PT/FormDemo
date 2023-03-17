import React from 'react'
import { useState ,useEffect } from 'react'
import { Link } from 'react-router-dom'
import './form.css'
import { useNavigate } from 'react-router-dom'



const Register = () => {
    const [username , setFname] = useState('')
    const [fullname , setLname] = useState('')
    const [Email , setEmail] = useState('')
    const [Pass , setPass] = useState('')
    const [CPass , setCPass] = useState('')
    let [Submit , setSubmit] = useState(false)
    const [err , setErr] = useState('')
    const [done , setDone] = useState('')
    const [Id , setId] = useState()
    const history = useNavigate()
    

   
    useEffect(()=>{
        setId(Math.floor(Math.random() * 500))
    },[])

    const RegHandle = async(e)=>{
        e.preventDefault()

        if(username || fullname || Email || Pass || CPass === ''){
            setSubmit(false)
            setErr(true)
        } else{
          setSubmit(Submit = true)
        }

        if(username || fullname || Email || Pass || CPass !== ''){
           await fetch('http://127.0.0.1:8000/register/' , {
                method : 'POST',
                body : JSON.stringify({
                    username : username,
                    fullname : fullname,
                    email : Email,
                    password1 : Pass,
                    password2 : CPass,
                    userid : Id
                }),
                headers : {
                    'Content-type': 'application/json; charset=UTF-8'
                }
            })
            .then((response) => {
                if(response.status === 201){
                    setTimeout(()=>{
                        history('/')
                    },2000)
                }else{
                    alert('Bad requests please try again')
                }

                return(
                    response.json()
                )
            })
            .then((json) => console.log(json));

            
        }
        console.log(Id)


        
    }


  return (
    <div className='container'>
        <div className='register' ><h1>Register</h1></div>
        <form onSubmit={RegHandle}>
            <h2>{done}</h2>
            <input type="text"  placeholder='Username' name='username' value={username} onChange={ e => setFname(e.target.value)}/>
            {err && username.length<=0 ? <label>You need to enter your name</label> : null}
            <input type="text"  placeholder='Fullname' name='fullname' value={fullname} onChange={ e => setLname(e.target.value)}/>
            {err && fullname.length<=0 ? <label>You need to enter your name</label> : null}
            <input type="email"  placeholder='Email' name='email' value={Email} onChange={ e => setEmail(e.target.value)}/>
            {err && Email.length<=0 ? <label>You need to enter your email</label> : null}
            <input type="password"  placeholder='Password' name='pass' value={Pass} onChange={ e => setPass(e.target.value)}/>
            {err && Pass.length<=0 ? <label>You need to enter your password</label> : null}
            <input type="password"  placeholder='Confirm' name='pass' value={CPass} onChange={ e => setCPass(e.target.value)}/>
            {err && CPass.length<=0 ? <label>You need to confirm your password</label> : null}
            {Submit ? <button type='submit' >Done</button> : <button type='submit'>Submit</button> }

           <p > <Link style={{textDecoration : 'none'}} to='/' >If you have an account <span >Login</span> </Link></p>
        </form>
    </div>
  )
}

export default Register
