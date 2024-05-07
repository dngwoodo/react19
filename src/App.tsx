import { AfterAction } from './AfterAction'
import { ActionState } from './ActionState'
import { BeforeAction } from './BeforeAction'
import { FormStatus } from './FormStatus'
import { Optimistic } from './Optimitic'
import { UseWrapper } from './UseWrapper'

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

      <div>
        <h2>Optimistic</h2>
        <Optimistic />
      </div>

      <div>
        <h2>Use</h2>
        <UseWrapper />
      </div>
    </div>
  )
}

export default App
