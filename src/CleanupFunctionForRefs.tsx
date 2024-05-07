import { useState } from "react";

export function CleanupFunctionForRefs() {
  const [show, setShow] = useState(true);

  return <>
    <button onClick={() => setShow(!show)}>Toggle</button>
    {show && <Child />}
  </>
}

function Child() {
  
  return <>
    <div className="cleanup" ref={(ref) => {
      console.log('ref', ref); // strict mode 에서는 두번 호출 됨.

      /**
       * @description
       * 컴포넌트가 마운트 해제되면 React는 ref 콜백에서 반환된 정리 함수를 호출합니다.
       */
      return () => {
        console.log('cleanup function for ref')
      }
    }}>Ref</div>
  </>
}