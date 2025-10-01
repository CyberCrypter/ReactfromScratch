const Card = ({title}) => {
  return (
    <div>
      <h1 className="text-blue-600">{title}</h1>
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
      </div>
    )
}

export default App