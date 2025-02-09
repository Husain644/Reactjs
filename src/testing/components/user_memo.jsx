import {React,memo,useCallback} from 'react'

const UserMemo=memo(({num})=> {
    console.log('num from memo:',num)
  return (
    <div style={{border:'1px solid red',width:'400px',borderRadius:'20px',margin:'10px',padding:'10px'}}>
      <h2>user memo components</h2>
      <h3>{num}</h3>
    </div>
  )
})

export default UserMemo;
