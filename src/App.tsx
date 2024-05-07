import { AfterAction } from './AfterAction'
import { ActionState } from './ActionState'
import { BeforeAction } from './BeforeAction'
import { FormStatus } from './FormStatus'

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

      <div>
        <h2>Action State</h2>
        <ActionState />
      </div>

      <div>
        <h2>Form Status</h2>
        <FormStatus />
      </div>
    </div>
  )
}

export default App
