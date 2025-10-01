const Card = ({title}) => {
  return (
    <div>
      <h1 className="text-red-600">{title}</h1>
    </div>
  )
}

const Actors = ({actor}) => {
  return (
    <div>
      <h1> <span className="text-blue-600">Actor name:</span> {actor[0].name}</h1>
      <h1> <span className="text-blue-600">Age:</span> {actor[1].age}</h1>
      <h1> <span className="text-blue-600">Character:</span> {actor[2].character}</h1>
      <br />
    </div>
  )
}

const App = () => {
    return (
      <div>
        <h1>this is my first app component in react</h1>
        <Card title="Avenger"/>
        <Card title="Endgame"/>
        <Card title="Civil Wars"/>
        <Actors actor={[{name: "Robert Downey Jr."}, {age: 20}, {character: "Ironman"}]} />
        <Actors actor={[{name: "Chris Evans"}, {age: 22}, {character: "Captain America"}]} />
        <Actors actor={[{name: "Chris Hemsworth"}, {age: 25}, {character: "Thor"}]} />
      </div>
    )
}

export default App