import { AfterAction } from './AfterAction'
import { BeforeAction } from './BeforeAction'

function App() {

  return (
    <div>
      <div>
        <h2>Before Action</h2>
        <BeforeAction />
      </div>

      <div>
        <h2>After Action</h2>
        <AfterAction />
      </div>
    </div>
  )
}

export default App
