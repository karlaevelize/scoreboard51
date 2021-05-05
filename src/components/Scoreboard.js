import { useState } from "react"
import Player from "./Player"

export default function Scoreboard(){

  const playersData = [
    { id: 1, name: "Anna", score: 3 },
    { id: 2, name: "Jeroen", score: 5 },
    { id: 3, name: "Maya", score: 7 },
    { id: 4, name: "Anthony", score: 1 }]

  const [players, setPlayers] = useState(playersData)

  const incrementScore = (id) => {
    //check if we got the right id to update
    console.log("player to update:", id)
    //map over the players array
    const updatedArray = players.map(player => {
    //if we find the player with the correct id, we update it
     if(player.id === id){
       return {
         //copying the player data
         ...player,
         score: player.score + 1
       }
    //otherwise we return it as it's
     } else {
       return player
     }})
    //check if we got the correct updated data
    console.log("updated Array", updatedArray)
    //put the new array in the state
    setPlayers(updatedArray)
  }

  return(
    <div>
      <button>Randomize Score</button>
      {players.map(player => {
        return <Player 
          key={player.id}
          id={player.id}
          name={player.name} 
          score={player.score}
          incrementScore={incrementScore}/>
      })}
    </div>
  )
}