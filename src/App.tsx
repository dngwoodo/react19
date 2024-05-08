import { AfterAction } from './AfterAction'
import { ActionState } from './ActionState'
import { BeforeAction } from './BeforeAction'
import { FormStatus } from './FormStatus'
import { Optimistic } from './Optimitic'
import { UseWrapper } from './UseWrapper'
import { Ref } from './Ref'
import { NameContext, NameContextChild } from './Context'
import { CleanupFunctionForRefs } from './CleanupFunctionForRefs'
import { Meta } from './Meta'
import { StyleSheets } from './StyleSheets'
import { Transition } from './18/TTransition'
import { DeferredValue } from './18/DeferredValue'

function App() {

  return (
    <div>
      <div>
        <h2>Before Action</h2>
        <BeforeAction />
      </div>

      <div>
        <h2>Transition</h2>
        <Transition />
      </div>

      <div>
        <h2>DeferredValue</h2>
        <DeferredValue />
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

      <div>
        <h2>Ref</h2>
        <Ref />
      </div>

      <div>
        <h2>Context</h2>
        <NameContext value="Alice">
          <NameContextChild />
        </NameContext>
      </div>

      <div>
        <h2>Cleanup functions for refs</h2>
        <CleanupFunctionForRefs />
      </div>

      <div>
        <h2>Meta</h2>
        <Meta />
      </div>

      <div>
        <h2>Stylesheets</h2>
        <StyleSheets />
      </div>
    </div>
  )
}

export default App
