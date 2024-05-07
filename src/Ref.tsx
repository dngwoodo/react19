import { RefObject, useRef } from "react";

export function Ref()  {
  const ref = useRef<HTMLDivElement>(null);

  return <RefChild ref={ref} />
}

function RefChild({ ref }: { ref: RefObject<HTMLDivElement | null> })  {
  return <div ref={ref}>Ref</div>
}