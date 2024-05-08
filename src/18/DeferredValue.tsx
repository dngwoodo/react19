import { ChangeEvent, useDeferredValue, useState } from "react";

export function DeferredValue() {
  const [name, setName] = useState('');
  const result = useDeferredValue(name);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);      
  };
  
  return (
    <div>
      <input value={name} onChange={onChange} />
      {
        result ? 
          Array(1000)
            .fill(0)
            .map(
              (_, index) => <div key={index}>{result}</div>
            ) : null
      }
    </div>
  );
}