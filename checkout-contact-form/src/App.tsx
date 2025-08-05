import './App.css'
import { TestComponent } from '@/components/test-component/test-component'
import { Input } from '@/components/input/input'

function App() {

  return (
    <section style={{ padding: "2rem", backgroundColor: "#1b1b1b", display: "flex", flexDirection: "column", gap: "4rem" }}>
      <TestComponent />
      <Input label="Nombre" name="name" type="text" />
    </section>
  )
}

export default App
