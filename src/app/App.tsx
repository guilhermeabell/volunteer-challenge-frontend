import Button from "../fragments/Button"

function App() {

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', justifyContent: 'center', alignItems: 'center' }}>
    <h1>Hello World</h1>
    <Button hasBorder color="#018762">
      Profissional
    </Button>
     <Button color="#FFF" bgColor="#018762">
      Pessoa Usuária
    </Button>
    </div>
  )
      
}

export default App
