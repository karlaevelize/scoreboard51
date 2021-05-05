import { useState } from "react"

export default function AddPlayer(props){

  const [name, setName] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()

    if(!name){
      alert("please provide a name")
      return
    }

    if(name.length <= 1){
      alert("name has to be longer")
      return
    }

    props.addPlayer(name)
    setName("")
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        Name: 
        <input 
          type="text" 
          value={name} 
          onChange={(event) => setName(event.target.value)}
        /> 
        <button>Add player</button>
      </form>
    </div>
  )
}