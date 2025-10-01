const Card = () => {
  return (
    <div>
      <h1 className="text-blue-600">This is a card component</h1>
    </div>
  )
}

const App = () => {
    return (
      <div>
        <h1>this is my first app component in react</h1>
        <Card/>
        <Card/>
      </div>
    )
}

export default App