import { useState } from "react"
import Player from "./Player"
import AddPlayer from "./AddPlayer"

function compare_score(player_a, player_b) {
  return player_b.score - player_a.score;
}

function compare_name(player_a, player_b) {
  return player_a.name.localeCompare(player_b.name);
}


export default function Scoreboard(){

  const playersData = [
    { id: 1, name: "Anna", score: 3 },
    { id: 2, name: "Jeroen", score: 5 },
    { id: 3, name: "Maya", score: 7 },
    { id: 4, name: "Anthony", score: 1 }]

  const [players, setPlayers] = useState(playersData)
  const [sortBy, setSortBy] = useState("score")

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

  const changeSorting = (event) => {
    setSortBy(event.target.value)
  }

  const arraySorted = sortBy === "name" 
    ? [...players].sort(compare_name)
    : [...players].sort(compare_score)

  const addPlayer = (name) => {
    //define what is a player
    const newPlayer = {id: players.length + 1, name: name, score: 0}
    //add the new player to the array
    const newArray = [...players, newPlayer]
    //update the state
    setPlayers(newArray)
  }

  return(
    <div>
      <button>Randomize Score</button> <button>Reset Scores</button>
      <br/>
      <br/>
      Sort: <select onChange={changeSorting} value={sortBy}>
        <option value="name">Name</option>
        <option value="score">Score</option>
      </select>
      {arraySorted.map(player => {
        return <Player 
          key={player.id}
          id={player.id}
          name={player.name} 
          score={player.score}
          incrementScore={incrementScore}/>
      })}
      <AddPlayer addPlayer={addPlayer}/>
    </div>
  )
}