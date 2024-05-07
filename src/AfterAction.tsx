import { useState, useTransition } from "react";
import { updateName } from "./api/name";

// Using pending state from Actions
export function AfterAction() {
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [isPending, startTransition] = useTransition();

  const handleSubmit = () => {
    /**
     * @description
     * - useTransition 은 UI를 차단하지 않고 상태를 업데이트할 수 있는 React Hook입니다.
     * - 즉, 상태변화의 우선순위를 낮춰주는 역할을 수행합니다.
     * @see https://ko.react.dev/reference/react/useTransition#marking-a-state-update-as-a-non-blocking-transition
     */
    startTransition(async () => {
      try {
        await updateName(name);
        setError('');
        window.alert('이름 변경 성공');
      } catch (error) {
        setError('이름 변경 실패');
      }
    })
  };

  return (
    <div>
      {isPending && <p>Loading...</p>}
      <input value={name} onChange={(event) => setName(event.target.value)} />
      <button onClick={handleSubmit} disabled={isPending}>
        Update
      </button>
      {error && <p style={{ color: 'crimson' }}>{error}</p>}
    </div>
  );
}
