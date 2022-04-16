import React from 'react'
interface demoProps{
  name:String;
  data:[];
 
 
}
const Demo=(props:demoProps)=>{
  console.log(props,"66")
  console.log(props.data,'11')


  return(
    <div>
      <pre>{JSON.stringify(props.data)}</pre>
      {props.data && props.data.map(items=>{
        return(
          <div>
            
            <h1>{items.name}</h1>
          </div>
        )
      })}
    
    </div>
  )
}
export default Demo;