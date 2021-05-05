export default function Player(props){

  const handleClick = () => {
    console.log("clicked")
    props.incrementScore(props.id)
  }

  return (
    <div>
      <ul>
        <li>
          <b>{props.name}</b> score: {props.score}
          <button onClick={handleClick}>increment</button>
        </li>
      </ul>
    </div>
  )
}