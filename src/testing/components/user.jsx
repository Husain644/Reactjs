import {React,useId} from 'react'

function User({num=1}) {
const array=Array.from({length: 1000}, (v, k) => k+1);

return (
    <div style={
    {border:'1px solid red',width:'400px',borderRadius:'20px',margin:'10px',padding:'10px'}}>
     { 
      array.map(()=>{return(
        <p> hello from user</p>
      )})
      }
      <h4>{num}</h4>
      <button onClick={()=>{}}>click</button>
    </div>
  )
}

export default User
