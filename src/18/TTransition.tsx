import { ChangeEvent, useState, useTransition } from "react";

export function Transition() {
  const [name, setName] = useState('');
  const [result, setResult] = useState('');
  const [isPending, startTransition] = useTransition();

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
    startTransition(() => {
      setResult(event.target.value + '의 결과');
    });
  };
  
  return (
    <div>
      <input value={name} onChange={onChange} />
      {isPending ? <p>Loading...</p> : (name ? 
          Array(20000)
            .fill(0)
            .map(
              (_, index) => <div key={index}>{result}</div>
            ) : null)}
    </div>
  );
}