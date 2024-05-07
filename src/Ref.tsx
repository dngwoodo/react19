import { RefObject, useRef } from "react";

export function Ref()  {
  const ref = useRef<HTMLDivElement>(null);

  return <RefChild ref={ref} />
}

/**
 * @description
 * forwardRef 없이 ref 를 이제 props 로 사용할 수 있습니다.
 * codemod 제공 예정
 */
function RefChild({ ref }: { ref: RefObject<HTMLDivElement | null> })  {
  return <div ref={ref}>Ref</div>
}