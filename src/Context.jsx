import { createContext  } from "react";
import Register from "./components/register";
import Account from "./components/account";
import { useState , useEffect } from "react";

const MakeId = createContext(null)

export default MakeId;

   

 export const Contex = ({childern})=>{

    const [Id , setId] = useState()

    useEffect(({childern})=>{
        setId(Math.floor(Math.random() * 200))
    },[])

    

    return (
        <MakeId.Provider value={{name: 'parsa'}}>
           <Register/>
        </MakeId.Provider>
    )
}

