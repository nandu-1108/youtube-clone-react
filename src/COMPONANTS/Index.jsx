import React from 'react'
import { IoLogoYoutube } from "react-icons/io";


const Index = () => {
  return (
    <div style={{display:'flex', justifyContent:'center',alignItems:'center',height:100,gap:20}}>
      <input type="text" placeholder='search vedios and content' size={100} style={{borderRadius:20, height:30,padding:10}} />
      <button style={{backgroundColor:'black',color:'whitesmoke'}}>SEND</button>
    </div>
  )
}

export default Index
